

/* === === Mostrar/Ocultar botón para volver arriba === === */
const showScrollTop = ()=>{
    const scrollTop = document.getElementById('scroll-top');

    if( scrollY >= 350 ){
        scrollTop.classList.add('scroll-top__show');
    }else{
        scrollTop.classList.remove('scroll-top__show');
    }
}
window.addEventListener('scroll', showScrollTop);



