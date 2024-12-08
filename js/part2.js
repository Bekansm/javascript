 //1
const newUl = document.createElement("ul");
newUl.append(createLi("Введение в DOM"));
newUl.append(createLi("Создание элементов"));
newUl.append(createLi("Изменение атрибутов"));
document.getElementById("content").append(newUl);

function createLi(text) {
    const newLi = document.createElement("li");
    newLi.textContent = text;
    return newLi;
    }
//2
const headerElement = document.querySelector("header");
const headerLink = document.createElement("a");
headerLink.textContent="Мой профиль в Linkedin/Instagram/другая любая соц.сеть";
headerLink.href="https://www.instagram.com/jasonstatham";
headerLink.target="_blank";

headerElement.append(headerLink);

//3
const dynamicSection = document.createElement("section");
dynamicSection.className = "dynamic";

const sectionTitle = document.createElement("h2");
sectionTitle.textContent="Обучение JavaScript";
dynamicSection.append(sectionTitle);

const sectionDesc = document.createElement("p");
sectionDesc.textContent="Динамическое создание элементов позволяет улучшить интерфейс пользователя";
dynamicSection.append(sectionDesc);

document.getElementById("main").prepend(dynamicSection);

//4
const parent  = document.getElementById("content");
parent.removeChild(parent.querySelector("p"));

//5
document.querySelector("footer").remove();


