function createMenu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const item1 = document.createElement('div');
    item1.classList.add('item');
    const itemName1 = document.createElement('h3');
    itemName1.textContent = "Hyperdrive (Punch It!)";
    const itemDescription1 = document.createElement('p');
    itemDescription1.textContent = "Powerade® Mountain Berry Blast, White Cranberry Juice, Black Cherry Purée, and Sprite";
    item1.appendChild(itemName1);
    item1.appendChild(itemDescription1);

    const item2 = document.createElement('div');
    item2.classList.add('item');
    const itemName2 = document.createElement('h3');
    itemName2.textContent = "Blue Bantha";
    const itemDescription2 = document.createElement('p');
    itemDescription2.textContent = "Blue Milk served chilled with Bantha-inspired Vanilla-Butter Sugar Cookie";
    item2.appendChild(itemName2);
    item2.appendChild(itemDescription2);

    const item3 = document.createElement('div');
    item3.classList.add('item');
    const itemName3 = document.createElement('h3');
    itemName3.textContent = "Tarine Tea";
    const itemDescription3 = document.createElement('p');
    itemDescription3.textContent = "Gold Peak® Unsweetened Tea, Peach, Huckleberry, and Mint";
    item3.appendChild(itemName3);
    item3.appendChild(itemDescription3);

    const item4 = document.createElement('div');
    item4.classList.add('item');
    const itemName4 = document.createElement('h3');
    itemName4.textContent = "Fuzzy Tauntaun";
    const itemDescription4 = document.createElement('p');
    itemDescription4.textContent = 'Cîroc Peach Vodka, Bols Peach Schnapps, and Simply Orange® topped with Tangerine, Pure Cane Sugar, "Buzz Button Tingling" Foam';
    item4.appendChild(itemName4);
    item4.appendChild(itemDescription4);

    const item5 = document.createElement('div');
    item5.classList.add('item');
    const itemName5 = document.createElement('h3');
    itemName5.textContent = "Jedi Mind Trick";
    const itemDescription5 = document.createElement('p');
    itemDescription5.textContent = "Ketel One Botanical Grapefruit and Rose Vodka, John D. Taylor's Velvet Falernum, Bols Blue Curaçao, White Grape Juice, Lime Juice, and Grapefruit Bitters";
    item5.appendChild(itemName5);
    item5.appendChild(itemDescription5);

    const item6 = document.createElement('div');
    item6.classList.add('item');
    const itemName6 = document.createElement('h3');
    itemName6.textContent = "Jet Juice";
    const itemDescription6 = document.createElement('p');
    itemDescription6.textContent = "Maker's Mark Bourbon, Ancho Reyes Chile Liqueur, Açaí Liqueur, White Grape Juice, and Lemon Juice";
    item6.appendChild(itemName6);
    item6.appendChild(itemDescription6);

    const item7 = document.createElement('div');
    item7.classList.add('item');
    const itemName7 = document.createElement('h3');
    itemName7.textContent = "Bad Motivator IPA";
    const itemDescription7 = document.createElement('p');
    itemDescription7.textContent = "(ABV 6.0%) Tropical India Pale Ale with Galaxy and Comet Hops (Sierra Nevada Brewing Co.)";
    item7.appendChild(itemName7);
    item7.appendChild(itemDescription7);

    const item8 = document.createElement('div');
    item8.classList.add('item');
    const itemName8 = document.createElement('h3');
    itemName8.textContent = "Batuu Bits";
    const itemDescription8 = document.createElement('p');
    itemDescription8.textContent = "A light crisp Snack Mix from the galaxy";
    item8.appendChild(itemName8);
    item8.appendChild(itemDescription8);

    const item9 = document.createElement('div');
    item9.classList.add('item');
    const itemName9 = document.createElement('h3');
    itemName9.textContent = "Yub Nub";
    const itemDescription9 = document.createElement('p');
    itemDescription9.textContent = "Malibu Pineapple Rum, Sailor Jerry Spiced Rum, Citrus Juices, and Passion Fruit served in a souvenir Endor mug";
    item9.appendChild(itemName9);
    item9.appendChild(itemDescription9);

    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);
    menuContainer.appendChild(item6);
    menuContainer.appendChild(item7);
    menuContainer.appendChild(item8);
    menuContainer.appendChild(item9);

    return menuContainer
}

function loadMenu() {
    const page = document.getElementById('page');
    page.textContent = '';
    page.appendChild(createMenu());
}

export default loadMenu;