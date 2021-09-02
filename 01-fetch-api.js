import pokemonCardTpl from './templates/pokemon-card.hbs'



const refs = {
    cardContainer: document.querySelector('.js-card-container')
}



console.log('Hello, World! (01-fetch-api.js)')


fetchPokemonById()

function fetchPokemonById() {
     fetch('https://pokeapi.co/api/v2/pokemon/10')
    .then(response => {
        return response.json();
    })
    .then(renderPocemonCard)
    .catch(error => {
        console.log(error);
    } )
 };

function renderPocemonCard(pokemon) {
     const markup = pokemonCardTpl(pokemon);
    //console.log(markup);
    refs.cardContainer.innerHTML = markup;
 }