import "./contact.css";
import Chef from "./assets/chef.jpg";
import Waiter from "./assets/waiter.jpg";

export function renderContact() {
    const contactpage = document.querySelector("#page");

    const contactpageHeading = document.createElement("h1");
    contactpageHeading.textContent = "Contacts";
    contactpage.appendChild(contactpageHeading);


    contactpage.appendChild(createContact("Chef", "123-456-7890", "masterchef@valid.yes", Chef));
    contactpage.appendChild(createContact("Waiter", "098-765-4321", "awaiting@valid.yes", Waiter));
}

function createContact(name, phone, email, image) {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const contactName = document.createElement("h3");
    contactName.textContent = name;

    const contactPhone = document.createElement("p");
    contactPhone.textContent = phone;

    const contactEmail = document.createElement("a");
    contactEmail.textContent = email;
    contactEmail.classList.add("contact-email");
    contactEmail.href = `mailto: ${email}`;

    const contactImage = new Image();
    contactImage.src = image;

    contactInfo.appendChild(contactName);
    contactInfo.appendChild(contactPhone);
    contactInfo.appendChild(contactEmail);
    contact.appendChild(contactInfo);
    contact.appendChild(contactImage);

    return contact;
}
