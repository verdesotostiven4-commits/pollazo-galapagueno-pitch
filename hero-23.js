/* Piezas dinámicas de la portada de Pollazo.
   Reemplazar únicamente URLs de capas al disponer de sus archivos definitivos.
   El producto provisional y el logo actual permanecen visibles si las URLs están vacías. */
(()=>{"use strict";
 const host=document.getElementById("holdScreen");
 if(!host||!host.classList.contains("hero23"))return;
 const ASSETS={
  // Capas definitivas enviadas por el usuario, en su orden original.
  "background": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoKW_FL8STYgzbTsrCexbZxtdSrUbJ2aGtWJ1PqgJ3qM14yh3KvC2YpP9Qlsvl5nxfGsCVJDvSR2rEEttM1mBdR8aiOoyrK8-ilQIL7Q0R2unYcaKB00LW_oGwzLi35ktoQbI2fSwL4fwB42G8oGVoQPA-vEtLWVibgvLVOE0LfZRJUkfyo3dGPtskjsY/s1600/image.png",
  "subject": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2YKNKDHF2yB9S_-Q8eBl1B01NpaJV5VEaOx-IFivAaKBt0ShJ8yfeMgEbeFfp7QceGUB92Gt-mSxK6KdZsaocyz0BQMHVhUsGRTDtdQsSsw-TjbFNgAzORL6puuLruwcgNqnBov90Bt-hM5h0_F9af73Ujvp3-inpW4R62sftG-sdyvADj0rM3iTGUQs/s1600/image.png",
  "leavesBack": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8tQGBB8o4AhYAPQeW45KMqQO5jTUnTQ2SFRHFUsvMNgq2JOupuj26WgXnhgZe3M17PVkzyVSdn9Ck_xT2uUtQ53UcGJ9kU0VkBWv5zHKmIlVeQHRhlhtL2bvMdyf0ti9OLXRoezTe3KX6EruWrvzUehS9e9VQLM5aNNMSjnzsPcpWuOwe5LSyRceFcxg/s1600/image.png",
  "leavesFront": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIkjWpEILsBopmkj7wf4PrNkNddyo7U431_8lqrCqXl-s_CbCYc2lMdPqYiUzU0oqGoKCg8rXd4l89FhpBOWSkfX8ZHKOlFK2OJJu_BvY7cAPs-TrzdgS1VyM28YovKmDROsOelDiDDeh0J547FlmbZVb6Lkq_l6AKyemREySy2x7ql8LmXRw6pkoBYew/s1600/image.png",
  "leavesBlur": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyD9tMznzPMmy2n3nSoPJ9S6BmYsCQy3xnMlMo9cYH53ZfOXNVn4ojv1kCNGersY0L5FDdO80WV66Vw_Av4jot-rLdLgDzlus2NxIi5wARRd88vWOvUE-ZMwm3h0Iua-zG3GMtu3RvXFNTD9LRuWMYG4V3KjTm_cyEXQpMYF1RHj2B9QwsRqpDeDAAGCY/s1600/image.png",
  "birdFrames": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ41VXu6LnCNLoK_arhOIJU3c2shdcdmrfnU3cl1wbGPI7GtjIb8JabbuANNPsnv4ot9ULfW-md3gMkb3DUZ8lMUnwYQsQYRF2x1oBOxIOxlmP7v4Y9o_5aBRM4s8Ch0IEfcH9_YAK5uS8AfOBQcI_Jxbmc_MWM53lWpiyYTvANEoG_7h4CTAbt1u4DvA/s1600/image.png", // alas arriba
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWR1v4PKwAf1jFBS-2oxEBdjZs_u6RGSKDu_bBsU_X9UA2e6rxVwNtezCiOb4hXzm9Mv4GFyDpol1zOZWv5j2y-RF_7NLLvnCZdvny_JDzoikow1UeVFETG1m4OLzI28wBRcrIxmPAbfDYPwaFcHUgopANAvvjN_FTzOXJ5t0jQFTQ5BHmbA_q9n7MgDQ/s1600/image.png", // posicion intermedia
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcx13Jzco5yqY4J7TxoIDvCsUe_FQ1pK9iHhrk64lcpjpRA2yuuwlXh9ib39-N7VfJgzCyCRilzpsJEqEnpk3rFO_3mpsOuF_IQ_z2KGDthg17FVnOs8xxJJJMVzhgqAoJ-E-Lw4yy4wXR0D3PchuJqttZv-2dLQA08Rl8aOYA89B_5dSMfVTi7beQQ9c/s1600/image.png"  // alas abajo
  ]
};
 // Montamos la escena completa de una sola vez. Antes, cada imagen se hacía
 // visible apenas cargaba y por unos fotogramas dejaba ver rectángulos sueltos.
 // La capa borrosa ya no se utiliza y no debe ocupar ancho de banda.
 const map=[
   ["background","hero23SkyAsset",null],
   ["subject","hero23SubjectAsset","hero23ProductBase"],
   ["leavesBack","hero23LeavesBackAsset","hero23LeafBack"],
   ["leavesFront","hero23LeavesFrontAsset","hero23LeafFront"]
 ];
 const loaded=new Map();
 const prepare=map.map(async ([key,id,fallbackId])=>{
   const element=document.getElementById(id);
   if(!element||!ASSETS[key])return;
   element.hidden=true;
   // Primero se carga y se decodifica la imagen antes de mostrar la escena.
   return new Promise(resolve=>{
     element.onload=async ()=>{
       if(!element.naturalWidth){resolve();return}
       try { await element.decode?.(); } catch(_) {}
       loaded.set(key,{element,fallbackId});
       resolve();
     };
     element.onerror=()=>resolve();
     element.src=ASSETS[key];
   });
 });
 Promise.all(prepare).then(()=>{
   // Una sola composición evita que se vean capas incompletas al refrescar.
   // La siguiente pintura deja listo el cielo, el pollo y las hojas juntas.
   if(!host.isConnected)return;
   for(const [key,{element,fallbackId}] of loaded){
     element.hidden=false;
     if(key==="background")document.querySelector(".hero23SceneSky")?.classList.add("hero23HasBackground");
     if(key==="subject")document.querySelector(".hero23ProductStage")?.classList.add("hero23HasProduct");
     if(fallbackId){
       const fallback=document.getElementById(fallbackId)||document.querySelector("."+fallbackId);
       if(fallback)fallback.hidden=true;
     }
   }
   host.classList.add("hero23SceneReady");
 });
 const bird=document.getElementById("hero23BirdFlight");
 const noMotion=window.matchMedia("(prefers-reduced-motion:reduce)");
 const random=(min,max)=>min+Math.random()*(max-min);
 // Tres pájaros independientes reutilizan exactamente las mismas imágenes
 // de alas que ya estaban en la presentación. No cargamos recursos nuevos.
 const birds=[bird];
 for(let index=1;index<3;index++){
   const clone=bird.cloneNode(true);
   clone.removeAttribute("id");
   clone.classList.add("hero23BirdExtra");
   clone.setAttribute("aria-hidden","true");
   bird.parentElement.appendChild(clone);
   birds.push(clone);
 }
 const clocks=new Array(birds.length).fill(null);
 const animations=new Array(birds.length).fill(null);
 let disposed=false;

 function setRasterFrames(target,urls){
   const fragment=document.createDocumentFragment();
   urls.forEach((url,index)=>{
     const frame=document.createElement("img");
     frame.src=url;frame.alt="";frame.decoding="async";
     frame.className="hero23BirdFrame hero23BirdFrame"+index;
     fragment.appendChild(frame);
   });
   target.replaceChildren(fragment);
   target.classList.add("hero23BirdRaster");
 }
 // La silueta SVG sigue funcionando si alguna foto de alas no carga.
 if(ASSETS.birdFrames.length===3){
   Promise.all(ASSETS.birdFrames.map(url=>new Promise((resolve,reject)=>{
     const probe=new Image();
     probe.onload=()=>probe.naturalWidth?resolve(url):reject(Error("Bird frame unavailable"));
     probe.onerror=()=>reject(Error("Bird frame unavailable"));
     probe.src=url;
   }))).then(urls=>{
     if(disposed)return;
     birds.forEach(target=>setRasterFrames(target,urls));
   }).catch(()=>{/* Conservar siluetas SVG como alternativa */});
 }
 function stopAll(){
   clocks.forEach((timer,index)=>{
     if(timer!==null)clearTimeout(timer);
     clocks[index]=null;
   });
   animations.forEach((motion,index)=>{
     motion?.cancel();
     animations[index]=null;
     birds[index].classList.remove("hero23BirdFlying");
     birds[index].style.opacity="0";
   });
 }
 function schedule(index,first=false){
   if(disposed||noMotion.matches||document.hidden||host.hidden)return;
   if(clocks[index]!==null)clearTimeout(clocks[index]);
   // El primer grupo entra pronto y escalonado. Los siguientes se cruzan
   // con intervalos variables, sin desplazamientos idénticos ni bucle fijo.
   const delay=first?(700+index*1700+random(0,850)):random(1700,4100);
   clocks[index]=window.setTimeout(()=>fly(index),delay);
 }
 function fly(index){
   clocks[index]=null;
   if(disposed||noMotion.matches||host.hidden||document.hidden)return;
   const target=birds[index];
   const reverse=Math.random()<.5;
   const seconds=random(6500,9900);
   const altitude=random(9,26);
   const size=random(.76,1.2)*(index===2?.79:1);
   const visibility=random(.83,.97);
   const flip=reverse?-1:1;
   const start=reverse?"106vw":"36vw";
   const end=reverse?"34vw":"108vw";
   const drift=random(-23,-7);
   target.style.top=altitude+"%";
   target.style.opacity="0";
   target.classList.add("hero23BirdFlying");
   const motion=target.animate([
     {transform:"translate3d("+start+",0,0) scaleX("+flip+") scale("+size+")",opacity:0,offset:0},
     {transform:"translate3d(calc("+start+" + "+(reverse?"-9vw":"9vw")+"),"+drift*.18+"px,0) scaleX("+flip+") scale("+size+")",opacity:visibility,offset:.14},
     {transform:"translate3d(calc("+end+" + "+(reverse?"7vw":"-7vw")+"),"+drift*.86+"px,0) scaleX("+flip+") scale("+size+")",opacity:visibility,offset:.87},
     {transform:"translate3d("+end+","+drift+"px,0) scaleX("+flip+") scale("+size+")",opacity:0,offset:1}
   ],{duration:seconds,easing:"linear",fill:"none"});
   animations[index]=motion;
   motion.onfinish=()=>{
     animations[index]=null;
     target.classList.remove("hero23BirdFlying");
     target.style.opacity="0";
     schedule(index);
   };
   motion.oncancel=()=>{
     target.classList.remove("hero23BirdFlying");
     target.style.opacity="0";
   };
 }
 function startFlights(){
   stopAll();
   if(disposed||noMotion.matches||document.hidden||host.hidden)return;
   birds.forEach((_,index)=>schedule(index,true));
 }
 document.addEventListener("visibilitychange",()=>{
   if(document.hidden)stopAll();
   else startFlights();
 });
 noMotion.addEventListener?.("change",()=>{
   if(noMotion.matches)stopAll();
   else startFlights();
 });
 document.getElementById("startGuided")?.addEventListener("click",stopAll);
 document.getElementById("startAuto")?.addEventListener("click",stopAll);
 document.getElementById("holdButton")?.addEventListener("click",()=>window.setTimeout(startFlights,450));
 document.getElementById("backToHold")?.addEventListener("click",()=>window.setTimeout(startFlights,600));
 window.addEventListener("pagehide",()=>{disposed=true;stopAll()});
 startFlights();

})();
