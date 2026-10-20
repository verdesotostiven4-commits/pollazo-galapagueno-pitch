(function(){
"use strict";
const slides=[
 {
  "tag": "01 / NUESTRA PROPUESTA",
  "visual": "opening",
  "title": "¿Por qué conocer al Pollazo Galapagueño?",
  "sub": "Nuestra propuesta",
  "copy": "Te invitamos a conocer el recorrido de nuestro producto: la granja, el trabajo del equipo, el empaque y la distribución en Santa Cruz, Galápagos.",
  "labels": [
   "Crianza",
   "Preparación",
   "Distribución"
  ],
  "foot": "CONOCE NUESTRA HISTORIA EN SANTA CRUZ",
  "detail": "Hoy recorreremos las etapas que forman parte de la historia de Pollazo Galapagueño, desde la granja hasta la llegada de sus productos a los clientes.",
  "note": "Abrir con la pregunta tal como se pidió en la llamada. Dar una bienvenida breve y explicar que el recorrido mostrará granja, alimentación, agua, personal, empaque y distribución. No afirmar certificados ni cifras no verificadas."
 },
 {
  "tag": "02 / CRIANZA",
  "media": {
   "src": "./assets/granja.png",
   "alt": "Imagen de la granja de Pollazo Galapagueño",
   "caption": "LA GRANJA"
  },
  "title": "El cuidado comienza desde el primer día.",
  "sub": "Crianza",
  "copy": "Conoce cómo comienza la historia de los pollitos cuando llegan a la granja y cómo continúa durante sus etapas de crecimiento.",
  "labels": [
   "Llegada",
   "Crecimiento",
   "Cuidado"
  ],
  "foot": "CRIANZA · PRIMERAS ETAPAS",
  "detail": "La crianza es el punto de partida. El recorrido muestra la llegada de las aves y su crecimiento dentro de la granja.",
  "note": "REEMPLAZAR imagen de la granja por fotografía auténtica de pollitos bebés recién llegados en cuanto esté disponible. De momento se conserva granja.png para no inventar ni sustituir por stock."
 },
 {
  "tag": "03 / ALIMENTACIÓN",
  "media": {
   "src": "./assets/comederos.png",
   "alt": "Imagen de los comederos de la granja",
   "caption": "ALIMENTACIÓN EN LA GRANJA"
  },
  "title": "Alimentación y cuidado durante el crecimiento.",
  "sub": "Alimentación",
  "copy": "Los comederos y las tareas de alimentación forman parte de las actividades diarias de la granja.",
  "labels": [
   "Comederos",
   "Alimentación",
   "Crecimiento"
  ],
  "foot": "ALIMENTACIÓN · RECORRIDO POR LA GRANJA",
  "detail": "Aquí mostramos los comederos y hablamos de la alimentación durante el crecimiento. Los procedimientos específicos deberán ser confirmados por la empresa.",
  "note": "El título anterior «La alimentación también se organiza» no convenció. Se utiliza una frase más natural. Mostrar la foto ya subida de comederos."
 },
 {
  "tag": "04 / AGUA Y BEBEDEROS",
  "title": "Agua y bebederos en cada etapa.",
  "sub": "Agua y bebederos",
  "copy": "Conoce cómo se presenta el circuito de agua y dónde están los bebederos utilizados dentro de los galpones.",
  "labels": [
   "Circuito de agua",
   "Bebederos",
   "Galpones"
  ],
  "foot": "AGUA · INSTALACIONES Y BEBEDEROS",
  "detail": "Esta sección permite explicar el recorrido del agua hasta los galpones y el uso de los bebederos. El diagrama es ilustrativo.",
  "note": "El tío pidió usar su imagen CON UN POLLITO y UNIFORME dentro del galpón, y el recorrido del agua (tanques, filtro, tuberías y bebederos). No hay esos archivos en assets; el diagrama actual se mantiene identificado como ilustrativo."
 },
 {
  "tag": "05 / EQUIPO",
  "media": {
   "src": "./assets/equipo.jpg",
   "alt": "Imagen del equipo de Pollazo Galapagueño",
   "caption": "PERSONAS DETRÁS DEL PROCESO"
  },
  "title": "Personal y cuidado en cada etapa.",
  "sub": "Equipo y supervisión",
  "copy": "Detrás del proceso hay personas que participan en las actividades diarias, la supervisión y la preparación del producto.",
  "labels": [
   "Personal",
   "Supervisión",
   "Preparación"
  ],
  "foot": "EQUIPO · TRABAJO DIARIO",
  "detail": "La imagen del equipo acompaña la explicación del paso desde las actividades en la granja hacia el área de preparación.",
  "note": "En el VIDEO NARRADO colocar la capacitación del personal justo antes de pasar del pollo vivo a las instalaciones de faenamiento. No identificar personas sin autorización."
 },
 {
  "tag": "06 / ÁREA BLANCA",
  "media": {
   "src": "./assets/area-blanca.jpg",
   "alt": "Imagen del área blanca de preparación",
   "caption": "ÁREA BLANCA · EMPAQUE"
  },
  "title": "Del trabajo al producto empacado.",
  "sub": "Preparación y empaque",
  "copy": "Una mirada al área de preparación y al empaque del pollo crudo, con la identidad de Pollazo Galapagueño.",
  "labels": [
   "Área blanca",
   "Empaque",
   "Presentación"
  ],
  "foot": "PREPARACIÓN · PRODUCTO ENFUNDADO",
  "detail": "Conoce la etapa de preparación y el empaque del pollo crudo con su presentación de marca.",
  "note": "La prioridad solicitada es una imagen REAL o recreación fiel de alguien enfundando o empacando, en que se vea la funda de la marca y su logo original. No mostrar desplume en el video."
 },
 {
  "tag": "07 / DISTRIBUCIÓN",
  "title": "Del empaque a nuestros clientes.",
  "sub": "Conservación y distribución",
  "copy": "El recorrido continúa con el pesaje, la conservación refrigerada y el transporte de los productos hacia sus puntos de entrega.",
  "labels": [
   "Pesaje",
   "Conservación en frío",
   "Transporte"
  ],
  "foot": "PESAJE · CÁMARA FRÍA · CAMIÓN",
  "detail": "Una vez empacado, el producto continúa por etapas de pesaje, conservación en frío y transporte hacia los clientes.",
  "note": "REEMPLAZAR esquema provisional por tomas reales del pesaje, cámara fría, camión Hino exterior/interior y una tienda autorizada. No inventar clientes o acuerdos comerciales. La voz del video puede continuar: «Día a día, realizamos nuestro recorrido para entregar los productos a nuestros clientes», tras confirmar la rutina."
 },
 {
  "tag": "08 / AGRADECIMIENTO",
  "visual": "closing",
  "title": "Gracias por conocer Pollazo Galapagueño.",
  "sub": "Preguntas y conversación",
  "copy": "Gracias por acompañarnos. ¿Tienen alguna pregunta sobre nuestros productos o nuestro trabajo? Con gusto la responderemos.",
  "labels": [
   "Gracias",
   "Preguntas",
   "Conversemos"
  ],
  "foot": "SANTA CRUZ · GALÁPAGOS",
  "detail": "Este es el espacio para conversar con quienes nos visitan y resolver sus dudas sobre los productos de Pollazo Galapagueño.",
  "note": "Terminar con agradecimiento e invitar al público a hacer preguntas. No se requiere agregar un número de contacto que aún no se haya confirmado."
 }
];
const q=s=>document.querySelector(s), slide=q("#slide"), wrap=q("#presentacion"), speaker=q("#speaker");let i=0;
function processVisual(s){
if(s.visual==="opening")return '<div class="brandPanel"><span class="brandKicker">TE DAMOS LA BIENVENIDA</span><strong>POLLAZO<br>GALAPAGUEÑO</strong><div class="brandDivider"></div><p>CONOCE EL RECORRIDO DE NUESTRO PRODUCTO</p><div class="brandPills"><span>GRANJA</span><span>EMPAQUE</span><span>ENTREGA</span></div></div>';
if(s.visual==="closing")return '<div class="brandPanel closingPanel"><span class="brandKicker">POLLAZO GALAPAGUEÑO</span><strong>¡GRACIAS!</strong><div class="brandDivider"></div><p>¿PREGUNTAS? ESTAMOS AQUÍ PARA CONVERSAR.</p></div>';
const symbols=["◎","≋","✓"];
const nodes=s.labels.map((label,j)=>'<div class="processNode"><small>'+String(j+1).padStart(2,"0")+'</small><span class="processSymbol">'+symbols[j]+'</span><b>'+label+'</b></div>').join('<span class="processArrow" aria-hidden="true">→</span>');
if(s.tag.includes("AGUA Y BEBEDEROS"))return '<div class="processPanel waterDiagram"><img src="./assets/esquema-agua.svg" alt="Esquema ilustrativo del circuito de agua" loading="lazy"/><small class="diagramDisclaimer">ESQUEMA EXPLICATIVO · INSTALACIONES POR CONFIRMAR</small></div>';
return '<div class="processPanel"><small class="diagramType">ASÍ CONTAMOS EL PROCESO</small><div class="processRow">'+nodes+'</div><small class="diagramDisclaimer">RECORRIDO ILUSTRATIVO DEL PROCESO</small></div>';
}
function mediaVisual(s){
if(!s.media)return processVisual(s);
return '<figure class="chapterPhoto"><img src="'+s.media.src+'" alt="'+s.media.alt+'" loading="eager" decoding="async"><figcaption><span>POLLAZO GALAPAGUEÑO</span><strong>'+s.media.caption+'</strong></figcaption></figure>';
}
function render(){
const s=slides[i];
const rail=q("#chapterRail");
if(rail){
rail.innerHTML=slides.map((item,j)=>'<button type="button" data-chapter="'+j+'" aria-current="'+(j===i?'step':'false')+'" aria-label="Abrir capítulo '+(j+1)+': '+item.sub+'"><small>'+String(j+1).padStart(2,"0")+'</small><strong>'+item.sub+'</strong></button>').join("");
}
slide.classList.toggle("isOpening",s.visual==="opening");
slide.classList.toggle("isClosing",s.visual==="closing");
slide.innerHTML='<div class="slideWords"><span class="sectionTag">'+s.tag+'</span><span class="miniLine"></span><p class="slideSub">'+s.sub+'</p><h3>'+s.title+'</h3><p class="slideCopy">'+s.copy+'</p><button type="button" class="slideMore" aria-expanded="false" aria-controls="slideDetails">Ver más información <span aria-hidden="true">+</span></button><div class="slideDetails" id="slideDetails" hidden><p>'+s.detail+'</p></div><div class="slideCaption">'+s.foot+'</div></div><div class="slidePicture'+(s.media?' withMedia':'')+'"><span class="overprint">SANTA CRUZ · GALÁPAGOS</span>'+mediaVisual(s)+'<span class="pictureCount">'+String(i+1).padStart(2,"0")+' / '+String(slides.length).padStart(2,"0")+'</span></div>';
q("#slideIndex").textContent=String(i+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0");
q("#speakerText").textContent=s.note;
q("#prev").disabled=i===0;
q("#next").textContent=i===slides.length-1?"Volver al inicio ↺":"Siguiente →";
q("#ticks").innerHTML=slides.map((_,j)=>'<button class="'+(j===i?'active':'')+'" aria-label="Escena '+(j+1)+'" data-slide="'+j+'"></button>').join("");
}
function openSlides(){
wrap.hidden=false;
speaker.hidden=true;
q("#showNotes").setAttribute("aria-pressed","false");
render();wrap.scrollIntoView({behavior:"smooth",block:"start"});
history.replaceState(null,"","#presentacion");
}
function go(x){if(x<0)return;i=x>=slides.length?0:x;render();}
function close(){wrap.hidden=true;history.replaceState(null,"","#inicio");q("#inicio").scrollIntoView({behavior:"smooth"});}
slide.addEventListener("click",e=>{
const button=e.target.closest(".slideMore");if(!button)return;
const panel=slide.querySelector("#slideDetails");if(!panel)return;
const willOpen=panel.hidden;panel.hidden=!willOpen;button.setAttribute("aria-expanded",String(willOpen));
button.innerHTML=willOpen?'Ocultar información <span aria-hidden="true">−</span>':'Ver más información <span aria-hidden="true">+</span>';
});
q("#startSlides").addEventListener("click",openSlides);
q("#closeSlides").addEventListener("click",close);
q("#prev").addEventListener("click",()=>go(i-1));
q("#next").addEventListener("click",()=>go(i+1));
q("#ticks").addEventListener("click",e=>{const t=e.target.closest("[data-slide]");if(t)go(Number(t.dataset.slide))});
q("#chapterRail").addEventListener("click",e=>{const t=e.target.closest("[data-chapter]");if(t)go(Number(t.dataset.chapter))});
q("#showNotes").addEventListener("click",()=>{
if(document.fullscreenElement)return;
speaker.hidden=!speaker.hidden;
q("#showNotes").setAttribute("aria-pressed",String(!speaker.hidden));
});
q("#enterFull").addEventListener("click",()=>{
speaker.hidden=true;q("#showNotes").setAttribute("aria-pressed","false");
if(document.fullscreenElement){document.exitFullscreen?.()}
else {wrap.requestFullscreen?.().catch(()=>{})}
});
document.addEventListener("fullscreenchange",()=>{
if(document.fullscreenElement){speaker.hidden=true;q("#showNotes").setAttribute("aria-pressed","false")}
q("#enterFull").textContent=document.fullscreenElement?"⛶ Salir de pantalla completa":"⛶ Pantalla completa";
});
document.addEventListener("keydown",e=>{if(wrap.hidden||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))return;if(e.key==="ArrowRight"||e.key==="PageDown"){e.preventDefault();go(i+1)}else if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();go(i-1)}else if(e.key==="Escape"&&document.fullscreenElement)document.exitFullscreen?.()});
let touchStartX=0,touchStartY=0;
slide.addEventListener("touchstart",e=>{if(e.touches.length===1){touchStartX=e.touches[0].clientX;touchStartY=e.touches[0].clientY}},{passive:true});
slide.addEventListener("touchend",e=>{if(!e.changedTouches.length)return;const dx=e.changedTouches[0].clientX-touchStartX;const dy=e.changedTouches[0].clientY-touchStartY;if(Math.abs(dx)>75&&Math.abs(dy)<60)go(i+(dx<0?1:-1))},{passive:true});
const video=q("#storyVideo"),empty=q("#videoEmpty");
video.addEventListener("loadeddata",()=>{
empty.hidden=true;video.classList.add("hasMedia");
q("#startVideo").innerHTML='<span class="playcircle">▶</span> Reproducir video explicativo';
q("#videoStatus").textContent="VIDEO NARRADO · LISTO PARA REPRODUCIR";
});
video.addEventListener("error",()=>{
empty.hidden=false;video.classList.remove("hasMedia");
q("#startVideo").textContent="Iniciar presentación guiada →";
q("#videoStatus").textContent="VIDEO NARRADO · POR INCORPORAR";
});
q("#startVideo").addEventListener("click",async()=>{if(video.readyState<2){openSlides();return}q("#videoCard").scrollIntoView({behavior:"smooth",block:"center"});try{await video.play()}catch(e){openSlides()}});
video.addEventListener("play",()=>{q("#videoCard").querySelector(".afterVideo")?.remove()});
video.addEventListener("ended",()=>{
q("#videoCard").querySelector(".afterVideo")?.remove();
const ok=document.createElement("button");
ok.className="afterVideo";ok.textContent="Continuar con la presentación →";
ok.addEventListener("click",()=>{ok.remove();openSlides()},{once:true});
q("#videoCard").appendChild(ok);
});
if(location.hash==="#presentacion")openSlides();
})();