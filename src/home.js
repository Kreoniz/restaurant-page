import Pasta from "./assets/pasta.jpg";
import "./home.css";

const content = document.querySelector("#content");

export function renderHome() {
    const heading = document.createElement("h1");
    heading.textContent = "La Bella Food";
    content.appendChild(heading);

    const imagePasta = new Image();
    imagePasta.src = Pasta;
    imagePasta.classList.add("pasta-image");
    const container = document.createElement("div");
    container.appendChild(imagePasta);
    content.appendChild(container);

    const description = document.createElement("div");
    description.textContent = "Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.";
    description.classList.add("description");
    content.appendChild(description);
}
