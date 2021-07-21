export default class Value {
    constructor({name, abilities, img, id}) {
        this.name = name
        this.abilities = abilities
        this.img = img
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.name}
        </div>
        `
    }
}
