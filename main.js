const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
                            //Evento , función
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(event){
    event.preventDefault();
    desktopMenu.classList.toggle('inactive');//toggle añade o quita la clase que se le indica
}