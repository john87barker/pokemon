import { ProxyState} from "../AppState.js"

export default class Pokemon {
    constructor({name, img, types, user, id}) {
        this.name = name
        this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        this.types = types
        this.user = user
        this.id = id 
        
    }

    get Template() {

        return /*html*/`
        <img src="${this.img}" class="card-img-top" width="150" height="150" alt="${this.name}">
            <div class="card-body">
                <h3 class="card-title uppercase">${this.name}</h3>
                <p>Pokemon Type: ${this.types} </p>
                
            </div>
            <div class="text-right">
                ${this.Button}
            </div>
        `
    }

    get Button() {
        const exists = ProxyState.MyPokemon.find(p => p.name === ProxyState.activePokemon.name)
        if (this.id) {
            return `
            <button type="button" class="btn btn-success" ${exists ? 'disabled' : ''} onclick="app.myPokemonController.addPokemon()">Catch Pokemon</botton>`
        } return
        `<button type="button" class="btn btn-danger" onclick="app.myPokemonController.removePokemon()">Free Pokemon</button>`
}

}
