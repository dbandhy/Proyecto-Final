export default class Person {
    constructor(data) {
        this.setData(data)
    }

    setData({ name, lastName, email, whatsapp }) {
        if (!name) throw new Error('falta nombre')
        if (!lastName) throw new Error('falta apellido')
        if (!email) throw new Error('falta direccion')
        if (!whatsapp) throw new Error('falta whatsapp')

        this.name = name
        this.lastName = lastName
        this.email = email
        this.whatsapp = whatsapp
    }
}