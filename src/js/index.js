import Modal from './_modal.js'

const headerBtn = document.getElementById('headerBtn')

headerBtn.addEventListener('click', (e) => {
    
    new Modal('modal','SignIn', '<input>').render()
    
})