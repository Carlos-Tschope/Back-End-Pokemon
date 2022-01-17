import { Pokemon } from '../entities/pokemon';
import { PokemonService } from './pokemon-service';

describe('PokemonService', () => {
  it('should create pokemon', async () => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.create('Pikachu', 10, 1);
    expect(pokemon).toBeInstanceOf(Pokemon);
    expect(pokemon).toHaveProperty('nome', 'Pikachu');
  });

  it('should not create pokemon if not found pokemon type', async () => {
    const pokemonService = new PokemonService();
    const error = await pokemonService.create('Pikachu', 10, 9090);
    expect(error).toBeInstanceOf(Error);
  });

  it('should get pokemon by name', async () => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.getByName('Charmander');
    expect(pokemon).toBeInstanceOf(Pokemon);
    expect(pokemon).toHaveProperty('nivel');
  });

  it('should return undefined if not found a pokemon', async () => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.getByName('sdsd');
    expect(pokemon).toBeUndefined();
  });

  it('should update the pokemon level', async () => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.update(96, 10);
    expect(pokemon).toBeUndefined();
  });

  it('should update the pokemon level (Error)', async () => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.update(-1, 10);
    expect(pokemon).toBeInstanceOf(Error);
  });

  // it('should return undefined if you remove pokemon', async () => {
  //   const pokemonService = new PokemonService();
  //   const pokemon = await pokemonService.delete(262);
  //   expect(pokemon).toBeUndefined();
  // });

  // it('should return Error if it doesn't find the id', async () => {
  //   const pokemonService = new PokemonService();
  //   const pokemon = await pokemonService.delete(4141212);
  //   expect(pokemon).toBeInstanceOf(Error);
  // });

  it('must return an array containing all elements in the expected array', async () => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.getAll();
    expect.arrayContaining(pokemon);
  });
});
