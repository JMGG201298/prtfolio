let projectos=document.querySelector(".projects__containerProjects");
projectos.style.opacity="0";
window.addEventListener('scroll',()=>{
    let posicionProjectosTop=projectos.getBoundingClientRect().top;
    let posicionProjectosBottom=projectos.getBoundingClientRect().bottom;
    let tamanoPantalla=window.innerHeight/1.6;
    console.log("posicionProjectos: "+posicionProjectosTop);
    console.log("tamañoPantalla: "+tamanoPantalla);
    if(posicionProjectosTop<tamanoPantalla &&posicionProjectosBottom>tamanoPantalla){
        projectos.style.opacity="1";
        projectos.style.animation="projectAnimacion 1s ease-out";
    }else if(posicionProjectosBottom< tamanoPantalla*0.05){
        projectos.style.opacity="0";
        projectos.style.animation="";
    }else if(posicionProjectosTop> tamanoPantalla*1.6){
        projectos.style.opacity="0";
        projectos.style.animation="";
    }
    
});