import Component from './components/components.js'

export default class Modal extends Component {
    constructor(id, title, html) {
        super()
        this._title = title;
        this._id = id;
        this._html = html
    }
    closeModal() {
        document.querySelector('.modal-exit').addEventListener('click', this.removeModal.bind(this))
        this.modal.addEventListener('click', this.removeModal.bind(this))
        window.addEventListener('keyup', this.removeModal.bind(this))
    }
    removeModal(e){
        if(e.key === 'Escape'){
            this.modal.remove();
            return
        }
        this.modal.remove()
    }
    render() {
        const content = `
        <div class="modal-window">
            <div class="modal-header">
                <h3 class="modal-title">${this._title}</h3>
                <span class="modal-exit">X</span>
            </div>
            <div class="modal-body">${this._html}</div>
        </div>
        `

        this.modal = this.createElement('div', {className: 'modal', id: this._id}, content)
       
        document.body.append(this.modal)
        this.closeModal()
    }    
}

