import "./reset.css";
import "./fonts.css";
import "./style.css";
import "./tabs.css";
import {renderHomepage} from "./homepage";
import {renderMenu} from "./menu";
import {renderContact} from "./contact";

const content = document.querySelector("#content");

const tabs = document.createElement("ul");
tabs.classList.add("tabs");

const homepageTab = document.createElement("li");
homepageTab.textContent = "Home";
homepageTab.classList.add("tab");
homepageTab.dataset.content = "homepage";

const menuTab = document.createElement("li");
menuTab.textContent = "Menu";
menuTab.classList.add("tab");
menuTab.dataset.content = "menu";

const contactTab = document.createElement("li");
contactTab.textContent = "Contact";
contactTab.classList.add("tab");
contactTab.dataset.content = "contact";

const tabArray = [homepageTab, menuTab, contactTab];
const tabObject = {
    "homepage": renderHomepage,
    "menu": renderMenu,
    "contact": renderContact,
};


tabArray.forEach(tab => {
    tab.addEventListener("click", e => {
        tabArray.forEach(tab => tab.classList.remove("active-tab"));
        tab.classList.add("active-tab");
        const data = tab.dataset.content;
        document.querySelector(".page").textContent = "";
        tabObject[data]();
    });
});

tabs.appendChild(homepageTab);
tabs.appendChild(menuTab);
tabs.appendChild(contactTab);

content.appendChild(tabs);

homepageTab.classList.add("active-tab");
renderHomepage();
