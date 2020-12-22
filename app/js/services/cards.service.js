import BaseHttpService from "./base-http.service";

// title: "Визит к кардиологу",
//     description: 'Плановый визит',
//     doctor: "Cardiologist",
//     bp: "24",
//     age: 23,
//     weight: 70

export default class CardsService extends BaseHttpService {
    addCard (data) {
        console.log(this)
        return this.get('cards', data)
    }

    fetchCards() {
        return this.get('cards')
    }
}


