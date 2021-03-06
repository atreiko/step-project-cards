const { create } = require("browser-sync");

class Component {
    constructor()

    createElement(tag, attr, content = '') {
        const element = document.createElement(tag)

        for(let [key, value] of Object.entries(attr)) {
            if (value) {
                element[key] = value
            }
        }
        if (content) {
            element.innerHTML = content
        }
        return element
    }
}

export default Component



