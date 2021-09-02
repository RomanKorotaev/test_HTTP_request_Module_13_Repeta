import pokemonCardTpl from './templates/pokemon-card.hbs'



const refs = {
    cardContainer: document.querySelector('.js-card-container')
}



console.log('Hello, World! (01-fetch-api.js)')

const r = fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        const markup = pokemonCardTpl(pokemon);
        //console.log(markup);
        refs.cardContainer.innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    } )

//console.log (r)