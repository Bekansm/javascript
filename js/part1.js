document.querySelector("title").textContent="Бекжан Скаков";
document.getElementById("header").querySelector("h1").textContent="Изучение JavaScript";
const links = document.querySelectorAll(".menu-link");
for (const link of links) {
    console.log(link.textContent);
}

const features = document.querySelector(".features-list").querySelectorAll("li");
features[1].textContent="Поддержка API";