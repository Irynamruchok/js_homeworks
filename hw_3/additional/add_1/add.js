// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

let numberArray = [1,2,3,4,5]
let stringArray = ['apple','banana','cat','dog','hello']
let mixedArray = ['yellow', 15, -100, false, true]
    console.log(numberArray)
    console.log(stringArray)
    console.log(mixedArray)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = []
arr[0] = 'apple'
arr[1] = 2
arr[2] = true
console.log(arr)
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let numberArr = [2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
let index = 0
while (index < numberArr.length) {
    const numberArrElement = numberArr[index];
    console.log(numberArrElement)
    index++
}
//     2. перебрати його циклом for
for (const number of numberArr) {
    console.log(number)
}
for (let i = 0; i < numberArr.length; i++) {
    const numberArrElement = numberArr[i];
    console.log(numberArrElement)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let indx = 0
while (indx < numberArr.length) {
    const numberArrElement = numberArr[indx]
     if (indx % 2 !== 0){
        console.log(numberArrElement, 'непарний індекс')
    }
    indx++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numberArr.length; i++) {
    const numberArrElement = numberArr[i];
    if (i %2 !==0) {
        console.log(numberArrElement, 'непарний індекс')
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let j = 0
while(j < numberArr.length) {
    const  numberArrElement = numberArr[j]
     if (numberArrElement % 2 === 0) {
        console.log(numberArrElement,'парні числа')
    }
    j++
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const number of numberArr) {
    if (number % 2 === 0) {
        console.log(number, 'парні числа')
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < numberArr.length; i++) {
//     if (numberArr[i] % 3 === 0) {
//         numberArr[i] = 'okten';
//     }
// }
// console.log(numberArr);

// 8. вивести масив в зворотньому порядку.
for (let i = numberArr.length - 1; i >= 0; i--) {
    const numberArrElement = numberArr[i];
    console.log(numberArrElement)
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while
let x = numberArr.length-1
while (x >= 0) {
    const numberArrElement = numberArr[x]
    console.log(numberArrElement, 'while')
    x--
}
//     2. перебрати його циклом for
for (let i = x.length - 1; i >= 0; i--) {
    const numberElement = x[i];
    console.log(numberElement, 'for')
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let y = numberArr.length - 1
while (y>=0) {
    const numberArrElement = numberArr[y]
    if (y % 2 !==0) {
        console.log(numberArrElement, 'непарний індекс')
    }
    y--
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = numberArr.length - 1; i >= 0; i--) {
    const numberElement = numberArr[i];
    if (i % 2 !== 0) {
        console.log(numberElement, 'непарний індекс')
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let a = numberArr.length - 1
while (a >=0) {
    const numberArrElement = numberArr[a]
    if (numberArrElement % 2 === 0){
        console.log(numberArrElement, 'парні числа')
    }
    a--
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = numberArr.length - 1; i >= 0; i--) {
    const numberElement = numberArr[i];
    if (numberElement % 2 === 0) {
        console.log(numberElement, 'парні числа')
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = numberArr.length - 1; i >= 0; i--) {
    if (numberArr[i] % 3 === 0) {
        numberArr[i] = 'okten'
    }
}
console.log(numberArr)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    console.log(number)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let animalArray = ['Dog', 'Cat', 'Elephant', 'Tiger', 'Lion', 'Giraffe', 'Zebra', 'Monkey', 'Bear', 'Rabbit'];
for (let i = 0; i < animalArray.length; i++) {
    const animalArrayElement = animalArray[i];
    console.log(animalArrayElement)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixedArr = [10, 'hello', true, {name: 'John', age: 30}, [1, 2, 3], null, undefined, NaN, function() { console.log('Function') }, new Date()];
let b = 0
while (b < mixedArr.length) {
    const arrItem = mixedArr[b]
    console.log(arrItem)
    b++
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixArray = [10, 'hello', true, 25, 'world', false, 7, 'goodbye', true, 42];
for (const mixArrayElement of mixArray) {
    if (typeof mixArrayElement === "boolean") {
        console.log(mixArrayElement,'boolean')
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const mixArrayElement of mixArray) {
    if (typeof mixArrayElement === "number") {
        console.log(mixArrayElement,'number')
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const mixArrayElement of mixArray) {
    if (typeof mixArrayElement === 'string') {
        console.log(mixArrayElement,'string')
    }
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array = []
array[0] = 56
array[1] = 'hello'
array[2] = true
array[3] = 3.14
array[4] = -7
array[5] = 'name'
array[6] = false
array[7] = 'string'
array[8] = 10
array[9] = -100
for (const arrayElement of array) {
    console.log(arrayElement)
}
// - С10творити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(`Поточний номер кроку: ${i+1}`);
    document.write(`Поточний номер кроку: ${i+1} <br>` )
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(`Поточний номер кроку: ${i+1}`)
    document.write(`Поточний номер кроку: ${i+1} <br>` )
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(`Поточний номер кроку: ${i+1}`)
    document.write(`Поточний номер: ${i+1} <br>` )
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100 ; i++) {
   if ((i + 1) % 2 ===0 ) {
       console.log(`Парний номер кроку: ${i+1}`)
       document.write(`Парний номер кроку: ${i+1} <br>` )
   }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
   if ((i + 1) % 2 !==0) {
        console.log(`Непарний номер кроку: ${i+1}`)
        document.write(`Непарний номер кроку: ${i+1} <br>` )
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    { title: "The Great Gatsby", pages: 218, authors: ["F. Scott Fitzgerald"], genres: ["Fiction", "Classic"] },
    { title: "To Kill a Mockingbird", pages: 324, authors: ["Harper Lee"], genres: ["Fiction", "Classic"] },
    { title: "1984", pages: 328, authors: ["George Orwell"], genres: ["Fiction", "Dystopian"] },
    { title: "Pride and Prejudice", pages: 279, authors: ["Jane Austen"], genres: ["Fiction", "Romance", "Classic"] },
    { title: "The Catcher in the Rye", pages: 277, authors: ["J.D. Salinger"], genres: ["Fiction", "Coming-of-Age"] },
    { title: "Brave New World", pages: 311, authors: ["Aldous Huxley"], genres: ["Fiction", "Dystopian"] },
    { title: "Lord of the Flies", pages: 224, authors: ["William Golding"], genres: ["Fiction", "Allegory"] },
    { title: "The Hobbit", pages: 310, authors: ["J.R.R. Tolkien"], genres: ["Fantasy", "Adventure"] },
    { title: "Animal Farm", pages: 112, authors: ["George Orwell"], genres: ["Fiction", "Satire"] },
    { title: "The Alchemist", pages: 197, authors: ["Paulo Coelho"], genres: ["Fiction", "Philosophical"] },
    {title: 'The Silent Patient', pages: 336, authors: ['Alex Michaelides', 'Someone Else'], genres: ['Psychological thriller', 'Mystery', 'Suspense']}
];

// -знайти наібльшу книжку.
let maxPages = 0
let bookWithMaxPages;
for (const book of books) {
   if (book.pages > maxPages) {
       maxPages = book.pages;
       bookWithMaxPages = book
   }
}
console.log('Книга з найбільшою кількістю сторінок:', bookWithMaxPages)

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenres = 0
let bookWithMaxGenres = []
for (const book of books) {
    if (book.genres.length > maxGenres) {
        maxGenres = book.genres.length;
        bookWithMaxGenres = [book]
    }else if(book.genres.length === maxGenres) {
        bookWithMaxGenres.push(book)
    }
}
console.log(`Книга з найбільшою кількістю жанрів:`, bookWithMaxGenres)

// - знайти книжку/ки з найдовшою назвою
let maxLength = 0;
let longestTitle = '';
for (const book of books) {
    if (book.title.length > maxLength) {
        maxLength = book.title.length;
        longestTitle = book
    }
}
console.log( 'Книга з найдовшою назвою:', longestTitle, maxLength, 'символи')

// - знайти книжку/ки які писали 2 автори
let twoAuthorsBooks = [];
for (const book of books) {
  if (book.authors.length === 2) {
      twoAuthorsBooks.push(book)
  }
}
console.log('Книги з двома авторами:', twoAuthorsBooks)

// - знайти книжку/ки які писав 1 автор
let oneAuthorBooks = [];
for (const book of books) {
  if (book.authors.length === 1) {
      oneAuthorBooks.push(book)
  }
}
console.log('Книги з одним автором:', oneAuthorBooks)