export default class Pokemon {
    constructor({name, abilities, img, id, moves, types}) {
        this.name = name
        this.abilities = abilities
        this.img = img
        this.id = id
        this.moves = moves
        this.types = types
    }

    get Template() {

        return /*html*/`
        <img src="${this.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${this.name}</h3>
                        <p>Pokemon Type: ${this.types} </p>
                        <p>Abilities: ${this.abilities} </p>
                        <p>Moves: ${this.moves}</p>
                        
                    </div>
        `
    }
}
