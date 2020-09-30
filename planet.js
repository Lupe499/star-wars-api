let url = new URLSearchParams(window.location.search);
let thePlanet = document.querySelector(".thePlanet");
if (url.has("id")) {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${url.get("id")}`)
    fetch(`https://swapi.dev/api/planets/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);

        thePlanet.innerHTML = `
        <h2 class="character_name">${data.name}</h2>
        <div class="infoDiv1">
            <p class="planet_climate">${data.name}'s climate: ${data.climate}</p>
            <p class="planet_diameter">${data.name}'s diameter: ${data.diameter}km</p>
            <p class="planet_gravity">${data.name}'s gravity: ${data.gravity}</p>
        </div>
        <div class="infoDiv2">
            <p class="planet_orbital_period">${data.name}'s orbital period: ${data.orbital_period}</p>
            <p class="planet_population">${data.name}'s population: ${data.population}</p>
            <p class="planet_rotation_period">${data.name}'s rotation period: ${data.rotation_period}</p>
        </div>
        `
    });
}   