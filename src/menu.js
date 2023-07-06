import Pasta from "./assets/meals/pasta.jpg";
import Bruschetta from "./assets/meals/bruschetta.jpg";
import Margherita from "./assets/meals/margherita.jpg";
import {createCard} from "./card";

export function renderMenu() {
    const menupage = document.querySelector("#page");

    menupage.appendChild(createCard("Bruschetta", "A very tasty bruschetta", Bruschetta));
    menupage.appendChild(createCard("Margherita", "A very tasty pizza", Margherita));
    menupage.appendChild(createCard("Pasta", "A very tasty pasta with cheese", Pasta));
}
