import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import {pokeApi} from "./AxiosService.js"

class PokeApiService {
  async getAllPokemon() {
    let res = await pokeApi.get()
    ProxyState.allApiPokemon = res.data.results
    console.log(res)
  }
}

export const pokeApiService = new PokeApiService();

