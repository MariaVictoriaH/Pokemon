let mode = document.getElementById('mode');
const themeCurrent = localStorage.getItem('theme');
const myLocalStorage = localStorage;

const changeTheme = () => {
    if (mode.textContent === 'Dark Mode'){
        mode.textContent = 'Light Mode';
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
      mode.textContent = 'Dark Mode';
      document.documentElement.setAttribute('data-theme', null);
      localStorage.setItem('theme', null);
    }
  }
  
  mode.addEventListener('click', changeTheme);  
 
  if (themeCurrent){
     document.documentElement.setAttribute('data-theme', themeCurrent);
  }
  
  if (themeCurrent === 'dark'){
     mode.click = true;
   }
 