console.log('Reema Ahmed');
/*
// if statement
let day = true;
let night = false;

if(day){}
console.log(`The condition or statement is ${day}`)


let num1 = '20'; //string data
let num2 = 20; // numerical data

if(num1===num2){
console.log(`${num1} and ${num2} are exacty equal to!`)
}
//example
let goodMood = true;
let gotSleep = true;

if (goodMood !== gotSleep){
    console.log(`Today is a good day!`);
}
else{
console.log(`I am moody!`);
}
//example 2
let a = 5, b = '5', equalNum;
if(a===b){
    equalNum = true;
}
else{
    equalNum = false;
}

console.log(`Are the numbers the same? ${equalNum}`)

//example 3
let n1 = 10, n2 = 5;
if (n1===n2){
    console.log(`The numbers are equal`);
}
else if(n1>n2){
    console.log(`number 1 is greater than number 2`)
}
else if(n2>n1){
    console.log(`number 1 is less than number 2`)
}
else{
    console.log(`INVALID ENTRY`)
}

let colors =['red','blue','green','yellow','orange']
 let userPick = parseInt(prompt("Select a color from 1 to 5")) // parseInt ()
 let selectColor = colors[userPick - 1]

if (selectColor === 'red'){
    console.log(`The selected color is red`)
}
else if (selectColor === 'blue'){
    console.log(`The selected color is blue`)
}
else if (selectColor ==='green'){
    console.log('The selected color is green')
}
else if (selectColor ==='yellow'){
    console.log('The selected color is yellow')
}
else if (selectColor ==='orange'){
    console.log('The selected color is orange')
}
else{
    console.log('You selected color number ${userPick} which is not in the list')
}
//EXAMPLE 5
let userInput = prompt(`Enter a number`);
let checkInput = parseInt(userInput);
checkInput = isNaN(checkInput);

if (checkInput){
    console.log(`${userInput} is a string or character`)
}
else{
    console.log(`${userInput} is a number!`)
}
// EXAMPLE 6
let password = prompt(`enter a password: `)
if(password.length>=6){
    console.log(`Password has 6+ characters: `)   
if (password.indexOf(` `)===-1){
console.log(`Great! password = ${password} has no space`)}
else{
    console.log(`Warning! password = ${password} has SPACE!`)
}
}
else{
    console.log(`password has less than 6 characters!`)
}
//EXAMPLE 7
let name = prompt(`Enter a name! `)

if (name){
    console.log(`Welcome to the program ${name} `)
}
else{
    console.log(`You did not enter a name!`)
}
*/
// Activity 6

let number = Number;
let enternumber = prompt(`Please enter a number or string`)

if (enternumber>0){
    console.log(enternumber + `` + ` is a positive number`)
}

else if (enternumber<0){
    console.log(enternumber + `` + ` is a negative number`)
}
else{
    console.log(enternumber + `` + ` is a string`)
}