drink();

student();

movies();

shop();

function drink(){
    const userInput = prompt("Какое время суток?. Введите утро, день или вечер?");
    if (typeof userInput !== 'string' || userInput.trim() === '') {
        alert("Ошибка: введена пустая строка или некорректные данные!");
        drink();
    }  else {

        if (userInput.toLowerCase() == 'утро') {
            alert("Выпейте кофе");
        } else if (userInput.toLowerCase() == 'день') {
            alert("Выпейте чай");
        } else if (userInput.toLowerCase() == 'вечер') {
            alert("Выпейте горячий шоколад");
        } else {
            alert("Введите один из предложенных вариантов");
            drink();
        }
    
    }
} 



function student(){
    const student = {
        name : "",
        age : "",
        subject : "",
        grade : ""
    }
    student.name = prompt("Введите имя")
    console.log("Имя :", student.name);  
    student.age = +prompt("Введите возраст")
    console.log("Возраст :", student.age);  
    student.subject = prompt("Введите предмет")
    console.log("Предмет :", student.subject);  
    student.grade = +prompt("Введите оценку")
    console.log("Оценка :", student.grade);  
    
    console.log("Увеличение возраста на 5");
    student.age+=5;
    console.log("Новый возраст", student.age);  

}

function movies(){
    const movies = [
        { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
        { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
        { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
        { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
        { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
    ];

    console.log(movies[1].director);
    console.log(movies[3].genre);
}

function shop(){


    const bucket = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"]

    //новый элемент в начало
    bucket.unshift("кола")
    console.log(bucket)
    //удалить последний элемент
    bucket.pop()
    console.log(bucket)
    //добавить через splice
    bucket.splice(2,1,"калбаса", "кетчуп")
    console.log(bucket)
}