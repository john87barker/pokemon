import { ProxyState} from "../AppState.js"

export default class Pokemon {
    constructor({name, img, types,  id, user, abilities, height, weight}) {
        this.name = name
        this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        this.types = types
        // [0].type.name
        this.id = id
        this.user = user
        this.abilities = abilities
        // [0].ability.name
        this.height = height
        this.weight = weight
        
        if (typeof this.types[0] != 'string') {
            this.types = this.types.map(elem => elem.type.name)
        }
        if (typeof this.abilities[0] != 'string') {
            this.abilities = this.abilities.map(elem => elem.ability.name)
        }
       
    }

    get Template() {

        return /*html*/`
        <img src="${this.img}" class="card-img-top" width="150" height="150" alt="${this.name}">
            <div class="card-body">
                <h3 class="card-title uppercase">${this.name}</h3>
                <p>Pokemon Type: ${this.types} </p>
                <p>Pokemon Abilities: ${this.abilities} </p>
                <p>Pokemon ID: # ${this.id} </p>
                <p>Pokemon Height: ${this.height} units</p>
                <p>Pokemon Weight: ${this.weight} lbs </p>
            </div>
            <div class="text-right">
                ${this.Button}
            </div>
        `
    }

    get Button() {
        const exists = ProxyState.MyPokemon.find(p => p.name === ProxyState.activePokemon.name)
        if (this.id) {
            // NOTE fix button call
            return `
            <button type="button" class="btn btn-success" ${exists ? 'disabled' : ''} onclick="app.myPokemonController.catchPokemon()">Catch Pokemon</botton>`
        } return
        `<button type="button" class="btn btn-danger" onclick="app.myPokemonController.removePokemon()">Free Pokemon</button>`
}

}
