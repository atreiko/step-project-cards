
// PLUGIN:
const $ = {}

function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('reg-modal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <h5 class="modal-title">Авторизация</h5>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <form class="modal-form" id="authorisation">
                    <label for="emeil">Почта:</label>
                    <input id="email" type="email" placeholder="email@email.com">
                    <label for="password">Пароль:</label>
                    <input id="password" type="password" placeholder="*******">
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary">Подтвердить</button>
                <button class="btn btn-primary">Отмена</button>
            </div>
        </div>
    </div>
    `)

    document.body.appendChild(modal)
    return modal
}


$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    
    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
        desroy() {}
    }
}
