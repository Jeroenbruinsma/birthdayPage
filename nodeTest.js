// // console.log("Node Test")
// // //document.getElementById(1) //does't work
// // //console.log("Hello", "rein")
// // //console.log("Hello", "kelley") //code duplication

// // function sayHello (name, aThingHeLoves, number){
// //     if(number >= 5){
// //         return "number to high"
// //     }
// //     console.log("Good morning", name)
// //     console.log("I know you love:" , aThingHeLoves)
// //     return "It worked"   
// // }
// // const resultOfFN = sayHello("Rein", "Beer", 3)
// // console.log("result of function", resultOfFN)


// function add (numberOne, numberTwo){
//     //console.log("n1:", numberOne, "n2:", numberTwo)
//     return numberOne + numberTwo
// }
// function minus (numberOne, numberTwo){
//     //console.log("n1:", numberOne, "n2:", numberTwo)
//     return  numberOne - numberTwo
// }


// // const addedNumbers = add(3,700)
// // console.log("Addednumbers", addedNumbers)

// // const minusNumbers = minus(600,443)
// // console.log("minusNumbers", minusNumbers)
// let scopingtest = 333
// console.log("scopingtest at start", scopingtest)


// function calculate (numberOne, numberTwo, FNtoCalculate){
//     //console.log("n1:", numberOne, "n2:", numberTwo)
//     let scopingtest = 555
//     console.log("scopingtest in function calulate", scopingtest)
//     let outcome = FNtoCalculate(numberOne, numberTwo)
//     return outcome
// }
// const magic = calculate(10,33, add)
// console.log("magic:", magic);

// const moreMagic = calculate(10,33, minus)
// console.log("MoreMagic:", moreMagic)

// console.log("scopingtest at end", scopingtest)


const names = ["Rein", "Kelley", "Jeroen"]
console.log("Names", names);
names.push("David")
console.log("Names again", names);
names.pop()
names.pop()
names.pop()
console.log("Names empty", names);

function myFunc (data) {
    return data[0]
}
const myFunc2 = (data) => {
    return data[0]
}
const myFunc3 = (data) => {
    return data[0]
}




