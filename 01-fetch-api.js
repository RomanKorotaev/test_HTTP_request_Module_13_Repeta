import pokemonCardTpl from './templates/pokemon-card.hbs'

console.log('Hello, World! (01-fetch-api.js)')


const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form')
}

refs.searchForm.addEventListener('submit', onSearch);

// fetchPokemon(5)
//     .then(renderPocemonCard)
//     .catch(error => console.log(error));

function onSearch(e) {
    e.preventDefault();

    const form = e.currentTarget;
    //Это пример селектора в js по свойству name (если оно задано єлементу в html-файле)
    //Репета: Модуль 12 НТТР-запросы; время:  1:13:50
    const searchQuery = form.elements.query.value;
    
    fetchPokemon(searchQuery)
    .then(renderPocemonCard)
        .catch(error => {
            //console.log('Это CATCH');
           // console.dir(error);
            onFetchError (error)
        })
    .finally ( () => form.reset()) // для офистки формы
 }


function fetchPokemon(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json());
   
 };

function renderPocemonCard(pokemon) {
     const markup = pokemonCardTpl(pokemon);
    //console.log(markup);
    refs.cardContainer.innerHTML = markup;
 }


function onFetchError(error) {
    alert ("Упс, что-то пошло не так и мы не нашли Вашего покемона.")
 }