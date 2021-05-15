const homeDiv = document.getElementById("home");
const menuDiv = document.getElementById("menu");
const aboutUsDiv = document.getElementById("about-us");
const contactDiv = document.getElementById("contact");
contactDiv.addEventListener("click", () => contact());

let contact = () => {
    const content = document.getElementById("content");

    content.innerHTML = "";
    content.innerHTML = `
    <div id="content-container" class="content-container">
    <p class="our-story">Visit Il Ristorante<p><hr>
    <br><p class="story">
    2021 Hudson Center Way<br>
    New York, NY 10001
    <br><br>
    <p class="story"><strong>Email:</strong> contact@ilristorante.com</p><br>
    <p class="story"><strong>Reservations:</strong> (555) 555-5555</p><br>
    <p class="story"><strong>Hours:</strong><br>
    Sunday, 4PM - 9PM<br>
    Monday, CLOSED<br>
    Tuesday, 4PM - 9PM<br>
    Wednesday, 4PM - 9PM<br>
    Thursday, 4PM - 9PM<br>
    Friday, 5PM - 11PM<br>
    Saturday, 5PM - 10PM</p>
    </div>`;

    homeDiv.classList.remove("clicked");
    menuDiv.classList.remove("clicked");
    aboutUsDiv.classList.remove("clicked");
    contactDiv.classList.add("clicked");
}

export default contact;