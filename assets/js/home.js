const formContact = document.querySelector('#form-contact')
const formContactSubmit = document.querySelector('.contact__form-submit')


const showToast = ({ type, msg, time=3000 }) => {
    const toast = document.querySelector('.toast')
    const toastIcon = document.querySelector('.toast__icon')
    const toastMsg = document.querySelector('.toast__msg')

    if( type === 'success' ){
        toastIcon.classList.add('bxs-check-circle', 'toast__icon--success')
        toastMsg.innerText = msg ?? 'El mensaje fue enviado correctamente'
    }

    if(type === 'error') {
        toastIcon.classList.add('bxs-error-circle', 'toast__icon--error')
        toastMsg.innerText = msg ?? 'Hubo un error al enviar el mensaje'
    }

    toast.classList.add('toast__show')

    setTimeout(() => {
        toast.classList.remove('toast__show')
    }, time);
}


const sendEmail = async( name, email, message ) => {

    const url = 'https://tonatiuj-sanchez.vercel.app/api/public/contact'
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify({ name, email, message })

    try {
        formContactSubmit.innerHTML = '<span class="loader"></span>'
        formContactSubmit.disabled = true
        const resp = await fetch(url, { method: 'POST', headers, body })
        const result = await resp.json()
        
        if( !resp.ok ){
            throw new Error(result.msg)    
        }

        formContact.reset()
        showToast({ type: 'success' })

    } catch (error) {
        console.log(error)
        showToast({type: 'error', msg:error })
        
    } finally {
        formContactSubmit.innerHTML = `
        <span>Enviar</span>
        <i class='bx bx-send contact__form-submit-icon' ></i>
        `
        formContactSubmit.disabled = false
    }
}


formContact.addEventListener('submit', function(ev){
    ev.preventDefault()

    const formData = new FormData(this)
    const { name, email, message } = Object.fromEntries(formData.entries())

    sendEmail( name, email, message )
})

