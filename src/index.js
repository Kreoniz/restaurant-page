import "./reset.css";
import "./fonts.css";
import "./style.css";
import "./tabs.css";
import {renderHomepage} from "./homepage";
import {renderMenu} from "./menu";
import {renderContact} from "./contact";
import Favicon from "./assets/italy_favicon.png";

const content = document.querySelector("#content");

const iconLink = document.createElement("link");
iconLink.rel = "icon";
iconLink.href = Favicon;
document.head.appendChild(iconLink);

const tabs = document.createElement("ul");
tabs.classList.add("tabs");

const homepageTab = document.createElement("li");
homepageTab.textContent = "Home";
homepageTab.dataset.content = "homepage";

const menuTab = document.createElement("li");
menuTab.textContent = "Menu";
menuTab.dataset.content = "menu";

const contactTab = document.createElement("li");
contactTab.textContent = "Contact";
contactTab.dataset.content = "contact";

const tabArray = [homepageTab, menuTab, contactTab];
const tabObject = {
    "homepage": renderHomepage,
    "menu": renderMenu,
    "contact": renderContact,
};

tabArray.forEach(tab => {
    tab.classList.add("tab");
    tab.addEventListener("click", () => {
        tabArray.forEach(tab => tab.classList.remove("active-tab"));
        tab.classList.add("active-tab");
        const data = tab.dataset.content;
        document.querySelector("#page").textContent = "";
        tabObject[data]();
    });
});

tabs.appendChild(homepageTab);
tabs.appendChild(menuTab);
tabs.appendChild(contactTab);

content.appendChild(tabs);

const page = document.createElement("div");
page.classList.add("page");
page.setAttribute("id", "page");
content.appendChild(page);

homepageTab.classList.add("active-tab");
renderHomepage();
