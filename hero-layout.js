/* Portada Pollazo: composición editable sin necesidad de nuevos deploys.
   La página pública lee ajustes desde /api/hero-layout; el editor usa mensajes
   same-origin hacia su iframe. Las aves siguen fuera del editor. */
(()=>{
'use strict';
const editor=new URLSearchParams(location.search).get('editor')==='1';
const selectedMap={
  background:'#hero23SkyAsset',
  subject:'#hero23SubjectAsset',
  leavesBack:'#hero23LeavesBackAsset',
  leavesFront:'#hero23LeavesFrontAsset',
  logo:'.hero23Logo'
};
const initial={
  background:{x:0,y:0,scale:1,opacity:1,z:0,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
  subject:{x:6,y:5.6,scale:.82,opacity:1,z:4,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
  leavesBack:{x:6,y:-8,scale:.84,opacity:1,z:5,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
  leavesFront:{x:8,y:12,scale:.8,opacity:1,z:8,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
  logo:{x:0,y:0,scale:1.32,opacity:1,z:3,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0}
};
const makeDefault=()=>({version:1,layers:structuredClone(initial)});
const elements=Object.fromEntries(Object.entries(selectedMap).map(([key,selector])=>[key,document.querySelector(selector)]));
const stage=document.querySelector('.hero23Scene');
const host=document.querySelector('#holdScreen');
let working=makeDefault(),chosen='subject',currentMotions=[];
const editableKeys=Object.keys(initial);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function motionStop(){currentMotions.forEach(a=>a.cancel());currentMotions=[];}
function baseTransform(v){return 'translate3d('+v.x+'%,'+v.y+'%,0) scale('+v.scale+')';}
function maskFor(v){
  if(v.feather<=0)return 'none';
  const n=Math.max(1,Math.min(20,v.feather));
  const stop=100-n;
  // Cuatro bordes con transición editable; en 0 no hay desenfoque.
  return 'linear-gradient(to right,transparent 0%,#000 '+n+'%,#000 '+stop+'%,transparent 100%)';
}
function apply(input,animate){
  motionStop();
  working=merge(input);
  for(const key of editableKeys) {
    const el=elements[key],v=working.layers[key];if(!el)continue;
    el.style.animation='none';
    el.style.transform=baseTransform(v);
    el.style.setProperty('opacity',String(v.opacity),'important');
    el.style.visibility=v.visible?'visible':'hidden';
    el.style.filter='none';
    el.style.clipPath='inset('+v.clipTop+'% '+v.clipRight+'% '+v.clipBottom+'% '+v.clipLeft+'%)';
    el.style.setProperty('-webkit-mask-image',maskFor(v),'important');
    el.style.setProperty('mask-image',maskFor(v),'important');
    if(key==='background'){
      if(el.parentElement)el.parentElement.style.zIndex=String(v.z);
    }else if(key==='subject'){
      document.querySelector('.hero23ProductStage').style.zIndex=String(v.z);
    }else el.style.zIndex=String(v.z);
    // Publicación: movimiento casi imperceptible sobre los valores editados.
    if(animate&&!reduced.matches&&key!=='background'&&v.visible){
      const a=el.animate([
        {transform:baseTransform(v)},
        {transform:'translate3d('+(v.x+.35)+'%,'+(v.y-.38)+'%,0) scale('+(v.scale*1.004)+')'},
        {transform:baseTransform(v)}
      ],{duration:key==='logo'?8900:key==='subject'?10500:7800+editableKeys.indexOf(key)*550,
          iterations:Infinity,easing:'ease-in-out'});
      currentMotions.push(a);
    }
  }
}
function merge(layout){
 const result=makeDefault();
 for(const key of editableKeys){
  const source=layout?.layers?.[key];
  if(!source||typeof source!=='object')continue;
  for(const [prop,value] of Object.entries(source)){
   if(prop in result.layers[key]&&(typeof value==='number'&&Number.isFinite(value)||typeof value==='boolean'))
      result.layers[key][prop]=value;
  }
 }
 return result;
}
async function fetchPublished(){
 try{
  const r=await fetch('/api/hero-layout',{cache:'no-store'});
  if(!r.ok)throw Error('No disponible: '+r.status);
  const obj=await r.json();
  return obj.layout||null;
 }catch(error){
  if(editor)post({type:'pollazo-error',message:error.message});
  return null;
 }
}
function post(msg){if(editor&&window.parent!==window)window.parent.postMessage(msg,location.origin);}
if(editor){
  document.documentElement.classList.add('pollazo-edit-mode');
  host?.classList.add('pollazo-edit-mode');
  window.addEventListener('message',event=>{
    if(event.origin!==location.origin||event.source!==window.parent)return;
    const msg=event.data;
    if(msg?.type==='pollazo-preview'){apply(msg.layout,false);post({type:'pollazo-layout-applied'})}
    if(msg?.type==='pollazo-select'&&editableKeys.includes(msg.key))chosen=msg.key;
  });
  // Arrastra en la escena. La capa seleccionada se define desde el panel.
  let drag=null;
  host?.addEventListener('pointerdown',event=>{
    if(event.button!==0||event.target.closest('button,a,input,select'))return;
    const el=elements[chosen];if(!el)return;
    event.preventDefault();
    drag={id:event.pointerId,key:chosen,startX:event.clientX,startY:event.clientY,
      width:Math.max(1,el.offsetWidth),height:Math.max(1,el.offsetHeight),
      x:working.layers[chosen].x,y:working.layers[chosen].y};
    host.setPointerCapture(event.pointerId);
  });
  host?.addEventListener('pointermove',event=>{
    if(!drag||event.pointerId!==drag.id)return;
    const entry=working.layers[drag.key];
    entry.x=Math.round((drag.x+(event.clientX-drag.startX)/drag.width*100)*10)/10;
    entry.y=Math.round((drag.y+(event.clientY-drag.startY)/drag.height*100)*10)/10;
    apply(working,false);
    post({type:'pollazo-drag',key:drag.key,entry:working.layers[drag.key]});
  });
  for(const name of ['pointerup','pointercancel']){
   host?.addEventListener(name,()=>{drag=null});
  }
}
fetchPublished().then(published=>{
 if(editor){
   apply(published||makeDefault(),false);
   post({type:'pollazo-ready',layout:working});
 } else if(published){
   apply(published,true);
 }
});
window.addEventListener('pageshow',event=>{
 if(!editor&&event.persisted)fetchPublished().then(layout=>{if(layout)apply(layout,true)});
});
})();
