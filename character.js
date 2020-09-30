let url = new URLSearchParams(window.location.search);
let theCharacter = document.querySelector(".theCharacter");
if (url.has("id")) {
    //fetch(`https://pokeapi.co/api/v2/pokemon/${url.get("id")}`)
    fetch(`https://swapi.dev/api/people/${url.get("id")}`)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);

        theCharacter.innerHTML = `
        <h2 class="character_name">${data.name}</h2>
        <div class="infoDiv1">
            <p class="character_Bdata">Birth year: ${data.birth_year}</p>
            <p class="character_gender">Gender: ${data.gender}</p>
            <p class="character_height">Height: ${data.height}cm</p>
            <a class="character_link_planet" href="">planet</a>
        </div>
        <div class="infoDiv2">
            <p class="character_hair_color">Hair color: ${data.hair_color}</p>
            <p class="character_eye_color">Eye color: ${data.eye_color}</p>
            <p class="character_skin_color">Skin color: ${data.skin_color}</p>
        </div>
        `



            let array = data.homeworld.split("/");
            //console.log(array);
            let id = array[array.length - 2];
            let link = document.querySelector(".infoDiv1");
            link.querySelector(".character_link_planet").href = `./planet.html?id=${id}`;
        
        
    });
}