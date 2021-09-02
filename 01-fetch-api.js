import pokemonCardTpl from './templates/pokemon-card.hbs'



const r = fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        return response.json();
    })
    .then(pokemon => {
        console.log(pokemon);
    })
    .catch(error => {
        console.log(error);
    } )

//console.log (r)