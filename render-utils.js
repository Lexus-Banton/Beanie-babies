export function renderAstroSigns(astroSign) {
    const sign = document.createElement('option');
    sign.value = astroSign.name;
    sign.textContent = astroSign.name;
    return sign;
}
