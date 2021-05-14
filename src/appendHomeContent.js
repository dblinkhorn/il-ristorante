const home = document.getElementById("home");
home.addEventListener("click", () => appendHomeContent());

let appendHomeContent = () => {
    const content = document.getElementById("content");
    const title = document.createElement("div");
    const subTitle = document.createElement("div");

    content.innerHTML = "";

    title.classList = "title";
    subTitle.classList = "sub-title";

    title.textContent = "Il Ristorante";
    subTitle.textContent = "Portandoti un assaggio di Toscana";

    content.appendChild(title);
    content.appendChild(subTitle);
}

export default appendHomeContent;