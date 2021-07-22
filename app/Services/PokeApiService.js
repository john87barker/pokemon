import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import {pokeApi} from "./AxiosService.js"

class PokeApiService {
  async getAllPokemon() {
    let res = await pokeApi.get()
    ProxyState.allApiPokemon = res.data.results
    // console.log(res.data.results)
    // console.log(res.data.results.id)
  }

  async getPokemon(id) {
    let res = await pokeApi.get(id)
    // console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
}


}

export const pokeApiService = new PokeApiService();

