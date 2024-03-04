const formContact = document.querySelector('#form-contact')


formContact.addEventListener('submit',  (ev)=> {
    ev.preventDefault()
    console.log(ev.target)
    alert('Hola, los siento, mi página aun esta en construcción')
})



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



/*=== === Mostrar el enlace activo === ===*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scrollY = window.pageYOffset;
    
    sections.forEach( section =>{
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 130
        let sectionId = section.getAttribute('id')

        if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav__item a[href*=${ sectionId }]`)?.classList.add('nav__link--active')
        }else{
            document.querySelector(`.nav__item a[href*=${ sectionId }]`)?.classList.remove('nav__link--active');
        }
    })
}
window.addEventListener('scroll', scrollActive);
