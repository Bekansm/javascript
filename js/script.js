//task1
const firstName = "Bekzhan";
const lastName="Skakov";
const age=30;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

//task2
const city ="Astana";

console.log("Я родом из города "+city);

//task3
const password="123";
let hasAccess= password!="";

console.log("Password:", password);
console.log("Has Access:", hasAccess);

//task4
const isMember = false;
console.log(isMember.toString());

//task5
let cartItems = 0;
cartItems = cartItems == 0;
console.log(cartItems)

//task6
let averageScore = 89.75695;
averageScore = averageScore.toFixed(1);
console.log(averageScore);

//task7
let greetingMessage = "      Приветствуем вас в мире программирования!        ";
greetingMessage = greetingMessage.trim();
console.log("Без пробелов:",greetingMessage);
greetingMessage = greetingMessage.toUpperCase();
console.log("Uppercase:",greetingMessage);
console.log("Текст в первом слове:",greetingMessage.startsWith("программирования"));