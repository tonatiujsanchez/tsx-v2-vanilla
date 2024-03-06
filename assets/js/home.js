const formContact = document.querySelector('#form-contact')


formContact.addEventListener('submit',  (ev)=> {
    ev.preventDefault()
    console.log(ev.target)
    alert('Hola, lo siento, mi página aun esta en construcción, por favor, regresa pronto.')
})

