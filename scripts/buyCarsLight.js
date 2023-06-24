const containerPokemon = document.getElementById('containerPokemon');
const btnMoreCards = document.getElementById('btnMoreCards');
const navType = [...document.getElementsByClassName('navType')];
const countPokemones = document.getElementById('totalCards');


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
    localStorage.setItem('thema','Light')
  }else{
    mode.textContent = 'Dark Mode'
    localStorage.setItem('thema','Dark')
  }
})

const saveThema = () => {
  if (localStorage.getItem('thema') === 'Light'){
      document.body.classList.remove('dark');
  }else{
        document.body.classList.add('dark');
  }
}

saveThema();

function fetchPokemons(offSet, loadCards) {
  for (let i = offSet; i <= offSet + loadCards - 1; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    })
    .catch((error) =>{
      alert('Se presentó un error en la API. Por favor validar la Url indicada',error);
    });
  }
  countCards += loadCards;

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

  card.classList.add('card');
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
  offSet += 8;
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
  const cards = document.getElementsByClassName('card');
  let countFilter = 0;

  Array.from(cards).forEach(card => {
    const cardType = card.getAttribute('type');
     
    if (type === 'all' || cardType === type ) {
      card.classList.remove('hidden');
      countFilter = countFilter + 1;
    }else{
      card.classList.add('hidden');
    }
    countPokemones.textContent = `${countFilter}  Cards`;
  });
}

fetchPokemons(offSet, loadCards)
