import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawAll() {
  const pokemon = ProxyState.allApiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li class="action" onclick="app.pokeApiController.getPokemon('${p.name}')"> ${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}

function _drawActivePokemon() {
  if (!ProxyState.activePokemon) {
    document.getElementById('active-pokemon').innerHTML = '<div class="text-center"><em>No Current Pokemon</em></div>'
    return
  }
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
}



export default class PokeApiController {
  constructor() {
    ProxyState.on("allApiPokemon", _drawAll);
    ProxyState.on('activePokemon', _drawActivePokemon)

    this.getAllPokemon()    
  }
  async getAllPokemon() {
    try {
      await pokeApiService.getAllPokemon();      
    } catch (error) {
      console.error('controller poke api issue', error)
    }
  }
  async getPokemon(id) {
    try {
      await pokeApiService.getPokemon(id)
    } catch (error) {
      console.error(error)
    }
  }



}
