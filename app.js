// 1.
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   function talabalar(s) {
//     let talaba = [];
//     for (const i of students) {
//       talaba.push({name: i.name, age: i.age});
//     }
//     return talaba;
//   }
//   console.log(talabalar(students));

// 2.
// const students = [
//   {name: 'Ahmadjon', age: 18, ball: 90, },
//   {name: 'Ahrorbek', age: 18, ball: 85, },
//   {name: 'Abdurahmon', age: 18, ball: 95, },
//   {name: 'Azizbek', age: 18, ball: 80, },
// ];
// function talabalar() {
//   let maxBall = 0;
//   for (const score of students) {
//     if( score.ball > maxBall){
//       maxBall = score.ball;
//     }
//   }
//   return maxBall;
// }
// console.log(talabalar(students));

// 3.
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Andrew', age: 23, score: 88, status: 'active' }
// ];
// function BoshHarfiKAtta() {
//   let A = [];
//   for (const i of students) {
//     if( i.name[0].toUpperCase() == 'A'){
//       A.push(i);
//     }
//   }
//   return A;
// }
// console.log(BoshHarfiKAtta(students));

// 4.
// const students = [
//   { name: 'Ahmadjon', age: 18, ball: 95},
//   { name: 'Ozodbek', age: 21, ball: 92},
//   { name: 'Ahrorbek', age: 18, ball: 92},
//   { name: 'Shuhratbek', age: 21, ball: 85},
//   { name: 'Elyorbek', age: 15, ball: 75},
//   { name: 'Omadbek', age: 17, ball: 80},
//   { name: 'Aziz', age: 21, ball: 92},
//   { name: 'Sardor', age: 18, ball: 92},
//   { name: 'Samandar', age: 21, ball: 85},
//   { name: 'Abdurahmon', age: 24, ball: 95},
// ];
// function ortachaBall() {
//   let a = 0;
//   let b = 0;
//   for (const c of students) {
//     a += c.ball;
//     b++;
//   }
//   if (b === 0) {
//     return 0;
//   }
//   return a / b;
// }
// console.log(ortachaBall(students));

// 5.
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'John', age: 22, score: 92, status: 'inactive' },
//   { name: 'Bob', age: 23, score: 88, status: 'active' }
// ];
// function topuvchi(){
//   let res = students.find( students => students.name === 'John');
//   return res;
// }
// console.log(topuvchi(students));

// 6.
// function engKichikYosh(students) {
//     let yosh = 0;
//     let kichik = 0;
  
//     for (const i of students) {
//       const kichik = i.age;
//       if (kichik < yosh) {
//         kichik = kichik;
//         yosh = i;
//       }
//     }
//     return kichik;
//   }
// console.log(engKichikYosh());

// 7.
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const b = { name: 'Alice', age: 21, score: 90, status: 'active' };

// function yangilash(a, b) {
//     let c = a.findIndex(a => a.name === a.name);
//     if (c !== -1) {
//       a[c] = b;
//       return true;
//     } else {
//       return false;
//     }
// }
// console.log(yangilash(students));

// 8.
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// function obeyktlar(students) {
//     const statuslar = [];
//     for (const a of students) {
//       statuslar.push(a.status);
//     }
//     return statuslar;
// }
// console.log(obeyktlar(students));

// 9.
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];
// let res = students1.concat(students2);
// console.log(res);

// 10.
// function replaceAll(arg) {
//     return arg.replace('a', '@');
// }
// let res = 'Javascript';
// let res1 = replaceAll(res)
// console.log(replaceAll(res1));

// 11.
// function BoshJoyLAr(tr) {
//     let res = "    hello world    ";
//     return res.trim();
// }
// console.log(BoshJoyLAr());

// 12.
// function ozgartirish() {
//     let res = ["Hello", "world", "from", "JavaScript"];
//     return res.join(",");
// }
// console.log(ozgartirish());

// 13.
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function deletedName() {
//     for (const a of students) {
//         if(a.name === 'Bob'){
        
//         }
//     }
// }
// delete students.name
// console.log(deletedName());

// 14.
// function ajratish() {
//     let res = "Hello world from JavaScript";
//     return res.split(" ");
// }
// console.log(ajratish());

// 15.
// function index() {
//     let res = "Hello, world!";
//     let res1 = res.substring(0, 5);
//     return res1;
// }
// console.log(index());

// 16.
// function kichikKatta() {
//     let res = "Hello, WORLD!";
//     let res1 = res.toLowerCase();
//     let res2 = res1.toUpperCase();
//     return res2;
// }
// console.log(kichikKatta());

// 17.
// function includess() {
//     let res = "Hello, world!";
//     let res1 = res.includes("world");
//     return res1;
// }
// console.log(includess());

// 18.
// function statsWith() {
//     let res = "Hello, world!";
//     let res1 = res.startsWith("Hello");
//     return res1;
// }
// console.log(statsWith());

// 19.
// function endWith() {
//     let res = "Hello, world!";
//     let res1 = res.endsWith("world");
//     return res1;
// }
// console.log(endWith());

// 20.
// function charat() {
//     let res = "Hello, world!";
//     let res2 = res.charAt(7);
//     return res2;
// }
// console.log(charat());

// 21.
// let fruits = ['olma', 'banan', 'apelsin', 'olma', 'banan']
// let res  = [];
// fruits.forEach(function (value, indexForEach) {
//     let isExist = fruits.find(function (el, indexFind) {
//         return el == value && indexFind != indexForEach
//     })
//     if (!isExist){
//         res.push(value);
//     }
//     console.log(isExist);
// })
// console.log(res);


// 22.
