export function renderAstroSigns(astroSign) {
    const sign = document.createElement('option');
    sign.value = astroSign.name;
    sign.textContent = astroSign.name;
    return sign;
}

export function renderBeanie(beanie) {
    const baby = document.createElement('li');
    const title = document.createElement('h2');
    const year = document.createElement('p');
    const astro = document.createElement('p');
    const image = document.createElement('img');
    image.src = beanie.image;
    baby.append(title, year, astro, image);
    return baby;
}
