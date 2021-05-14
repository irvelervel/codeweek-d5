// DATA TYPES
// number
// 5
// 5.5
// 100

// string
// 'this is a string'
// `this is a string`

// boolean
// true
// false
// 5 > 3
// 3 > 5

let striveSchool = 'a cool school'
// this notation is called camelCase

let firstNumber = 10
let secondNumber = firstNumber + 5
// secondNumber is now 15
console.log(secondNumber)

let myFirstArray = ['stefano', 'taylor', 'viorel']

console.log(myFirstArray.length) // this will be a number, the total count of the elements

for(let counter = 0; counter < myFirstArray.length; counter = counter + 1){
    // the code here will be executed 5 times
    console.log(myFirstArray[counter])
}

// an object is another data structure
// it's useful for holding MULTIPLE VALUES into a single variable

let myFirstObject = {
    name: 'taylor',
    surname: 'casasola',
    age: 34,
    country: 'Italy'
}

console.log(myFirstObject.name) // first way
console.log(myFirstObject['surname']) // second way

let myFirstFunction = function(n1, n2){
    let total = n1 + n2
    console.log(total)
}

let greetUser = function() {
    if(myFirstObject.name === 'stefano'){
        console.log('hello stefano')
    } else {
        console.log("I don't know you!")
    }
}