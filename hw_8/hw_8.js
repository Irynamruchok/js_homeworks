// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id,name,surname,email,phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let users = [
     new User(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
     new User(2, 'Alice', 'Smith', 'alice.smith@example.com', '+1987654321'),
     new User(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+1654321987'),
     new User(4, 'Emily', 'Williams', 'emily.williams@example.com', '+1876543210'),
     new User(5, 'David', 'Brown', 'david.brown@example.com', '+1765432109'),
     new User(6, 'Sarah', 'Jones', 'sarah.jones@example.com', '+1543210987'),
     new User(7, 'Robert', 'Garcia', 'robert.garcia@example.com', '+1321098765'),
     new User(8, 'Jessica', 'Martinez', 'jessica.martinez@example.com', '+1209876543'),
     new User(9, 'William', 'Young', 'william.young@example.com', '+1987654321'),
     new User(10, 'Megan', 'Scott', 'megan.scott@example.com', '+1876543210')
]
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let eveniDs = users.filter((user) => user.id % 2 === 0)
console.log(eveniDs)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedArr = users.sort((a,b) => a.id - b.id)
console.log(sortedArr)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let clients = [
     new Client(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890', ['Product1', 'Product2', 'Product3']),
     new Client(2, 'Alice', 'Smith', 'alice.smith@example.com', '+1987654321', ['Product4', 'Product5']),
     new Client(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+1654321987', ['Product6', 'Product7']),
     new Client(4, 'Emily', 'Williams', 'emily.williams@example.com', '+1876543210', ['Product8', 'Product9']),
     new Client(5, 'David', 'Brown', 'david.brown@example.com', '+1765432109', ['Product10', 'Product11']),
     new Client(6, 'Sarah', 'Jones', 'sarah.jones@example.com', '+1543210987', ['Product12', 'Product13']),
     new Client(7, 'Robert', 'Garcia', 'robert.garcia@example.com', '+1321098765', ['Product14', 'Product15']),
     new Client(8, 'Jessica', 'Martinez', 'jessica.martinez@example.com', '+1209876543', ['Product16', 'Product17','Product16', 'Product17']),
     new Client(9, 'William', 'Young', 'william.young@example.com', '+1987654321', ['Product18', 'Product19']),
     new Client(10, 'Megan', 'Scott', 'megan.scott@example.com', '+1876543210', ['Product20', 'Product21'])
]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClientsArr = clients.sort((a,b) => a.order.length - b.order.length)
console.log(sortedClientsArr)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model,manufacturer,yearOfManufacture,maximumSpeed,engineDisplacement) {
    this.model = model
    this.manufacturer = manufacturer
    this.yearOfManufacture = yearOfManufacture
    this.maximumSpeed = maximumSpeed
    this.engineDisplacement = engineDisplacement
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    }
    this.info = function () {
        console.log(`Модель - ${this.model}; Виробник - ${this.manufacturer}; Рік випуску - ${this.yearOfManufacture}; Максимальна швидкість - ${this.maximumSpeed}; Ємність двигуна - ${this.engineDisplacement}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let driver = {
    name: 'John',
    age: 30,
    licenseNumber: 'AB12345'
};
let myCar =new Car('Lanos','Ukraine', 1998, 300,5.0)
myCar.drive()

myCar.info()

myCar.increaseMaxSpeed(50)
console.log(myCar)

myCar.changeYear(2005)
console.log(myCar)

myCar.addDriver(driver)
console.log(myCar)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(model,manufacturer,yearOfManufacture,maximumSpeed,engineDisplacement) {
        this.model = model
        this.manufacturer = manufacturer
        this.yearOfManufacture = yearOfManufacture
        this.maximumSpeed = maximumSpeed
        this.engineDisplacement = engineDisplacement
    }
    drive () {
        console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    }
    info () {
        console.log(`Модель - ${this.model}; Виробник - ${this.manufacturer}; Рік випуску - ${this.yearOfManufacture}; Максимальна швидкість - ${this.maximumSpeed}; Ємність двигуна - ${this.engineDisplacement}`)
    }
    increaseMaxSpeed  (newSpeed) {
        this.maximumSpeed += newSpeed
    }
    changeYear (newValue) {
        this.yearOfManufacture = newValue
    }
    addDriver (driver) {
        this.driver = driver
    }
}
let myCar1 = new Car1('Citroen','France', 2009,155,1.1)
myCar1.drive()
myCar1.info()

myCar1.increaseMaxSpeed(50)
console.log(myCar1)

myCar1.changeYear(2017)
console.log(myCar1)

myCar1.addDriver(driver)
console.log(myCar1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella (name,age,shoeSize) {
    this.name = name
    this.age = age
    this.shoeSize = shoeSize
}
let cinderellas = [
    new Cinderella('Cindy', 20, 7),
    new Cinderella('Ella', 22, 6),
    new Cinderella('Lily', 25, 8),
    new Cinderella('Grace', 18, 6.5),
    new Cinderella('Sophie', 21, 7),
    new Cinderella('Emma', 23, 8),
    new Cinderella('Olivia', 19, 7.5),
    new Cinderella('Ava', 24, 6.5),
    new Cinderella('Isabella', 20, 8),
    new Cinderella('Mia', 22, 7)
]
 class Prince  {
    constructor(name,age,shoeSize) {
        this.name = name
        this.age = age
        this.shoeSize = shoeSize
    }
}
let prince = new Prince('Charles',22,6)
for (const cinderella of cinderellas) {
    if (cinderella.shoeSize === prince.shoeSize) {
        console.log(`${cinderella.name} є Попелюшкою та одружиться з ${prince.name}`)
    }
}

let princeCinderella = cinderellas.find((cinderella) => cinderella.shoeSize === prince.shoeSize )
console.log(princeCinderella)