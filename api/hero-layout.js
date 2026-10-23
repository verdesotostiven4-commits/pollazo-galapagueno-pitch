import { get, put } from '@vercel/blob';
import { createHash, timingSafeEqual } from 'node:crypto';

const PATH = 'pollazo/editor/portada-layout.json';
const ALLOWED = new Set(['background','subject','leavesBack','leavesFront','logo']);
const FIELDS = ['x','y','scale','opacity','z','clipTop','clipRight','clipBottom','clipLeft','feather','visible'];
const ranges = {x:[-120,120],y:[-120,120],scale:[.2,3.5],opacity:[0,1],z:[0,30],
  clipTop:[0,45],clipRight:[0,45],clipBottom:[0,45],clipLeft:[0,45],feather:[0,20]};
const json = (value,status=200)=>new Response(JSON.stringify(value),{
  status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',
    'x-content-type-options':'nosniff','access-control-allow-origin':'none'}
});
function authorized(req) {
  const expected=process.env.POLL_AZ_EDITOR_PASSWORD_SHA256;
  const secret=req.headers.get('authorization')?.replace(/^Bearer\s+/i,'')||'';
  if(!expected||secret.length<20||secret.length>180)return false;
  const digest=createHash('sha256').update(secret).digest();
  const target=Buffer.from(expected,'hex');
  return target.length===digest.length && timingSafeEqual(digest,target);
}
function clean(input) {
  if(!input||typeof input!=='object'||Array.isArray(input))throw Error('Formato inválido');
  const layers=input.layers;
  if(!layers||typeof layers!=='object'||Array.isArray(layers))throw Error('Faltan las capas');
  const output={version:1,layers:{}};
  for(const [key,value] of Object.entries(layers)) {
    if(!ALLOWED.has(key)||!value||typeof value!=='object')throw Error('Capa no permitida');
    const layer={};
    for(const field of FIELDS) {
      if(!(field in value))continue;
      if(field==='visible') {
        if(typeof value[field]!=='boolean')throw Error('Visibilidad inválida');
        layer.visible=value[field];continue;
      }
      const n=value[field];
      if(typeof n!=='number'||!Number.isFinite(n)||n<ranges[field][0]||n>ranges[field][1])
        throw Error('Valor fuera de rango: '+field);
      layer[field]=Math.round(n*1000)/1000;
    }
    output.layers[key]=layer;
  }
  output.updatedAt=new Date().toISOString();
  return output;
}
export default async function handler(request) {
  try {
    const url=new URL(request.url);
    if(url.pathname!== '/api/hero-layout')return json({error:'Ruta inválida'},404);
    if(request.method==='GET') {
      if(!process.env.BLOB_READ_WRITE_TOKEN)return json({error:'Almacenamiento no configurado'},503);
      const stored=await get(PATH,{access:'private'});
      if(!stored)return json({layout:null});
      if(stored.statusCode!==200||!stored.stream)return json({error:'Almacenamiento temporalmente no disponible'},503);
      return json({layout:JSON.parse(await new Response(stored.stream).text())});
    }
    if(request.method!=='PUT')return json({error:'Método no permitido'},405);
    const origin=request.headers.get('origin');
    if(origin && new URL(origin).origin!==url.origin)return json({error:'Origen no permitido'},403);
    if(!authorized(request))return json({error:'Contraseña incorrecta'},401);
    if(!process.env.BLOB_READ_WRITE_TOKEN)return json({error:'Almacenamiento no configurado'},503);
    if((request.headers.get('content-type')||'').split(';')[0]!=='application/json')
      return json({error:'Debe enviarse JSON'},415);
    const payload=await request.text();
    if(payload.length>12000)return json({error:'El diseño es demasiado grande'},413);
    const layout=clean(JSON.parse(payload));
    await put(PATH,JSON.stringify(layout),{
      access:'private',allowOverwrite:true,addRandomSuffix:false,contentType:'application/json',
      cacheControlMaxAge:60
    });
    return json({ok:true,layout});
  } catch(error) {
    if(error instanceof SyntaxError)return json({error:'JSON inválido'},400);
    if(error?.message?.includes('inválid')||error?.message?.includes('rango')||
       error?.message?.includes('permitida')||error?.message?.includes('capas'))
      return json({error:error.message},400);
    console.error('hero-layout:',error);
    return json({error:'No se pudo completar la operación. Inténtalo de nuevo.'},503);
  }
}
