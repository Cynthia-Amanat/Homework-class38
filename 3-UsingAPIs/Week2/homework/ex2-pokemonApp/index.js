'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('HTTP ERROR');
}

async function fetchAndPopulatePokemons() {
  const selectOption = document.getElementsByTagName('select')[0];

  const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=151`);

  data.results.forEach((pokemon) => {
    console.log(pokemon);
    const option = document.createElement('option');
    option.textContent = pokemon.name;
    option.setAttribute('value', pokemon.url);
    option.classList = 'pokemon-options';
    selectOption.appendChild(option);
  });
}

async function fetchImage(url) {
  try {
    const pokemonData = await fetchData(url);
    const imagePokemon = document.createElement('img');
    imagePokemon.setAttribute('src', pokemonData.sprites.front_shiny);
    imagePokemon.setAttribute('alt', pokemonData.getElementsByTagName);
    imagePokemon.id = 'pokemon-image';
    document.body.appendChild(imagePokemon);
  } catch (err) {
    renderError(err);
  }
}

function renderError(error) {
  const errorElement = document.createElement('h1');
  errorElement.textContent = error.message;
  document.body.appendChild(errorElement);
}

async function main() {
  try {
    const buttonGetPokemons = document.createElement('button');
    const selectPokemons = document.createElement('select');

    buttonGetPokemons.classList.add('btn');
    buttonGetPokemons.setAttribute('type', 'submit');
    buttonGetPokemons.textContent = 'Get Pokemons';
    selectPokemons.id = 'select-Pokemons';

    document.body.appendChild(buttonGetPokemons);
    document.body.appendChild(selectPokemons);

    buttonGetPokemons.addEventListener('click', fetchAndPopulatePokemons());

    selectPokemons.addEventListener('change', (e) => {
      console.log(e.target.value);
      fetchImage(e.target.value);
    });
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
