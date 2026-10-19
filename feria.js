(function(){
"use strict";
const slides=[
 {tag:"01 / ORIGEN",title:"El cuidado empieza desde el primer día.",sub:"Crianza",copy:"De los primeros pollitos a su crecimiento: una historia de atención y trabajo diario.",visual:"🐣",foot:"CRIANZA Y ETAPAS DEL CRECIMIENTO",note:"Explicar brevemente la crianza real. Confirmar edad de ingreso, etapas, responsables y fotografías autorizadas."},
 {tag:"02 / HIDRATACIÓN",title:"Agua disponible, cuando la necesitan.",sub:"Agua y bebederos",copy:"El equipo describe un sistema de tratamiento y bebederos de acceso individual. Incorporaremos imágenes reales para mostrarlo.",visual:"💧",foot:"SISTEMA DE AGUA · PENDIENTE DE DOCUMENTACIÓN",note:"Pedir a Marlon confirmación del origen del agua, tipo de tratamiento y fotos del equipo. Evitar afirmar que el agua es potable sin evidencia."},
 {tag:"03 / ALIMENTACIÓN",title:"La alimentación también se organiza.",sub:"Alimentación",copy:"Comederos diseñados para facilitar el acceso y una rutina de seguimiento diario según lo descrito por la empresa.",visual:"🌾",foot:"COMEDEROS · REGISTROS POR CONFIRMAR",note:"Mostrar los comederos reales. Pedir controles de raciones/frecuencias que puedan comunicarse públicamente."},
 {tag:"04 / SUPERVISIÓN",title:"Personas detrás de cada etapa.",sub:"Equipo y supervisión",copy:"El trabajo de las personas y la observación del entorno forman parte de la historia de Pollazo.",visual:"👥",foot:"TRABAJO Y SUPERVISIÓN",note:"Presentar al equipo con su autorización. No atribuir nombres, roles ni controles que no estén confirmados."},
 {tag:"05 / PREPARACIÓN",title:"Del trabajo al producto empacado.",sub:"Preparación",copy:"Una mirada a la preparación, el empaque y los espacios de conservación que la empresa decida mostrar.",visual:"📦",foot:"PROCESAMIENTO · EMPAQUE · CONSERVACIÓN",note:"Describir los pasos reales y respaldados con tomas originales; evitar dar certificados por supuestos."},
 {tag:"06 / PRODUCTO",title:"Una marca que se reconoce.",sub:"Nuestros productos",copy:"Presentaciones de Pollazo Galapagueño y empaques con la identidad naranja y amarilla.",visual:"🟠",foot:"PRODUCTOS Y PRESENTACIONES · POR CONFIRMAR",note:"Mostrar las cuatro tomas ya generadas para el producto, tras verificar logos, contenido y etiquetas con fotografías reales."},
 {tag:"07 / DIFERENCIA",title:"¿Por qué conocer Pollazo Galapagueño?",sub:"Nuestra propuesta",copy:"Crianza, acceso al agua, alimentación organizada y seguimiento: aspectos a demostrar con hechos, no solo promesas.",visual:"✳",foot:"LOS DIFERENCIADORES REQUIEREN RESPALDO",note:"Preguntar qué distingue realmente a la empresa y qué ejemplos o registros pueden demostrarlo. Evitar comparaciones negativas con otras marcas."},
 {tag:"08 / CONTACTO",title:"La próxima conversación empieza aquí.",sub:"Conversemos",copy:"Conoce nuestros productos y conversemos sobre posibilidades comerciales.",visual:"↗",foot:"CONTACTO EMPRESARIAL · PENDIENTE DE CONFIRMAR",note:"Añadir el teléfono empresarial y, si corresponde, una invitación a compra o distribución cuando Marlon confirme el objetivo."}
];
const q=s=>document.querySelector(s), slide=q("#slide"), wrap=q("#presentacion"), speaker=q("#speaker");let i=0;
function render(){
const s=slides[i];
slide.innerHTML='<div class="slideWords"><span class="sectionTag">'+s.tag+'</span><span class="miniLine"></span><p class="slideSub">'+s.sub+'</p><h3>'+s.title+'</h3><p class="slideCopy">'+s.copy+'</p><div class="slideCaption">'+s.foot+'</div></div><div class="slidePicture"><span class="overprint">P / G</span><div class="pictureCircle"><span>'+s.visual+'</span></div><div class="pictureNote">MATERIAL VISUAL A INTEGRAR<br><strong>'+s.sub.toUpperCase()+'</strong></div><span class="pictureCount">'+String(i+1).padStart(2,"0")+' / '+String(slides.length).padStart(2,"0")+'</span></div>';
q("#slideIndex").textContent=String(i+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0");
q("#speakerText").textContent=s.note;
q("#prev").disabled=i===0;
q("#next").textContent=i===slides.length-1?"Volver al inicio ↺":"Siguiente →";
q("#ticks").innerHTML=slides.map((_,j)=>'<button class="'+(j===i?'active':'')+'" aria-label="Escena '+(j+1)+'" data-slide="'+j+'"></button>').join("");
}
function openSlides(){wrap.hidden=false;render();wrap.scrollIntoView({behavior:"smooth",block:"start"});history.replaceState(null,"","#presentacion");}
function go(x){if(x<0)return;i=x>=slides.length?0:x;render();}
function close(){wrap.hidden=true;history.replaceState(null,"","#inicio");q("#inicio").scrollIntoView({behavior:"smooth"});}
q("#startSlides").addEventListener("click",openSlides);
q("#closeSlides").addEventListener("click",close);
q("#prev").addEventListener("click",()=>go(i-1));
q("#next").addEventListener("click",()=>go(i+1));
q("#ticks").addEventListener("click",e=>{const t=e.target.closest("[data-slide]");if(t)go(Number(t.dataset.slide))});
q("#showNotes").addEventListener("click",()=>{speaker.hidden=!speaker.hidden;q("#showNotes").setAttribute("aria-pressed",String(!speaker.hidden))});
q("#enterFull").addEventListener("click",()=>{if(document.fullscreenElement){document.exitFullscreen?.()}else{wrap.requestFullscreen?.().catch(()=>{})}});
document.addEventListener("keydown",e=>{if(wrap.hidden||["INPUT","TEXTAREA","BUTTON"].includes(document.activeElement.tagName))return;if(e.key==="ArrowRight"||e.key==="PageDown"){e.preventDefault();go(i+1)}else if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();go(i-1)}else if(e.key==="Escape"&&document.fullscreenElement)document.exitFullscreen?.()});
const video=q("#storyVideo"),empty=q("#videoEmpty");
video.addEventListener("loadeddata",()=>{empty.hidden=true;video.classList.add("hasMedia")});
video.addEventListener("error",()=>{empty.hidden=false;video.classList.remove("hasMedia")});
q("#startVideo").addEventListener("click",async()=>{q("#videoCard").scrollIntoView({behavior:"smooth",block:"center"});try{await video.play()}catch(e){empty.hidden=false;empty.querySelector(".emptyMessage small").textContent="El video final todavía no está disponible. Puedes continuar a la presentación."}});
video.addEventListener("ended",()=>{const ok=document.createElement("button");ok.className="afterVideo";ok.textContent="Continuar con la presentación →";ok.addEventListener("click",()=>{ok.remove();openSlides()},{once:true});q("#videoCard").appendChild(ok)});
if(location.hash==="#presentacion")openSlides();
})();