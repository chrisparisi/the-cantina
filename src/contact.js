function createContactContent() {
    const container = document.createElement('div');
    container.classList.add('contact-container');

    const card = document.createElement('div');
    card.classList.add('card');

    const phone = document.createElement('p');
    phone.textContent = "Communicator: (805) 123-1234";

    const email = document.createElement('p');
    email.textContent = "Email: HanShotFirst@gmail.com";

    const address = document.createElement('p');
    address.textContent = "Address: In a galaxy far, far away";

    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(address);
    container.appendChild(card);

    return container;
}

function loadContactContent() {
    const page = document.getElementById('page');
    page.textContent = '';
    page.appendChild(createContactContent());
}

export default loadContactContent;