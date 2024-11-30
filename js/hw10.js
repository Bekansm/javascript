const numbers = [52, 31, 9, 85, 31, 45];

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];

//Task 1
console.log(`Сумма чисел: ${sumNumbers(numbers)}`);

//Task 2
for (const book of books) {
    Info(book) ; 
}

//Task 3
console.log(`Cреднее количество страниц: + ${calculateAveragePages(books)}`);

//Task 4
repeatString("hello", 5);

//Task 5
console.log(`Среднее значние: ${calculateAverage([10, 20, 30, 40, 50, 60])}`);


//Task 6 (Непонятно что нужно возвращать. В условиях нужно вернуть количество, а в примере возвращается массив)
console.log(`Количество четных: ${countEvenNumbers([1, 2, 3, 4, 5, 6])}`);

console.log(`Массив из четных: ${returnEvenNumbers([1, 2, 3, 4, 5, 6])}`);


function sumNumbers(numbers){
    let sum = 0;

    let i = 0;
    while (i<numbers.length){
        sum += numbers[i];
        i++;
    }
    return sum;
}

function Info(book){
    console.log(`Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.numberOfPages}, Жанр: ${book.genre}`);
    console.log(`Награды:`);
    for (const award of book.awards) {
      console.log(`- ${award}`);
    }
    console.log("-----------------------");
}


function calculateAveragePages(books) {
let result = 0;
    
for (const book of books) {
  result += book.numberOfPages;
}
return result/books.length;
 }

 function repeatString(str, n){
console.log(str.repeat(n));
 }

 function calculateAverage(input){
    let sum = 0; 
for (const element of input) {
    sum+= element;
}
return sum/input.length;
 }


 function countEvenNumbers(input){
    let result = 0;
    for (const element of input) {
        if (element%2===0) {
result++;
        }
    }
return result;
 }

 function returnEvenNumbers(input){
    const result = [];
    for (const element of input) {
        if (element%2===0) {
result.push(element);
        }
    }
    return result;
 }