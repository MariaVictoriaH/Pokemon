const listPokemon = document.getElementById("containerPokemon");
const btnMoreCards = document.getElementById('btnMoreCards');
const pokemones = [];

let toggle = document.getElementById('mode');
let loadCards = 8;
let offSet = 1;
let urlApi = "https://pokeapi.co/api/v2/pokemon/";



toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(toggle.textContent == 'Dark Mode'){
      toggle.textContent = 'Light Mode'
  }else{
      toggle.textContent = 'Dark Mode'
  }
})



function selectTab(evt, tabName) {
  let i, tabcontent, tablinks, line;
  line = document.querySelector('.line')
  line.style.width = evt.target.offSetWidth + 'px';
  line.style.left = evt.target.offSetLeft + 'px';
  if (selectTab =='All'){
    fetchPokemons(offSet, loadCards);
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}





function fetchPokemons(offSet, loadCards) {
  spinner.style.display = 'block';
  for (let i = offSet; i <= offSet + loadCards - 1; i++) {
    fetchPokemon(i);
  }
}

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
}


btnMoreCards.addEventListener('click', () => {
  offSet += 7;
  fetchPokemons(offSet, loadCards);
});


function createPokemon(pokemon) {
  const div = document.createElement("div");
  const pokeName = document.createElement("p");
  const img = document.createElement("img");
  const powerLevel = document.createElement("p");
  const button = document.createElement("button");
  const divCardHeader = document.createElement("div");
  const divCardFooter = document.createElement("div");
  const i = document.createElement("i");

  div.classList.add("item");
  pokeName.textContent = `Name:  ${pokemon.name}`;
  pokeName.classList.add("name");
  i.classList.add("heart");
  img.classList.add("fondoImagen");
  img.src = pokemon.sprites.other["official-artwork"].front_shiny,
  powerLevel.textContent = `Power level:  ${pokemon.base_experience}`;
  button.textContent = "Buy";
  listPokemon.appendChild(div);
  divCardHeader.appendChild(pokeName);
  divCardHeader.appendChild(i);
  div.appendChild(divCardHeader);

  div.appendChild(img);
  divCardFooter.appendChild(powerLevel);
  divCardFooter.appendChild(button);
  div.appendChild(divCardFooter);
}

  for (let i = 1; i <= loadCards; i++) {
    fetch(urlApi + i)
      .then((response) => response.json())
      .then((data) => createPokemon(data));
  }

  



















/* Llamo una única vez a la Api y asigno el resultado a un arreglo 
function loadPokemonesApi()
{
  fetch(urlApi)
    .then((res) => res.json())
    .then((data) => {
      //pokemones.push(data);
      data.results.forEach((pokemon) => {
        console.log(pokemon);
        const div = document.createElement("div");
        const pokeName = document.createElement("p");
        const img = document.createElement("img");
        const powerLevel = document.createElement("p");
        const button = document.createElement("button");
        const divCardHeader = document.createElement("div");
        const divCardFooter = document.createElement("div");
        const i = document.createElement("i");
      
        div.classList.add("item");
        pokeName.textContent = `Name:  ${pokemon.name}`;
        pokeName.classList.add("name");
        i.classList.add("heart");
        img.classList.add("fondoImagen");
        img.src = pokemon.sprites.other["official-artwork"].front_shiny,
        powerLevel.textContent = `Power level:  ${pokemon.base_experience}`;
        button.textContent = "Buy";
        listPokemon.appendChild(div);
        divCardHeader.appendChild(pokeName);
        divCardHeader.appendChild(i);
        div.appendChild(divCardHeader);
      
        div.appendChild(img);
        divCardFooter.appendChild(powerLevel);
        divCardFooter.appendChild(button);
        div.appendChild(divCardFooter);
        
      });


      
    });
}

function createPokemon(pokemon) {
  console.log(pokemon);
  const div = document.createElement("div");
  const pokeName = document.createElement("p");
  const img = document.createElement("img");
  const powerLevel = document.createElement("p");
  const button = document.createElement("button");
  const divCardHeader = document.createElement("div");
  const divCardFooter = document.createElement("div");
  const i = document.createElement("i");

  div.classList.add("item");
  pokeName.textContent = `Name:  ${pokemon.name}`;
  pokeName.classList.add("name");
  i.classList.add("heart");
  img.classList.add("fondoImagen");
 // img.src = pokemon.sprites.other["official-artwork"].front_shiny,
  powerLevel.textContent = `Power level:  ${pokemon.base_experience}`;
  button.textContent = "Buy";
  listPokemon.appendChild(div);
  divCardHeader.appendChild(pokeName);
  divCardHeader.appendChild(i);
  div.appendChild(divCardHeader);

  div.appendChild(img);
  divCardFooter.appendChild(powerLevel);
  divCardFooter.appendChild(button);
  div.appendChild(divCardFooter);
}

function selectTab(evt, tabName) {
  let i, tabcontent, tablinks, line;
  line = document.querySelector('.line')
  line.style.width = evt.target.offSetWidth + 'px';
  line.style.left = evt.target.offSetLeft + 'px';
  if (selectTab =='All'){
    fetchPokemons(offSet, loadCards);
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}


  loadPokemonesApi();

  */