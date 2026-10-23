(()=>{
'use strict';
const $=s=>document.querySelector(s);
const frame=$('#previewFrame');
const defaults={
 background:{x:0,y:0,scale:1,opacity:1,z:0,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
 subject:{x:6,y:5.6,scale:.82,opacity:1,z:4,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
 leavesBack:{x:6,y:-8,scale:.84,opacity:1,z:5,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
 leavesFront:{x:8,y:12,scale:.8,opacity:1,z:8,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0},
 logo:{x:0,y:0,scale:1.32,opacity:1,z:3,visible:true,clipTop:0,clipRight:0,clipBottom:0,clipLeft:0,feather:0}
};
const names={background:'Mar, paisaje y rocas (una fotografía)',subject:'Pollo y tronco (una fotografía)',
 leavesBack:'Hojas superiores',leavesFront:'Hojas inferiores',logo:'Logo'};
const deep=x=>JSON.parse(JSON.stringify(x));
const initial=()=>({version:1,layers:deep(defaults)});
let layout=initial(),selected='subject',ready=false,history=[],future=[],saving=false,lastSnapshot='';
const specs=[
 ['x','Horizontal','positionControls',-100,100,0.5,'%'],
 ['y','Vertical','positionControls',-100,100,0.5,'%'],
 ['scale','Tamaño','positionControls',0.2,3.5,.01,'×'],
 ['z','Delante / detrás','appearanceControls',0,30,1,''],
 ['opacity','Opacidad','appearanceControls',0,1,.01,''],
 ['clipTop','Recortar arriba','edgeControls',0,45,.5,'%'],
 ['clipRight','Recortar derecha','edgeControls',0,45,.5,'%'],
 ['clipBottom','Recortar abajo','edgeControls',0,45,.5,'%'],
 ['clipLeft','Recortar izquierda','edgeControls',0,45,.5,'%'],
 ['feather','Suavizar borde','edgeControls',0,20,1,'%']
];
for(const [prop,label,place,min,max,step,unit] of specs){
 const parent=$('#'+place);
 const div=document.createElement('div');div.className='control';
 const lab=document.createElement('label');lab.htmlFor='range-'+prop;lab.textContent=label;
 const out=document.createElement('output');out.id='value-'+prop;out.htmlFor='range-'+prop;
 const slider=document.createElement('input');slider.type='range';slider.id='range-'+prop;
 slider.min=min;slider.max=max;slider.step=step;slider.setAttribute('aria-label',label);
 lab.appendChild(out);div.append(lab,slider);parent.appendChild(div);
 slider.addEventListener('pointerdown',()=>record());
 slider.addEventListener('input',()=>{
   if(!ready)return;
   layout.layers[selected][prop]=Number(slider.value);
   out.textContent=slider.value+unit;
   updateFrame();
   markDirty();
 });
 slider.addEventListener('change',()=>renderControls());
}
function setStatus(txt){$('#status').textContent=txt;}
function message(txt,error=false){const el=$('#saveMessage');el.textContent=txt;el.className=error?'error':'success';}
function markDirty(){setStatus('Cambios sin guardar · vista previa');message('');}
function record(){
 const serialized=JSON.stringify(layout);
 if(serialized!==lastSnapshot){history.push(serialized);if(history.length>60)history.shift();lastSnapshot=serialized;future=[];}
}
function updateFrame(){frame.contentWindow?.postMessage({type:'pollazo-preview',layout},location.origin);}
function renderControls(){
 const entry=layout.layers[selected];if(!entry)return;
 $('#visible').checked=entry.visible;
 $('#layerNote').textContent=names[selected];
 for(const [prop,, ,,, ,unit] of specs){
   $('#range-'+prop).value=entry[prop];
   $('#value-'+prop).textContent=entry[prop]+unit;
 }
}
function select(key){
 if(!layout.layers[key])return;
 selected=key;$('#layerSelect').value=key;
 frame.contentWindow?.postMessage({type:'pollazo-select',key},location.origin);
 renderControls();
}
$('#layerSelect').addEventListener('change',e=>select(e.target.value));
$('#visible').addEventListener('change',e=>{record();layout.layers[selected].visible=e.target.checked;updateFrame();markDirty()});
$('#resetLayer').addEventListener('click',()=>{
 record();layout.layers[selected]=deep(defaults[selected]);renderControls();updateFrame();markDirty();
});
$('#resetAll').addEventListener('click',()=>{
 if(!confirm('¿Restablecer TODAS las capas de la portada? Podrás deshacerlo antes de guardar.'))return;
 record();layout=initial();renderControls();updateFrame();markDirty();
});
$('#undo').addEventListener('click',()=>{
 if(!history.length)return;
 future.push(JSON.stringify(layout));layout=JSON.parse(history.pop());lastSnapshot=JSON.stringify(layout);
 renderControls();updateFrame();markDirty();
});
$('#redo').addEventListener('click',()=>{
 if(!future.length)return;
 history.push(JSON.stringify(layout));layout=JSON.parse(future.pop());lastSnapshot=JSON.stringify(layout);
 renderControls();updateFrame();markDirty();
});
async function save(){
 if(saving)return;
 const secret=$('#editorSecret').value.trim();
 if(secret.length<20){message('Introduce la contraseña completa para poder guardar.',true);return}
 saving=true;
 $('#saveTop').disabled=$('#saveBottom').disabled=true;
 setStatus('Guardando composición…');message('');
 try{
  const response=await fetch('/api/hero-layout',{method:'PUT',headers:{
   'content-type':'application/json','authorization':'Bearer '+secret
  },body:JSON.stringify(layout),cache:'no-store'});
  const result=await response.json();
  if(!response.ok)throw Error(result.error||'Error HTTP '+response.status);
  layout=result.layout;history=[];future=[];lastSnapshot=JSON.stringify(layout);
  setStatus('Guardado en la página pública');
  message('✓ ¡Guardado! El enlace feria.html ya puede cargar tu nuevo diseño. Ábrelo o recárgalo para comprobar.');
 }catch(e){setStatus('No se pudo guardar');message('No guardado: '+e.message,true)}
 finally{saving=false;$('#saveTop').disabled=$('#saveBottom').disabled=false}
}
$('#saveTop').addEventListener('click',save);
$('#saveBottom').addEventListener('click',save);
window.addEventListener('message',event=>{
 if(event.origin!==location.origin||event.source!==frame.contentWindow)return;
 const msg=event.data;
 if(msg?.type==='pollazo-ready'){
  layout=msg.layout&&msg.layout.layers?msg.layout:initial();
  ready=true;lastSnapshot=JSON.stringify(layout);
  select(selected);renderControls();updateFrame();
  setStatus('Listo · mueve las capas y guarda cuando quieras');
 }
 if(msg?.type==='pollazo-drag'&&ready&&layout.layers[msg.key]){
  layout.layers[msg.key]={...layout.layers[msg.key],...msg.entry};
  if(selected===msg.key)renderControls();
  markDirty();
 }
 if(msg?.type==='pollazo-error')message('Aviso: '+msg.message,true);
});
window.addEventListener('keydown',event=>{
 if(!ready||event.target.closest('input,textarea,select')||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
 event.preventDefault();record();
 const step=event.shiftKey?.2:1;
 const e=layout.layers[selected];
 if(event.key==='ArrowLeft')e.x-=step;
 if(event.key==='ArrowRight')e.x+=step;
 if(event.key==='ArrowUp')e.y-=step;
 if(event.key==='ArrowDown')e.y+=step;
 renderControls();updateFrame();markDirty();
});
})();
