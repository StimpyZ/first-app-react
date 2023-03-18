
export class Contact {
    name = ''
    lastName = ''
    eMail = ''
    conected = false

    constructor(name, lastName, eMail, conected) {
        this.name = name
        this.lastName = lastName
        this.eMail = eMail
        this.conected = conected
    }
}