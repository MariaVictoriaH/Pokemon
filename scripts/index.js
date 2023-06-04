const mainDarkMode = document.getElementsByTagName('body');
const parrafoDarkMode = document.getElementsByClassName('.sectionParrafo');
const btnPrincipal = document.getElementsByClassName('.btnPrincipal');
const btnDarkMode = document.getElementById('darkMode');


btnDarkMode.addEventListener('click', function() {
    if(btnDarkMode.textContent == 'Dark Mode'){
        btnDarkMode.textContent ='Light Mode';
        console.log(btnPrincipal);
        btnPrincipal.style.backgroundColor = '#1A202C';
        document.body.style.backgroundColor = '#1A202C';
        document.body.section.color = 'blue';
        
        parrafoDarkMode[2].style.color = '#FF0000';
    }else{
        btnDarkMode.textContent ='Dark Mode';
        document.body.style.backgroundColor = '#FFFFFF';
        parrafoDarkMode.color = "red";
    }
    
   /*mainDarkMode.style.backgroundcolor = "#1A202C"; */

});