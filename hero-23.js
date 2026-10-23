/* Piezas dinámicas de la portada de Pollazo.
   Reemplazar únicamente URLs de capas al disponer de sus archivos definitivos.
   El producto provisional y el logo actual permanecen visibles si las URLs están vacías. */
(()=>{"use strict";
 const host=document.getElementById("holdScreen");
 if(!host||!host.classList.contains("hero23"))return;
 const ASSETS={
   background:"",
   subject:"",
   leavesBack:"",
   leavesFront:"",
   leavesBlur:"",
   birdFrames:[] // tres fotogramas opcionales: alas arriba, medias, abajo
 };
 const map=[
   ["background","hero23SkyAsset",null],
   ["subject","hero23SubjectAsset","hero23ProductBase"],
   ["leavesBack","hero23LeavesBackAsset",null],
   ["leavesFront","hero23LeavesFrontAsset",null],
   ["leavesBlur","hero23LeavesBlurAsset",null]
 ];
 for(const [key,id,fallbackId] of map){
   const url=ASSETS[key];if(!url)continue;
   const img=document.getElementById(id);
   img.onload=()=>{img.hidden=false;if(fallbackId)document.getElementById(fallbackId).hidden=true};
   img.onerror=()=>{img.hidden=true;if(fallbackId)document.getElementById(fallbackId).hidden=false};
   img.src=url;
 }
 const bird=document.getElementById("hero23BirdFlight");
 const noMotion=window.matchMedia("(prefers-reduced-motion:reduce)");
 let timer=null,animation=null,disposed=false;
 if(ASSETS.birdFrames.length===3){
   bird.innerHTML=ASSETS.birdFrames.map((url,index)=>'<img alt="" class="hero23BirdFrame hero23BirdFrame'+index+'" src="'+url.replaceAll('"','%22')+'">').join("");
   bird.classList.add("hero23BirdRaster");
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
   const horizontal=reverse?["105vw","-36vw"]:["-36vw","105vw"];
   animation=bird.animate([
     {transform:"translate3d("+horizontal[0]+",0,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:0,offset:0},
     {transform:"translate3d(calc("+horizontal[0]+" + "+(reverse?"-9vw":"9vw")+"),-6px,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:.58,offset:.12},
     {transform:"translate3d("+horizontal[1]+",-24px,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:.62,offset:.88},
     {transform:"translate3d("+horizontal[1]+",-30px,0) scaleX("+(reverse?-1:1)+") scale("+scale+")",opacity:0,offset:1}
   ],{duration:travel,easing:"linear",fill:"none"});
   animation.onfinish=()=>{bird.style.opacity="0";queue()};
   animation.oncancel=()=>{bird.style.opacity="0"};
 }
 document.addEventListener("visibilitychange",()=>{if(document.hidden){animation?.cancel();clearTimeout(timer)}else queue()});
 document.getElementById("startGuided")?.addEventListener("click",()=>{animation?.cancel();clearTimeout(timer)});
 document.getElementById("startAuto")?.addEventListener("click",()=>{animation?.cancel();clearTimeout(timer)});
 document.getElementById("holdButton")?.addEventListener("click",queue);
 document.getElementById("backToHold")?.addEventListener("click",()=>setTimeout(queue,550));
 window.addEventListener("pagehide",()=>{disposed=true;animation?.cancel();clearTimeout(timer)});
 if(!noMotion.matches)queue();
})();
