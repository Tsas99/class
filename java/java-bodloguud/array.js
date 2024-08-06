// bodlogo-1 sum of element

// let sum = 0;
// const numbers = [1,2,3,4];
// for (let i =0; i < = numbers.length-1; i++) {
//     sum = sum+numbers[i];
// }
// console.log(sum);

// bodlogo 2 maximum element

// const numbers = [1,2,3,4];
// let max = numbers[0];
// for (let i = 0; i <=numbers.length - 1; i++) {
//    if (max < numbers[i + 1]) {
//     max = numbers[i + 1];
//    }
// }
//  console.log(max);

// bodlogo-3 reverse arrey

// const numbers = [1,2,3,4];
// const reverse = [];
// for (let i = numbers.length-1; i >= 0; i--){
//     reverse.push(numbers[i]);
// }
// console.log(reverse)

// bodlogo-4 even elements

// const numbers = [1,2,3,4];
// const even = [];
// for (let i =0; i<=numbers.length - 1; i++){
//     if (numbers[i] % 2 === 0){
//         even.push(numbers[i]);
//     }
// }
// console.log(even);

// bodlogo-5 remove duplicates

// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueArray = [];
// for (let i = 0; i <= numbers.length - 1; i++) {
 
//   } if (!uniqueArray.includes(numbers[i])) {
//     uniqueArray.push(numbers[i]);
// }

// console.log(uniqueArray)

// bodlogo 6 find n number index n = 6 

const numbers = [1,2,2,3,4,4,30,4,6,33];
for ( let i = 0; i <=numbers.length-1; i++ ) {
    if (numbers [i] === 6 ) {
        console.log(i);
        break;
    }
}

