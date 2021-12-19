window.onload=()=>{
    let modalCarga=document.querySelector("#modalCarga");
    setInterval(()=>{
        document.body.className="";
        modalCarga.className="noScroll-none";
        setInterval(()=>{
            modalCarga.style.display="none";
        },1000);

    },3000);

    let btnItsur=document.querySelector("#btnItsur");
    let btnCbtis=document.querySelector("#btnCbtis");

    btnItsur.addEventListener("click",(e)=>{
        window.open("http://www.itsur.edu.mx/");
    });
    btnCbtis.addEventListener("click",(e)=>{
        window.open("http://www.itsur.edu.mx/");
    });
}