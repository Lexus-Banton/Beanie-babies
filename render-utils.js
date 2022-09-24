export function renderAstroSigns(astroSign) {
    const sign = document.createElement('option');
    sign.value = astroSign.name;
    sign.textContent = astroSign.name;
    return sign;
}

export function renderBeanie(beanie) {
    const baby = document.createElement('li');
    const title = document.createElement('h2');
    title.textContent = beanie.title;
    const year = document.createElement('p');
    year.textContent = beanie.releaseYear;
    const astro = document.createElement('p');
    astro.textContent = beanie.astroSign;
    const image = document.createElement('img');
    image.src = beanie.image;

    baby.append(title, year, astro, image);
    return baby;
}
