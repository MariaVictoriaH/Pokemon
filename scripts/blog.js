const toggleButton = document.getElementById('toggle-button')

toggleButton.addEventListener('click', () => {
document.body.classList.toggle('dark');

if (toggleButton.textContent == 'Dark Mode'){
  toggleButton.textContent = 'Ligth Mode'
}else{
  toggleButton.textContent = 'Dark Mode'
}
})