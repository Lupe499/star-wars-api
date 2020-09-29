let url = new URLSearchParams(window.location.search);

let page = url.get("page") ? url.get("page") : 1;
let prevPage, nextPage;
let nextLink = document.querySelector(".nextLink");
let prevLink = document.querySelector(".prevLink");

fetch(`https://swapi.dev/api/people/?page=${page}`)
    .then(res => res.json())
    .then(function(data){
        let spinner = document.querySelector(".spinner")
        spinner.remove();
        let allcharacters = document.querySelector(".allcharacters");
        console.log(data)

        /* nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 20;
        prevOffset = offset <= 0 ? 0 : parseInt(offset) - 20;
        nextLink.href = `?offset=${nextOffset}`;
        prevLink.href = `?offset=${prevOffset}`; */

        nextPage = page >= 9 ? 9 : parseInt(page) + 1 ;
        prevPage = page <= 1 ? 1 : parseInt(page) - 1 ;
        nextLink.href = `?page=${nextPage}`;
        prevLink.href = `?page=${prevPage}`;

        data.results.forEach(function (result) {
            let array = result.url.split("/");
            //console.log(array);
            
            
            const characters = document.createElement('div');
            characters.classList.add('characters');
            
            characters.innerHTML = `
            <a href="" class="products__productName">${result.name}</a>
        `
            let id = array[array.length - 2];
            characters.querySelector(".products__productName").href = `./character-sheet.html?id=${id}`;
            allcharacters.appendChild(characters);
        });
    });