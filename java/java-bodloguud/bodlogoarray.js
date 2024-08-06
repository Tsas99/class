// bodlogo -1 massiv n niilber olox
// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// let mass = 0;
// for (let i = 0; i < arr.length; i++) {
//   mass = mass + arr[i];
// }
// console.log(mass);

// bodlogo-2 massiviin dundajiig olj butsaa

// const arr = [99,123,544,998];
// let sum = 0;
// let med = 0;
// for( let i = 0; i < arr.length; i++){
//     sum=sum +arr[i];

//     med = sum/2
// }
//  console.log(sum)
//  console.log(med)

//  bodlogo-3 xamgiin ix toog olj butsaa
// const arr = [1,2,234,123,556,123,9,19,12,976]
// let max = arr[0];
// for ( let i = 0; i<=arr.length+1; i++){
//     if (max <arr[i+1]){
//         max = arr[i + 1];
//     }

// }
//  console.log(max)

// bodlogo-4 string -g urvuu butsaa
// const string = "Hello";
// const reverse = [];
// for (let s =string.length -1; s >= 0; s--){
//     reverse.push(string[s]);
// }
//  console.log(reverse)

// bodlogo-5 string n temdegt bvr davxarlaj oroogvi esexiig shalga

// const string = "Hello";
// let unique = true;

// for (let i = 0; i < string.length - 1; i++) {
//   for (let j = 1 + i; j < string.length; j++) {
//     if (string[i] === string[j]) {
//       unique = false;
//       break;
//     }
//   }
// }
// console.log(unique);

// bodlogo -6  ugugdsun 2 massiv n davxtsal olj butsaa

// const mass2 = [99,123,544,998];
// const mass1 =[ 1,2,234,123,556,123,9,19,12,976];
// let double = [];

// for( let i = 0; i <= mass2.length - 1;  i++ ) {
//     for(let j = 0; j < mass1.length; j++) {
//         if(mass2[i] === mass1[j]){
//             console.log(mass1[j]);
//             break;
//         }
//     }

// }

// bodlogo -7 ugugdsun  N toonii undurtei pyramid '*' ashiglan xevle

// let pyramidComplete = (rows) => {
// let array = [];
// let str = " ";
// for ( let i = 1; i<= rows; i++){

//     // Add the white space to the left
//     for (let k = 1; k <=(rows-i); k++){
//         str += " ";
//     }
//     // Add the '*' for each row
//     for (let j = 0; j != (2*i -1); j++){
//         str += "#". repeat (2)
//     }
// }

// }

// const input = 123321;
// let temp = input;
// let pal = 0;

// while (input !== 0) {
//   const last = temp % 10;

//   pal = pal * 10 + last;

//   temp = parseInt(temp / 10);
// }

// console.log(pal === input);

// bodlog -11 ugugdsun too palindrom too esexiig shalga mun bol true bish bol false butsaa

// const input = 123321;

// const str = input.toString ();
// let isPal =true;
// for (let i = 0; i<str.length/2; i++){
//     if (str[i] !== str [str.length -1 -i]){
//         isPal= false
//         break;
//     }
// }
// console.log(isPal);

// bodlogo -8 ugugdsun  N toonii undurtei pyramid '*' ashiglan xevle
// const n = 5;
// const mid = Math.floor ((2 * n - 1) / 2);
// for ( let row = 0; row < n; row++){
//     let line = " ";
//     for (let col=0; col< 2 * n - 1; col++) {
//       if (col >= mid - row && col <= mid + row){
//         line += "*";
//       } else {
//         line += " ";
//       }
//     }
//     console.log(line);
// }
//  bodlogo -9 ugugdsun N toonii factorial g olj butsaa

// let factorial = 1;
// const f = [1,2,3,4,5];
// for (let i = 1; i<=5; i++){
//     factorial=factorial*i
// }
// console.log(factorial);

// bodlogo 10 ugugdsun N too xvrtelx bvx toog tegsh xevle
// const n = 16
// for (let i = 1; i<=n; i++){
//   if (i%2==0){
//     console.log(i+" ")
//   }

// }

// bodlogo =12 ugugdsun N too ankhnii too mun esexiig shalgaad true or false butsaa

// const pn = 111;
// let isPrime = true;

// for (let i = 1; i <= pn; i++) {}

// console.log(isPrime);

// bodlogo -13 ugugdsun N too xvrtelx bvx anxnii toog xevle
// const n = 45;
// let pn = []
// for (let i = 1; i <=45; i++){
//     if (pn % pn === 1){
//    } else (pn % 1 === pn)
// }
// console.log(pn)

// bodlogo -14 ugugdsun N too xvrtelx bvx fibonacchi n daraalliin toog xevle

// const n = 20;

// const fib = [0, 1];

// for (let i = 0; i <= n; i++) {
//   const temp = fib[i] + fib[i + 1];

//   fib.push(temp);
// }

// // console.log(fib);

// bodlogo -15 ugugdsun massiv n davxtssan toonuudiig arilgaad butsaa [ 1,2,2,3,4,3]

// const arr = [1, 2, 2, 3, 4, 3];
// const uniqueArray = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArray.includes(arr[i])) {
//     uniqueArray.push(arr[i]);
//   }
// }
// console.log(uniqueArray);

// bodlogo -16 daraalsan bvxel toonii alga bolson toog ol 

// const z =[3,4,5,6,8,9];
// const n = [];
// for(let i = 0; i <=z.length; i++){
//     if (i+1!==z[i]){

//     }
// }
//     console.log(n);
