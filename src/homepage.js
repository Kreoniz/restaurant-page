import Pasta from "./assets/pasta.jpg";
import Rome from "./assets/rome.jpg";
import "./homepage.css";
import {createCard} from "./card";

export function renderHomepage() {
    const homepage = document.querySelector("#page");

    const heading = document.createElement("h1");
    const container = document.createElement("div");
    const imagePasta = new Image();
    const description = document.createElement("p");

    heading.textContent = "La Bella Food";

    imagePasta.src = Pasta;
    imagePasta.classList.add("pasta-image");

    description.textContent = "Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.";
    description.classList.add("description");

    homepage.appendChild(heading);

    container.appendChild(imagePasta);
    container.appendChild(description);
    homepage.appendChild(container);

    const schedule = createSchedule();
    homepage.appendChild(schedule);
    
    const location = createCard("Location", "You can find our restaurants anywhere in Rome!", Rome);
    homepage.appendChild(location);
}

const scheduleObject = {
    "Monday": ["8am", "10pm"],
    "Tuesday": ["8am", "10pm"],
    "Wednesday": ["8am", "10pm"],
    "Thursday": ["8am", "10pm"],
    "Friday": ["8am", "10pm"],
    "Saturday": ["9am", "11pm"],
    "Sunday": ["9am", "11pm"],
};

function createSchedule() {
    const schedule = document.createElement("div");
    const scheduleHeading = document.createElement("h2");

    schedule.classList.add("schedule");
    scheduleHeading.textContent = "Working Hours";
    scheduleHeading.classList.add("schedule-heading");

    schedule.appendChild(scheduleHeading);

    for (let day in scheduleObject) {
        schedule.appendChild(createScheduleItem(day, scheduleObject[day][0], scheduleObject[day][1]));
    }

    return schedule;
}

function createScheduleItem(weekday, openTime, closeTime) {
    const item = document.createElement("p");
    item.textContent = `${weekday}: ${openTime} - ${closeTime}`;

    return item;
}

function createLocation() {
    const card = document.createElement("div");
    card.classList.add("location");

    const content = document.createElement("div");
    content.classList.add("card-info");
    const heading = document.createElement("h2");

    heading.textContent = "Location";
    heading.classList.add("location-heading");

    const text = document.createElement("p");
    text.textContent = "You can find our restaurants anywhere in Rome!";

    const image = new Image();
    image.src = Rome;
    image.classList.add("location-image", "card-image");

    content.appendChild(heading);
    content.appendChild(text);
    card.appendChild(content);

    card.appendChild(image);

    return card;
}
