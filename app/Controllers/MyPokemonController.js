import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";

function _drawAll() {
  const pokemon = ProxyState.MyPokemon
  const activePokemon = ProxyState.activePokemon || {}
  let template = ""

  pokemon.forEach(p => template += `<li class="action ${activePokemon.id === p.id ? 'text-primary' : ''}" onclick="app.myPokemonController.setPokemon('${p.id}')">${p.name}</li>`)

  if (!template) {
    template += '<p><em> No Pokemon Here!</em></p>'
  } 
  document.getElementById('my-pokemon').innerHTML = template
}

export default class MyPokemonController{
  constructor() {
    ProxyState.on('myPokemon', _drawAll)
    this.getMyPokemon()
  }
  async getMyPokemon() {
  try {
    await myPokemonService.getMyPokemon()
  } catch (error) {
    console.error('failed to get sandbox spells', error)
  }
}

  async catchPokemon() {
    try {
      await myPokemonService.catchPokemon()
    } catch (error) {
      console.error('something went wrong', error)
    }
  }
  setPokemon(id) {
    try {
      myPokemonService.setPokemon(id)
    } catch (error) {
      console.error('invalid id')
    }
  }
  async removePokemon() {
    try {
      await myPokemonService.removePokemon()
    } catch (error) {
      console.error('invalid id')
    }
  }
  
}