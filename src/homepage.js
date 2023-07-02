import Pasta from "./assets/pasta.jpg";
import "./homepage.css";

const content = document.querySelector("#content");

export function renderHomepage() {
    const heading = document.createElement("h1");
    const container = document.createElement("div");
    const imagePasta = new Image();
    const descriptionText = document.createElement("span");
    const description = document.createElement("div");

    heading.textContent = "La Bella Food";

    imagePasta.src = Pasta;
    imagePasta.classList.add("pasta-image");

    descriptionText.textContent = "Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.";
    description.classList.add("description");

    description.appendChild(descriptionText);
    content.appendChild(heading);

    container.appendChild(imagePasta);
    container.appendChild(description);
    content.appendChild(container);

    const schedule = createSchedule();
    content.appendChild(schedule);
}

const scheduleObject = {
    "Monday": ["8am", "10pm"],
    "Tuesday": ["8am", "10pm"],
    "Wednesday": ["8am", "10pm"],
    "Thursday": ["8am", "10pm"],
    "Friday": ["8am", "10pm"],
    "Saturday": ["8am", "10pm"],
    "Sunday": ["8am", "10pm"],
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
    const item = document.createElement("div");
    item.textContent = `${weekday}: ${openTime} - ${closeTime}`;

    return item;
}
