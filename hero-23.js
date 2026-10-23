/* Piezas dinámicas de la portada de Pollazo.
   Reemplazar únicamente URLs de capas al disponer de sus archivos definitivos.
   El producto provisional y el logo actual permanecen visibles si las URLs están vacías. */
(()=>{"use strict";
 const host=document.getElementById("holdScreen");
 if(!host||!host.classList.contains("hero23"))return;
 const ASSETS={
  "background": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXujS4f-a8Jx0yXrqcdbx5pKsq8hbk6auACwkmGxDuIFbwFQTQEEc32hqe-MuErJhbe_xrBjeisFvXt2v-2YntC7q3W_oqdMR89I-eEItzrKjRmVIe_NOgFpSO5T2guz-i4-5kqD7z16VZOSoXgTQ5tb0kb19XUz8rluGCjs8VVo4_1y7Ah7VdwDE4tXU/s1600/image.png",
  "subject": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLPNA98RDx1uM2h-pfBy40ANF_T_7DpbBabPedU_y7hu6tnF8v4S47Dc82y_3yv-yhG1MSLxKT2Y9Ci2LnpXJMdl1pFpMBb5TkgFbh2qYqyZxpjk1vbZ9jvupCvfcrISyjFcmdJxGO7mXNDrPMU-uduRlz-6RbRTz3B8MTAOBC3Fn9Dlj0hZmHHB9-0c8/s1600/image.png",
  "leavesBack": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQfxUdzEH39XPBRCaNpNFiFZIB7OivY5kGwS4gHybs-3LGW6e1Ruog-PsYqhZwhrVHuwVbexLqXpLBtIRM6hjy9fgxMgmIHPGBtfbAYmqiVNeCPkkDm71kq7QA4_Ma-65jcu0b33KTejia97DKTHWZfGj3rGppXuQl3S0A4QigD4YEsZb52ghZz9KGhiw/s1600/image.png",
  "leavesFront": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwkI7Uou8_V_C_CcM1oyu7xPRd_btiTrYm9uz7_-wBfX2jnfNpGpdR3Ba9RF7xuVcNcyxuMA5MoTAJaxP34i64bsvH7T_3MpBsp3ll1WvXt440bJJmrKfgohOScndmxleED4L2P_pPbLhN95rlp5Yc6EXp7HuBJLVnkXq2yTwMH4gGLu4tKlTfKhnAduI/s1600/image.png",
  "leavesBlur": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq8rH7BSN47jbvzW2MYutnrh_Yjxn-n46SonIUHMa6JuqlxjJNmjhO0dyk0ejUU-bja9nav7b-vFvwoJQ6egfljODXut6oQwUJLdHPKXjo913AVkhKM3g5dF-ytUWKg350yYtbJmQdajRKnXtoep4MVUk0alddi1Dqt_cxsjszRykIj_TqJ7F-lCvmcE0/s1600/image.png",
  "birdFrames": [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHTyeZKcEKsOoPxAn46oMUI-IyoWRxyeylRDnhl0GqsxLXFBjUxwkPYumSuH0oGvov1rxLgr7cZ8-4NTG0cy-YuQLTaPI6o3W1wJQVGFsIpbLozP7hU_er2eyJmV9OjadeJ6LnjIfmS6P4AZovrYm3zYAnXEpsgviLx-JDMS-qGbeJjTb71o6HnHgiOLw/s1600/image.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis3M-gYikZjMyX6r-3AuPUnJJv7mrYv87IaOV2N-xOK6QrkcPxbfxI0y1GPxIsjyQ6KwjKFPE77zKAlLtAvb-tY-nYApXS08m60qmZHqq8INwL1fRSj1sB7ZzpZf_GlCn6rUu2pwHhwp0XVtQ597co-Kw3VjcY3N0MdFXcGiJrNUdq6fFYYvaib7TxZaI/s1600/image.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD9WYQWCNVKF68X_pVLfshUyoeSPqqJmO1KpZkCkoPAx9JQ1fpwx1QIdF8xN99tqYXmUaGvHK79MoyxMi3LjC3BzxAruIWcUa0aj7PF6zggfmgfOUyCPFQoydeqZgRfItSGpY3NtbH4RlDyuYKTOUqEqCI61FxwKtWg2jJo19E-4wAhvAVI0ck4fS_k2I/s1600/image.png"
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
 function queue(){
   clearTimeout(timer);
   if(disposed||noMotion.matches)return;
   timer=window.setTimeout(fly,random(5500,14000));
 }
 function fly(){
   if(disposed||noMotion.matches||host.hidden||document.hidden){queue();return}
   const reverse=Math.random()<.5;
   const travel=random(6500,10700),h=random(22,53),scale=random(.38,.75);
   bird.style.top=h+"%";
   bird.style.opacity="1";
   bird.classList.add("hero23BirdFlying");
   const horizontal=reverse?["105vw","-36vw"]:["-36vw","105vw"];
   animation=bird.animate([
     {transform:"translate3d("+horizontal[0]+",0,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:0,offset:0},
     {transform:"translate3d(calc("+horizontal[0]+" + "+(reverse?"-9vw":"9vw")+"),-6px,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:.58,offset:.12},
     {transform:"translate3d("+horizontal[1]+",-24px,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:.62,offset:.88},
     {transform:"translate3d("+horizontal[1]+",-30px,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:0,offset:1}
   ],{duration:travel,easing:"linear",fill:"none"});
   animation.onfinish=()=>{bird.classList.remove("hero23BirdFlying");bird.style.opacity="0";queue()};
   animation.oncancel=()=>{bird.classList.remove("hero23BirdFlying");bird.style.opacity="0"};
 }
 document.addEventListener("visibilitychange",()=>{if(document.hidden){animation?.cancel();clearTimeout(timer)}else queue()});
 document.getElementById("startGuided")?.addEventListener("click",()=>{animation?.cancel();clearTimeout(timer)});
 document.getElementById("startAuto")?.addEventListener("click",()=>{animation?.cancel();clearTimeout(timer)});
 document.getElementById("holdButton")?.addEventListener("click",queue);
 document.getElementById("backToHold")?.addEventListener("click",()=>setTimeout(queue,550));
 window.addEventListener("pagehide",()=>{disposed=true;animation?.cancel();clearTimeout(timer)});
 if(!noMotion.matches)queue();
})();
