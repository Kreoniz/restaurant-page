import {createCard} from "./card";
import "./menu.css";
import Pasta from "./assets/meals/pasta.jpg";
import Bruschetta from "./assets/meals/bruschetta.jpg";
import Carbonara from "./assets/meals/carbonara.jpg";
import Margherita from "./assets/meals/margherita.jpg";
import Risotto from "./assets/meals/risotto.jpg";
import Espresso from "./assets/meals/espresso.jpg";
import HerbalTea from "./assets/meals/herbal_tea.jpg";

const menu = {
    "Beverages": {
        "Espresso": {
            "description": "Unbelievable beverage",
            "image": Espresso,
        },
        "Herbal Tea": {
            "description": "A surprise from the chef",
            "image": HerbalTea,
        },
    },
    "Dishes": {
        "Bruschetta": {
            "description": "Outstanding bruschettas",
            "image": Bruschetta,
        },
        "Margherita": {
            "description": "A very tasty pizza",
            "image": Margherita,
        },
        "Carbonara": {
            "description": "Unprecedented carbonara",
            "image": Carbonara,
        },
        "Pasta": {
            "description": "Extremely delicious pasta",
            "image": Pasta,
        },
        "Risotto": {
            "description": "Stellar risotto",
            "image": Risotto,
        },
    },
}


export function renderMenu() {
    const menupage = document.querySelector("#page");
    menupage.classList.add("menu-page");
    const menupageHeading = document.createElement("h1");
    menupageHeading.textContent = "Menu";
    menupage.appendChild(menupageHeading);

    for (const type in menu) {
        const section = document.createElement("div");
        section.classList.add("section");

        const sectionHeading = document.createElement("h2");
        sectionHeading.textContent = type;
        sectionHeading.classList.add("section-heading");
        section.appendChild(sectionHeading);

        for (const meal in menu[type]) {
            const mealInfo = menu[type][meal];
            const mealElement = createCard(meal, mealInfo["description"], mealInfo["image"]);
            mealElement.classList.add("meal");
            section.appendChild(mealElement);
        }
        menupage.appendChild(section);
    }
}
