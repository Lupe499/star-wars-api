let url = new URLSearchParams(window.location.search);
let thePlanet = document.querySelector(".thePlanet");
if (url.has("id")) {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${url.get("id")}`)
    fetch(`http://swapi.dev/api/starships/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);

        thePlanet.innerHTML = `
        <h2 class="character_name">${data.name}</h2>
        <div class="infoDiv1">
            <p class="starship_model">${data.name}'s model: ${data.model}</p>
            <p class="starship_crew">${data.name}'s crew: ${data.crew}</p>
            <p class="starship_speed">${data.name}'s max atmosphering speed: ${data.max_atmosphering_speed}</p>
        </div>
        <div class="infoDiv2">
            <p class="starship_cost">${data.name}'s cost in credits: ${data.cost_in_credits}</p>
            <p class="starship_class">${data.name}'s starship class: ${data.starship_class}</p>
            <p class="starship_manufacturer">${data.name}'s manufacturer: ${data.manufacturer}</p>
        </div>
        `
    });
}   