function createHomeContent() {
    const container = document.createElement('div');
    container.classList.add('container');

    const quote = document.createElement('div');
    quote.classList.add('quote');
    const quoteWords = document.createElement('h2');
    quoteWords.textContent = `"I am Commander Shepherd and this is my favorite cantina in the galaxy!"`;
    quote.appendChild(quoteWords);

    const mainImage = document.createElement('div');
    mainImage.classList.add('main-image');
    const exteriorImage = document.createElement('img');
    exteriorImage.src = 'assets/cantina-outside.jpg';
    exteriorImage.alt = "cantina exterior";
    const imageText = document.createElement('p');
    imageText.textContent = "This place has a door and everything. So brave."
    mainImage.appendChild(exteriorImage);
    mainImage.appendChild(imageText);

    const description = document.createElement('div');
    description.classList.add('description');
    const descriptionText = document.createElement('p');
    descriptionText.textContent = "Wow. This restaurant is so nice. So very nice indeed. I wouldn't mind gambling here or drinking a mighty fine beverage with Samuel Jackson here. The food here is made from real Earth things like meat and plants and water and stuff. I once saw a labrador here just sitting at the bar. No owner. Just sitting and enjoying the people and carrying around his ball. it made me chortle."
    description.appendChild(descriptionText);

    container.appendChild(quote);
    container.appendChild(mainImage);
    container.appendChild(description);

    return container;
}

function loadHomeContent() {
    const page = document.getElementById('page');
    page.textContent = '';
    page.appendChild(createHomeContent());
}

export default loadHomeContent;