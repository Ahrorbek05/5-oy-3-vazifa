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

