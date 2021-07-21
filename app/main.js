// import MyPokemonController from "./Controllers/MyPokemonController.js";
import PokeApiController from "./Controllers/PokeApiController.js"
  
class App {
  // MyPokemonController = new MyPokemonController();
  pokeApiController = new PokeApiController()
}

window["app"] = new App();
