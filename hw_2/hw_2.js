// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let array = [5, 'hello', true, {name: 'John'}, ['apple', 'banana'], 10.5, NaN, false, -15, '100'];
console.log(array);

let book1 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Realistic Fiction'
}
console.log(book1)

let book2 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopia'
}
console.log(book2)

let book3 = {
    title: 'Pride and Prejudice',
    pageCount: 279,
    genre:'Novel'
}
console.log(book3)

let adventureBook = {
    title:'The Hunger Games',
    pageCount:374,
    genre:'Adventure',
    authors: [
        {
            name: 'Suzanne Collins',
            age: 59
        },
        {
            name: 'Hansen Su',
            age: 42
        }
    ]
}
console.log(adventureBook)
let dramaBook = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'literary fiction',
    authors: [
        {
            name:'Harper Lee',
            age: 89
        },
        {
            name: 'Truman Capote',
            age: 59
        }
    ]
}
console.log(dramaBook)

let detectiveBook = {
    title:'Ange',
    pageCount: 416,
    genre:' Detective',
    authors:[
        {
            name:'Marion Zimmermann',
            age: 75
        },
        {
            name: ' Vanessa Detiman',
            age: 56
        }
    ]
}
console.log(detectiveBook)

let users = [
    {
        name: "John Doe",
        username: "john_doe",
        password: "password123"
    },
    {
        name: "Alice Smith",
        username: "alice_smith",
        password: "qwerty123"
    },
    {
        name: "Bob Johnson",
        username: "bob_johnson",
        password: "hello123"
    },
    {
        name: "Emily Brown",
        username: "emily_brown",
        password: "letmein456"
    },
    {
        name: "Michael Wilson",
        username: "michael_wilson",
        password: "p@ssw0rd"
    },
    {
        name: "Sophia Taylor",
        username: "sophia_taylor",
        password: "abc123"
    },
    {
        name: "David Martinez",
        username: "david_martinez",
        password: "david123"
    },
    {
        name: "Emma Anderson",
        username: "emma_anderson",
        password: "password1234"
    },
    {
        name: "James Garcia",
        username: "james_garcia",
        password: "pass123"
    },
    {
        name: "Olivia Lopez",
        username: "olivia_lopez",
        password: "olivia456"
    }
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// ---------------------------------------------------------

let x = 36
if (x !== 0) {
    console.log('вірно')
}else {
    console.log('невірно')
}

let time = 58
switch (true) {
    case (time >=0 && time < 15):
        console.log('Перша чверть години');
        break;
    case (time >=15 && time < 30):
        console.log('Друга чверть години');
        break;
    case (time >=30 && time < 45):
        console.log('Третя чверть години');
        break;
    case (time >=45 && time <60):
        console.log('Четверта чверть години');
        break;
    default:
        console.log('Невірне значення часу')
}

let day = 25
if(day >=1 && day <= 10){
    console.log('Перша декада місяця')
}else if  (day >= 11 && day <= 20){
    console.log('Друга декада місяця')
}else if (day >= 21 && day <=31) {
    console.log('Третя декада місяця')
}else {
    console.log('Невірне число')
}
let dailyRoutine = 3
switch (dailyRoutine){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('wrong number')
}

let c = 100;
let y = 10;
if (c < y) {
    console.log('Max number is:', y)
}else if (y < c) {
    console.log('Max number is:', x)
}else {
    console.log('Numbers are equal')
}

let q = ''
q = q || 'default'
console.log(q)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let course1 = coursesAndDurationArray[0];
if (course1.monthDuration > 5) {
    console.log(course1.title + ' - Супер');
} else {
    console.log(course1.title + ' - Не супер');
}

let course2 = coursesAndDurationArray[1];
if (course2.monthDuration > 5) {
    console.log(course2.title + ' - Супер');
} else {
    console.log(course2.title + ' - Не супер');
}

let course3 = coursesAndDurationArray[2];
if (course3.monthDuration > 5) {
    console.log(course1.title + ' - Супер');
} else {
    console.log(course1.title + ' - Не супер');
}

let course4 = coursesAndDurationArray[3];
if (course4.monthDuration > 5) {
    console.log(course2.title + ' - Супер');
} else {
    console.log(course2.title + ' - Не супер');
}

let course5 = coursesAndDurationArray[4];
if (course5.monthDuration > 5) {
    console.log(course1.title + ' - Супер');
} else {
    console.log(course1.title + ' - Не супер');
}

let course6 = coursesAndDurationArray[5];
if (course6.monthDuration > 5) {
    console.log(course2.title + ' - Супер');
} else {
    console.log(course2.title + ' - Не супер');
}
