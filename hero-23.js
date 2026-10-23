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
 const map=[
   ["background","hero23SkyAsset",null],
   ["subject","hero23SubjectAsset","hero23ProductBase"],
   ["leavesBack","hero23LeavesBackAsset","hero23LeafBack"],
   ["leavesFront","hero23LeavesFrontAsset","hero23LeafFront"],
   ["leavesBlur","hero23LeavesBlurAsset","hero23LeafBlur"]
 ];
 for(const [key,id,fallbackId] of map){
   const url=ASSETS[key];if(!url)continue;
   const img=document.getElementById(id);
   img.onload=()=>{
     if(!img.naturalWidth)return;
     img.hidden=false;
     if(key==="background")document.querySelector(".hero23SceneSky")?.classList.add("hero23HasBackground");
     if(key==="subject")document.querySelector(".hero23ProductStage")?.classList.add("hero23HasProduct");
     if(fallbackId){
       const fallback=document.getElementById(fallbackId)||document.querySelector("."+fallbackId);
       if(fallback)fallback.hidden=true;
     }
   };
   img.onerror=()=>{img.hidden=true;};
   img.src=url;
 }
 const bird=document.getElementById("hero23BirdFlight");
 const noMotion=window.matchMedia("(prefers-reduced-motion:reduce)");
 let timer=null,animation=null,disposed=false;
 // Use the three real flying frames only after every frame loads.
 if(ASSETS.birdFrames.length===3){
   Promise.all(ASSETS.birdFrames.map(url=>new Promise((resolve,reject)=>{
     const probe=new Image();
     probe.onload=()=>probe.naturalWidth?resolve(url):reject(Error("Empty bird image"));
     probe.onerror=()=>reject(Error("Bird image unavailable"));
     probe.src=url;
   }))).then(urls=>{
     if(disposed)return;
     const fragment=document.createDocumentFragment();
     urls.forEach((url,index)=>{
       const frame=document.createElement("img");
       frame.src=url;frame.alt="";frame.decoding="async";
       frame.className="hero23BirdFrame hero23BirdFrame"+index;
       fragment.appendChild(frame);
     });
     bird.replaceChildren(fragment);
     bird.classList.add("hero23BirdRaster");
   }).catch(()=>{/* Keep the original vector bird as a fallback */});
 }
 const random=(min,max)=>min+Math.random()*(max-min);
 function queue(first=false){
   clearTimeout(timer);
   if(disposed||noMotion.matches)return;
   // Primer vuelo pronto para que el usuario descubra el detalle.
   // Después, pausas variables sin un bucle mecánico aparente.
   timer=window.setTimeout(fly,first?random(1900,3300):random(4800,11500));
 }
 function fly(){
   if(disposed||noMotion.matches||host.hidden||document.hidden){queue();return}
   const reverse=Math.random()<.5;
   const travel=random(7800,11500);
   // El ave cruza el cielo visible (no empieza a 36vw fuera de la pantalla).
   const h=random(12,33),scale=random(.66,1.04);
   bird.style.top=h+"%";
   bird.style.opacity="1";
   bird.classList.add("hero23BirdFlying");
   const start=reverse?"103vw":"36vw";
   const end=reverse?"33vw":"104vw";
   const flip=reverse?-1:1;
   animation=bird.animate([
     {transform:"translate3d("+start+",2px,0) scaleX("+flip+") scale("+scale+")",opacity:0,offset:0},
     {transform:"translate3d(calc("+start+" + "+(reverse?"-7vw":"7vw")+"),-5px,0) scaleX("+flip+") scale("+scale+")",opacity:.74,offset:.14},
     {transform:"translate3d(calc("+end+" + "+(reverse?"4vw":"-4vw")+"),-17px,0) scaleX("+flip+") scale("+scale+")",opacity:.77,offset:.85},
     {transform:"translate3d("+end+",-23px,0) scaleX("+flip+") scale("+scale+")",opacity:0,offset:1}
   ],{duration:travel,easing:"linear",fill:"none"});
   animation.onfinish=()=>{bird.classList.remove("hero23BirdFlying");bird.style.opacity="0";queue()};
   animation.oncancel=()=>{bird.classList.remove("hero23BirdFlying");bird.style.opacity="0"};
 }
 document.addEventListener("visibilitychange",()=>{if(document.hidden){animation?.cancel();clearTimeout(timer)}else queue(true)});
 document.getElementById("startGuided")?.addEventListener("click",()=>{animation?.cancel();clearTimeout(timer)});
 document.getElementById("startAuto")?.addEventListener("click",()=>{animation?.cancel();clearTimeout(timer)});
 document.getElementById("holdButton")?.addEventListener("click",queue);
 document.getElementById("backToHold")?.addEventListener("click",()=>setTimeout(queue,550));
 window.addEventListener("pagehide",()=>{disposed=true;animation?.cancel();clearTimeout(timer)});
 if(!noMotion.matches)queue(true);
})();
