let url = new URLSearchParams(window.location.search);

if (url.has("id")) {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${url.get("id")}`)
    fetch(`https://swapi.dev/api/people/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
    });
}