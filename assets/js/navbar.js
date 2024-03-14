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
            document.querySelector(`.nav__item a[href*=${ sectionId }]`)?.parentElement.classList.add('nav__item--active')
        }else{
            document.querySelector(`.nav__item a[href*=${ sectionId }]`)?.classList.remove('nav__link--active')
            document.querySelector(`.nav__item a[href*=${ sectionId }]`)?.parentElement.classList.remove('nav__item--active')
        }
    })
}
window.addEventListener('scroll', scrollActive);
