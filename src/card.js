export function createCard(title, text, image) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const cardHeading = document.createElement("h3");
    cardHeading.textContent = title;
    cardHeading.classList.add("card-heading");

    const cardText = document.createElement("p");
    cardText.textContent = text;
    cardText.classList.add("card-description");

    const cardImage = new Image();
    cardImage.src = image;
    cardImage.classList.add("card-image");

    cardInfo.appendChild(cardHeading);
    cardInfo.appendChild(cardText);
    card.appendChild(cardInfo);
    card.appendChild(cardImage);

    return card;
}
