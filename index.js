console.log('Hello, World!')


const r = fetch('https://pokeapi.co/api/v2/pokemon/2')
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