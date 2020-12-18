
let button  = document.getElementById('loginBtn')
button.addEventListener('click', function() {
    
    let modal = document.createElement('div')
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
    console.log(modal)
    let section = document.getElementById('section')
    section.append(modal)
})

