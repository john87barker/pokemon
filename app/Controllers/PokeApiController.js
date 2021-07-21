import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawAll() {
  const pokemon = ProxyState.allApiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li class="action" onclick="app.pokeApiController.get`)
}


export default class PokeApiController {
  constructor() {
    ProxyState.on("allApiPokemon", _drawAll);

  this.getAllPokemon()    
  }
  async getAllPokemon() {
    try {
      await pokeApiService.getAllPokemon();      
    } catch (error) {
      console.error('controller poke api issue')
    }
  }


}
