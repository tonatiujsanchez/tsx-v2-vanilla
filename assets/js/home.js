const formContact = document.querySelector('#form-contact')


formContact.addEventListener('submit',  (ev)=> {
    ev.preventDefault()
    console.log(ev.target)
    alert('Hola, los siento, mi página aun esta en construcción')
})

