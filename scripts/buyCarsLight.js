const containerPokemon = document.getElementById('containerPokemon');
const btnMoreCards = document.getElementById('btnMoreCards');
const navType = [...document.getElementsByClassName('navType')];

const pokemones = [];

let mode = document.getElementById('mode');
let countCards = 0;
let loadCards = 8;
let offSet = 1;
let urlApi = "https://pokeapi.co/api/v2/pokemon/";


mode.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(mode.textContent == 'Dark Mode'){
    mode.textContent = 'Light Mode'
  }else{
    mode.textContent = 'Dark Mode'
  }
})

function fetchPokemons(offSet, loadCards) {
  spinner.style.display = 'block';
  for (let i = offSet; i <= offSet + loadCards - 1; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
      spinner.style.display = "none";
    });
  }
  countCards += loadCards;

  const countPokemones = document.getElementById('totalCards');
  countPokemones.textContent = `${countCards}  Cards`;
}

function createPokemon(pokemon) {
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const name = document.createElement('p');
  const icon = document.createElement('i');
  const img = document.createElement('img');
  const CardFooter = document.createElement('div');
  const powerName = document.createElement('p');
  const button = document.createElement('button');
  const PokemonType = pokemon.types[0].type.name;

  name.textContent = `Name:  ${pokemon.name}`;
  img.src = pokemon.sprites.other["official-artwork"].front_shiny,
  powerName.textContent = `Power level:  ${pokemon.base_experience}`;
  button.textContent = "Buy";

  name.classList.add('name');
  icon.className = 'fa-sharp fa-regular fa-heart';
  img.classList.add('bgImg');
  button.classList.add('btnBuy');

  card.appendChild(cardHeader);
  cardHeader.appendChild(name);
  cardHeader.appendChild(icon);
  card.appendChild(img);
  CardFooter.appendChild(powerName);
  CardFooter.appendChild(button);
  card.appendChild(CardFooter);

  card.setAttribute('type', PokemonType);

  containerPokemon.appendChild(card);

 }

btnMoreCards.addEventListener('click', () => {
  offSet += 7;
  fetchPokemons(offSet, loadCards);
});

navType.forEach((type) =>{
  type.addEventListener('click', (event) =>{
    event.preventDefault();
    const filter = type.textContent.toLocaleLowerCase();
    filterType(filter);
  });
});

const filterType = (type) =>{
  const cards = document.querySelectorAll('.container');
  cards.forEach((card) => {
    console.log(card);

    const cardType = card.getAttribute('type');
    console.log(cardType);
    if (type === 'all' || cardType === type ) {
      cards.classList.remove('hidden');

    }else{
      cards.classList.add('hidden');
    }
  });
}

fetchPokemons(offSet, loadCards)
