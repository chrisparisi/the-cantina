import loadHomeContent from './home.js';
import loadMenu from './menu.js';
import loadContactContent from './contact.js';

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const venueName = document.createElement('h1');
    venueName.textContent = "The Cantina";

    header.appendChild(venueName);

    return header;
}

function createNavbar() {
    const navbar = document.createElement('div');
    navbar.classList.add('nav-bar');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = "Home";
    navbar.appendChild(homeButton);
    homeButton.addEventListener('click', (e) => {
        loadHomeContent();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = "Menu";
    navbar.appendChild(menuButton);
    menuButton.addEventListener('click', (e) => {
        loadMenu();
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = "Contact";
    navbar.appendChild(contactButton);
    contactButton.addEventListener('click', (e) => {
        loadContactContent();
    });

    return navbar;
}

function loadPage() {
    const page = document.createElement('div');
    page.setAttribute('id', 'page');

    return page
}

function loadNavElements() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createNavbar());
    content.appendChild(loadPage());
}

function loadCantina() {
    loadNavElements();
    loadHomeContent();
}

export default loadCantina;