"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрли?', '');

const personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};








if (0) {
    console.log('Ok!');
} else{
    console.log("error!");
}

const num = 49;

if(num<49){
    console.log('eror!');
}else if(num>100){
    console.log("much!")
}else{
    console.log("ok2");
}


const hamburger = 3;
const fries = 1;

if ( hamburger === 3 && fries === 1 ) {
    console.log('iam sit');
} else {
    console.log('malo');
}



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let number = 50;



for(let i =1; i < 10; i++){
    if( i ===6 ){
        break;
    }
    console.log(i);
    
}

for (let i=0; i < 3; i++){
    console.log(i);
    for ( let j=0; j < 3; j++){
        console.log(j);
    }
}

let res = '';
const len = 7;

for (let i =0; i < len; i++){
    for (let j=0; j < i; j++){
        res +='*';
    }

    res += '\n';
}

console.log(res);




for (let i=5; i<=10; i++){
    console.log(i);
}


for (let t=20; t>=10; t--){
    if(t<13){
        break;
    }
    console.log(t);
    
}

for (let y=2; y<=10; y++){
    if (y % 2 === 0) {
        console.log(y)
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}


function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i=0; i<arr.length; i++){
        result[i] = arr[i]
    }
    
    // Не трогаем
    console.log(result);
    return result;
}


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i=0; i<data.length; i++){
        if(typeof data[i]==='number'){
            data[i]=data[i]*2;
        }else if(typeof data[i]==='string'){
            data[i]=data[i]+' - done';
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}





function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i=1; i <= data.length; i++){
        result[i-1] = data[data.length - i]
    }

    console.log(result);
    // Не трогаем
    return result;
}


const lines = 16 ;
let result = '';

for ( let i = 0; i <= lines; i++){
    for (let j=0; j < lines-i; j++){
        result += ' ';
    }
    for ( let j=0; j<2*i+1; j++){
        result += "*";
    }
    result += "\n";
}

console.log(result);