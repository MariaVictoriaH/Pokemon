let toggle = document.getElementById('mode');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(toggle.textContent == 'Dark Mode'){
        toggle.textContent = 'Light Mode'
    }else{
        toggle.textContent = 'Dark Mode'
    }
})

