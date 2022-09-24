/* Imports */
import { getBeanies, getAstroSigns } from './fetch-utils.js';
import { renderAstroSigns, renderBeanie } from './render-utils.js';
//import { renderAstroSignsOption, renderBeanie } from './render-utils.js';

/* Get DOM Elements */
//const notificationDisplay = document.getElementById('notification-display');
const beanieList = document.getElementById('beanie-list');
const astroSignSelect = document.getElementById('astro-sign-select');

/* State */
let error = null;
let count = 0;
let astroSigns = [];
let beanies = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getAstroSigns();
    error = response.error;
    astroSigns = response.data;
    //on load populate dropdown with astrosigns
    displayAstroSigns();
});

async function findBeanies(name) {
    const response = await getBeanies(name);

    error = response.error;
    count = response.count;
    beanies = response.data;
    displayBeanies();
}
findBeanies();
/* Display Functions */
function displayAstroSigns() {
    for (const astroSign of astroSigns) {
        //render each astro sign's dom element
        const astroEl = renderAstroSigns(astroSign);
        astroSignSelect.append(astroEl);
    }
}
function displayBeanies() {
    for (const baby of beanies) {
        const babyEl = renderBeanie(baby);
        beanieList.append(babyEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
