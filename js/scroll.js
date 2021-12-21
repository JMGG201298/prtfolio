let projectos=document.querySelector(".projects__containerProjects");
let containerskill=document.querySelector(".lenguajesProgrammin");
let skills=document.querySelectorAll(".skill");
projectos.style.opacity="0";
window.addEventListener('scroll',()=>{
    let posicionProjectosTop=projectos.getBoundingClientRect().top;
    let posicionProjectosBottom=projectos.getBoundingClientRect().bottom;
    let tamanoPantalla=window.innerHeight/1.5;
    if(posicionProjectosTop<tamanoPantalla &&posicionProjectosBottom*1.45>tamanoPantalla){
        projectos.style.opacity="1";
        projectos.style.animation="projectAnimacion 1.5s ease-out";
    }else if(posicionProjectosBottom< tamanoPantalla*0.05){
        projectos.style.opacity="0";
        projectos.style.animation="";
    }else if(posicionProjectosTop> tamanoPantalla*1.6){
        projectos.style.opacity="0";
        projectos.style.animation="";
    }

    /**/
    let posicionSkillsTop=containerskill.getBoundingClientRect().top;
    let posicionSkillsBottom=containerskill.getBoundingClientRect().bottom;
    console.log(posicionSkillsTop);
    console.log(tamanoPantalla);
    
    if(posicionSkillsTop<tamanoPantalla &&posicionSkillsTop*1.45>tamanoPantalla){
        for(let i=0; i<skills.length; i++){
            if(i%2==0){
                skills[i].style.opacity="1";
                skills[i].style.animation="skillAnimacion 3.5s ease";
            }
            else{
                skills[i].style.opacity="1";
                skills[i].style.animation="skillAnimacion2 1.5s ease";
            }
        }
    }else if(posicionSkillsBottom< tamanoPantalla*0.05){
        for(let i=0; i<skills.length; i++){
            if(i%2==0){
                skills[i].style.opacity="1";
                skills[i].style.animation="skillAnimacion 3.5s ease";
            }
            else{
                skills[i].style.opacity="1";
                skills[i].style.animation="skillAnimacion2 1.5s ease";
            }
        }
    }else if(posicionSkillsTop> tamanoPantalla*1.6){
        for(let i=0; i<skills.length; i++){
            if(i%2==0){
                skills[i].style.opacity="0";
                skills[i].style.animation="";
            }
            else{
                skills[i].style.opacity="0";
                skills[i].style.animation="";
            }
        }
    }
    
    /* */
    
    
});
/**Animacion skills */


/** */
let imgSkill=document.querySelectorAll(".imgSkill");
let contenedor=document.querySelectorAll(".contenedor");
for(let i=0; i<skills.length; i++){
    skills[i].addEventListener("mouseover",function(){
        imgSkill[i].style.display="none";
        contenedor[i].style.display="block";
    });
    skills[i].addEventListener("mouseout",function(){
        imgSkill[i].style.display="block";
        contenedor[i].style.display="none";
    });
}



