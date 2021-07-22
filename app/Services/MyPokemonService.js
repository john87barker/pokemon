import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandbox } from "./AxiosService.js"

class MyPokemonService{
  async getMyPokemon() {
    const res = await sandbox.get()
    console.log(res.data)
    ProxyState.MyPokemon = res.data.map(p => new Pokemon(p))
  }
async catchPokemon() {
    const res = await sandbox.post('', ProxyState.activePokemon)
    console.log(res.data);
    const newSpell = new Pokemon(res.data)
    ProxyState.MyPokemon = [...ProxyState.MyPokemon, newSpell]
    ProxyState.activePokemon = newSpell
  }

  setPokemon(id) {
    const pokemon = ProxyState.MyPokemon.find(p => p.id === id)
    if (!pokemon) {
      throw new Error('invalid pokemon id')
    }
    ProxyState.activePokemon = pokemon
    ProxyState.MyPokemon = ProxyState.MyPokemon
}

  async removePokemon() {
    const res = await sandbox.delete(ProxyState.activePokemon.id)
    console.log(res.data)
    ProxyState.MyPokemon = ProxyState.MyPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }
}

export const myPokemonService = new MyPokemonService()