import Pasta from "./pasta.jpg";
const content = document.querySelector("#content");

export function renderHome() {

    const heading = document.createElement("h1");
    const imagePasta = new Image();
    const description = document.createElement("description");

    heading.textContent = "La Bella Food";
    imagePasta.src = Pasta;
    description.textContent = "Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.";
    description.classList.add("description");

    content.appendChild(heading);
    content.appendChild(imagePasta);
    content.appendChild(description);
}
