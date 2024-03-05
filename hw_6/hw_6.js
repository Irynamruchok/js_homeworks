// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world'
console.log(str1.length)

let str2 = 'lorem ipsum'
console.log(str2.length)

let str3 = 'javascript is cool'
console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD'
console.log(str4.toLowerCase())

let str5 = 'LOREM IPSUM'
console.log(str5.toLowerCase())

let str6 =  'JAVASCRIPT IS COOL'
console.log(str6.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні'
let arr = string.split(' ')
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbersArray = [10,8,-7,55,987,-1011,0,1050,0]
let stringsArray = numbersArray.map(number => '' + number)
console.log(stringsArray)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        nums.sort((a, b) => a - b)
    } else if ( direction === 'descending') {
        nums.sort((a,b) => b - a)
    }
    return nums
}

console.log(sortNums(nums.slice(),'ascending'))
console.log(sortNums(nums.slice(), 'descending'))

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration)
console.log(coursesAndDurationArray)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCourses =  coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filteredCourses)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mappedArray = coursesAndDurationArray.map((course,index) => {
    return {id: index + 1, title:course.title, monthDuration: course.monthDuration }
})
console.log(mappedArray)

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let deck = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' }
];
// - знайти піковий туз
let aceOfSpade= deck.find((element) => element.cardSuit === 'spade' && element.value === 'ace')
console.log(aceOfSpade)

// - всі шістки

let six = deck.filter((element) => element.value === '6')
console.log(six)

// - всі червоні карти

let redCards = deck.filter((element) => element.color === 'red')
console.log(redCards)

// - всі буби

let diamondCards = deck.filter((item) => item.cardSuit === 'diamond')
console.log(diamondCards)
// - всі трефи від 9 та більше
let clubs = deck.filter((item) => item.cardSuit === 'clubs' && item.value >= 9)
console.log(clubs)

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
 let cards = deck.reduce((accumulator, item) =>{
      if (item.cardSuit === "spade") {
          accumulator.spades.push(item)
      } else if (item.cardSuit === 'diamond') {
          accumulator.diamonds.push(item)
      }else if(item.cardSuit === 'heart') {
          accumulator.hearts.push(item)
      }else if (item.cardSuit === 'clubs') {
          accumulator.clubs.push(item)
      }else {
          console.log('The suit of the card is incorrect')
      }
      return accumulator
}, {spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(cards)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter((course) => course.modules.includes('sass'))
console.log(sass)

// --написати пошук всіх об'єктів, в який в modules є docker

let docker = coursesArray.filter((course) => course.modules.includes('docker'))
console.log(docker)