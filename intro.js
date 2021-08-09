const readline = require(`readlilne`)

//console.log(`Hello, World`)

const firstName = `Jayme`

let age = 31

// console.log(firstName, age);

let isCool = true;

// console.log(isCool);

let height

// console.log(height);

let x = 4
let y = 10
let z = 10 + 4
let sum = x + y 

//  console.log(x ,y, z, sum);

const lastName = `Coulton`;

const Jayme = `${firstName} ${lastName}`


const reader = readline.creatInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("What is You'r name?," function(answer) {
    console.log(`Hi ${answer}`)
})