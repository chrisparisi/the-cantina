/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactContent);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeContent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




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
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = "Menu";
    navbar.appendChild(menuButton);
    menuButton.addEventListener('click', (e) => {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = "Contact";
    navbar.appendChild(contactButton);
    contactButton.addEventListener('click', (e) => {
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCantina);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");


(0,_navigation_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7O0FDOUJqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDdkM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHaUI7QUFDUDtBQUNhOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWtCO0FBQzFCLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFlO0FBQ25COztBQUVBLGlFQUFlLFdBQVc7Ozs7OztVQ25FMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUMsMERBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gXCJDb21tdW5pY2F0b3I6ICg4MDUpIDEyMy0xMjM0XCI7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IEhhblNob3RGaXJzdEBnbWFpbC5jb21cIjtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogSW4gYSBnYWxheHkgZmFyLCBmYXIgYXdheVwiO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdENvbnRlbnQoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJyk7XG4gICAgcGFnZS50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdENvbnRlbnQoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0Q29udGVudDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJyk7XG4gICAgY29uc3QgcXVvdGVXb3JkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcXVvdGVXb3Jkcy50ZXh0Q29udGVudCA9IGBcIkkgYW0gQ29tbWFuZGVyIFNoZXBoZXJkIGFuZCB0aGlzIGlzIG15IGZhdm9yaXRlIGNhbnRpbmEgaW4gdGhlIGdhbGF4eSFcImA7XG4gICAgcXVvdGUuYXBwZW5kQ2hpbGQocXVvdGVXb3Jkcyk7XG5cbiAgICBjb25zdCBtYWluSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi1pbWFnZScpO1xuICAgIGNvbnN0IGV4dGVyaW9ySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBleHRlcmlvckltYWdlLnNyYyA9ICdhc3NldHMvY2FudGluYS1vdXRzaWRlLmpwZyc7XG4gICAgZXh0ZXJpb3JJbWFnZS5hbHQgPSBcImNhbnRpbmEgZXh0ZXJpb3JcIjtcbiAgICBjb25zdCBpbWFnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW1hZ2VUZXh0LnRleHRDb250ZW50ID0gXCJUaGlzIHBsYWNlIGhhcyBhIGRvb3IgYW5kIGV2ZXJ5dGhpbmcuIFNvIGJyYXZlLlwiXG4gICAgbWFpbkltYWdlLmFwcGVuZENoaWxkKGV4dGVyaW9ySW1hZ2UpO1xuICAgIG1haW5JbWFnZS5hcHBlbmRDaGlsZChpbWFnZVRleHQpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPSBcIldvdy4gVGhpcyByZXN0YXVyYW50IGlzIHNvIG5pY2UuIFNvIHZlcnkgbmljZSBpbmRlZWQuIEkgd291bGRuJ3QgbWluZCBnYW1ibGluZyBoZXJlIG9yIGRyaW5raW5nIGEgbWlnaHR5IGZpbmUgYmV2ZXJhZ2Ugd2l0aCBTYW11ZWwgSmFja3NvbiBoZXJlLiBUaGUgZm9vZCBoZXJlIGlzIG1hZGUgZnJvbSByZWFsIEVhcnRoIHRoaW5ncyBsaWtlIG1lYXQgYW5kIHBsYW50cyBhbmQgd2F0ZXIgYW5kIHN0dWZmLiBJIG9uY2Ugc2F3IGEgbGFicmFkb3IgaGVyZSBqdXN0IHNpdHRpbmcgYXQgdGhlIGJhci4gTm8gb3duZXIuIEp1c3Qgc2l0dGluZyBhbmQgZW5qb3lpbmcgdGhlIHBlb3BsZSBhbmQgY2FycnlpbmcgYXJvdW5kIGhpcyBiYWxsLiBpdCBtYWRlIG1lIGNob3J0bGUuXCJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1b3RlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWVDb250ZW50KCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZScpO1xuICAgIHBhZ2UudGV4dENvbnRlbnQgPSAnJztcbiAgICBwYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVDb250ZW50KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZUNvbnRlbnQ7IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgY29uc3QgaXRlbU5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZTEudGV4dENvbnRlbnQgPSBcIkh5cGVyZHJpdmUgKFB1bmNoIEl0ISlcIjtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbjEudGV4dENvbnRlbnQgPSBcIlBvd2VyYWRlwq4gTW91bnRhaW4gQmVycnkgQmxhc3QsIFdoaXRlIENyYW5iZXJyeSBKdWljZSwgQmxhY2sgQ2hlcnJ5IFB1csOpZSwgYW5kIFNwcml0ZVwiO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW1OYW1lMSk7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uMSk7XG5cbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBjb25zdCBpdGVtTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lMi50ZXh0Q29udGVudCA9IFwiQmx1ZSBCYW50aGFcIjtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbjIudGV4dENvbnRlbnQgPSBcIkJsdWUgTWlsayBzZXJ2ZWQgY2hpbGxlZCB3aXRoIEJhbnRoYS1pbnNwaXJlZCBWYW5pbGxhLUJ1dHRlciBTdWdhciBDb29raWVcIjtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtTmFtZTIpO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbjIpO1xuXG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMy5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgY29uc3QgaXRlbU5hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZTMudGV4dENvbnRlbnQgPSBcIlRhcmluZSBUZWFcIjtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbjMudGV4dENvbnRlbnQgPSBcIkdvbGQgUGVha8KuIFVuc3dlZXRlbmVkIFRlYSwgUGVhY2gsIEh1Y2tsZWJlcnJ5LCBhbmQgTWludFwiO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGl0ZW1OYW1lMyk7XG4gICAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uMyk7XG5cbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW00LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBjb25zdCBpdGVtTmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lNC50ZXh0Q29udGVudCA9IFwiRnV6enkgVGF1bnRhdW5cIjtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbjQudGV4dENvbnRlbnQgPSAnQ8Oucm9jIFBlYWNoIFZvZGthLCBCb2xzIFBlYWNoIFNjaG5hcHBzLCBhbmQgU2ltcGx5IE9yYW5nZcKuIHRvcHBlZCB3aXRoIFRhbmdlcmluZSwgUHVyZSBDYW5lIFN1Z2FyLCBcIkJ1enogQnV0dG9uIFRpbmdsaW5nXCIgRm9hbSc7XG4gICAgaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbU5hbWU0KTtcbiAgICBpdGVtNC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb240KTtcblxuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTUuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGNvbnN0IGl0ZW1OYW1lNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWU1LnRleHRDb250ZW50ID0gXCJKZWRpIE1pbmQgVHJpY2tcIjtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbjUudGV4dENvbnRlbnQgPSBcIktldGVsIE9uZSBCb3RhbmljYWwgR3JhcGVmcnVpdCBhbmQgUm9zZSBWb2RrYSwgSm9obiBELiBUYXlsb3IncyBWZWx2ZXQgRmFsZXJudW0sIEJvbHMgQmx1ZSBDdXJhw6dhbywgV2hpdGUgR3JhcGUgSnVpY2UsIExpbWUgSnVpY2UsIGFuZCBHcmFwZWZydWl0IEJpdHRlcnNcIjtcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChpdGVtTmFtZTUpO1xuICAgIGl0ZW01LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbjUpO1xuXG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgY29uc3QgaXRlbU5hbWU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZTYudGV4dENvbnRlbnQgPSBcIkpldCBKdWljZVwiO1xuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uNi50ZXh0Q29udGVudCA9IFwiTWFrZXIncyBNYXJrIEJvdXJib24sIEFuY2hvIFJleWVzIENoaWxlIExpcXVldXIsIEHDp2HDrSBMaXF1ZXVyLCBXaGl0ZSBHcmFwZSBKdWljZSwgYW5kIExlbW9uIEp1aWNlXCI7XG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbU5hbWU2KTtcbiAgICBpdGVtNi5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb242KTtcblxuICAgIGNvbnN0IGl0ZW03ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTcuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGNvbnN0IGl0ZW1OYW1lNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaXRlbU5hbWU3LnRleHRDb250ZW50ID0gXCJCYWQgTW90aXZhdG9yIElQQVwiO1xuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uNy50ZXh0Q29udGVudCA9IFwiKEFCViA2LjAlKSBUcm9waWNhbCBJbmRpYSBQYWxlIEFsZSB3aXRoIEdhbGF4eSBhbmQgQ29tZXQgSG9wcyAoU2llcnJhIE5ldmFkYSBCcmV3aW5nIENvLilcIjtcbiAgICBpdGVtNy5hcHBlbmRDaGlsZChpdGVtTmFtZTcpO1xuICAgIGl0ZW03LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbjcpO1xuXG4gICAgY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtOC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgY29uc3QgaXRlbU5hbWU4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtTmFtZTgudGV4dENvbnRlbnQgPSBcIkJhdHV1IEJpdHNcIjtcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb244ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbjgudGV4dENvbnRlbnQgPSBcIkEgbGlnaHQgY3Jpc3AgU25hY2sgTWl4IGZyb20gdGhlIGdhbGF4eVwiO1xuICAgIGl0ZW04LmFwcGVuZENoaWxkKGl0ZW1OYW1lOCk7XG4gICAgaXRlbTguYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uOCk7XG5cbiAgICBjb25zdCBpdGVtOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW05LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBjb25zdCBpdGVtTmFtZTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGl0ZW1OYW1lOS50ZXh0Q29udGVudCA9IFwiWXViIE51YlwiO1xuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uOS50ZXh0Q29udGVudCA9IFwiTWFsaWJ1IFBpbmVhcHBsZSBSdW0sIFNhaWxvciBKZXJyeSBTcGljZWQgUnVtLCBDaXRydXMgSnVpY2VzLCBhbmQgUGFzc2lvbiBGcnVpdCBzZXJ2ZWQgaW4gYSBzb3V2ZW5pciBFbmRvciBtdWdcIjtcbiAgICBpdGVtOS5hcHBlbmRDaGlsZChpdGVtTmFtZTkpO1xuICAgIGl0ZW05LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbjkpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNCk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNSk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtNyk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtOCk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtOSk7XG5cbiAgICByZXR1cm4gbWVudUNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UnKTtcbiAgICBwYWdlLnRleHRDb250ZW50ID0gJyc7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJpbXBvcnQgbG9hZEhvbWVDb250ZW50IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBsb2FkQ29udGFjdENvbnRlbnQgZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IHZlbnVlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdmVudWVOYW1lLnRleHRDb250ZW50ID0gXCJUaGUgQ2FudGluYVwiO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHZlbnVlTmFtZSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsb2FkSG9tZUNvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbG9hZENvbnRhY3RDb250ZW50KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmF2YmFyO1xufVxuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BhZ2UnKTtcblxuICAgIHJldHVybiBwYWdlXG59XG5cbmZ1bmN0aW9uIGxvYWROYXZFbGVtZW50cygpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZFBhZ2UoKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDYW50aW5hKCkge1xuICAgIGxvYWROYXZFbGVtZW50cygpO1xuICAgIGxvYWRIb21lQ29udGVudCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ2FudGluYTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkQ2FudGluYSBmcm9tICcuL25hdmlnYXRpb24uanMnO1xuXG5sb2FkQ2FudGluYSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==