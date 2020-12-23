import Modal from './modal.js'
import Input from './components/input.js'

const headerBtn = document.getElementById('headerBtn')

headerBtn.addEventListener('click', (e) => {
    
    new Modal('modal','SignIn', '<input>').render()
    
})