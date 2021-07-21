import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";




export default class PokeApiController {
  constructor() {
    // ProxyState.on("values", _draw);
    
  }
  async getAllPokemon() {
    try {
      await pokeApiService.getAllPokemon();      
    } catch (error) {
      console.error('controller poke api issue')
    }
  }


}
