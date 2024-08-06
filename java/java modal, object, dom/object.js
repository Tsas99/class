// const nums =[8,6,7,5,4,3,1];
// const getMissingNumber = (numbers) => {
//    const n = numbers.length - 1;
//    const expectSum = (n * (n - 1)) / 2;
//    const actSum = nums.reduce ((acc, item ) => (acc += item ), 0);
   
// //    console.log (actSum);
// // };

// const nums =[8,6,7,5,4,3,1];

// const expectedLength = nums.length +1;
// let expectSum = 0;
// let actualSum = 0;

// for (let i = 1; i <= expectedLength; i++) {
//     expectSum += i;
// }
// for ( let i = 1; i < nums.length; i++) {
//     actualSum += nums(i);
// }
// console.log (expectSum - actualSum);

// const userInformation = {
//     lastName: "asdasd",
//     firstName : "agjhfu",
//     age:32;
//     hasDrivingLicense: true,
//     car: {
//         color : "red",
//         type: "cedan",
//     }
// }
// ]


// let object = {
//     name: "duck",
//     color: "yellow",
//     size: "big"
// }
// object bodlogo 1 uniin  niilberiig garga

// const items = [{name: 'item 1', price:30 },{name: 'item 2',price:20},{name: 'item 3',price:50}];
// const priceSum = items.reduce((acc, item)=> acc + item.price,0);
// console.log(priceSum);

// object bodlogo 2. buh authoruudiig avaad 1 array hadgalaad garga 

// const books = [
//               {title: 'Book 1', author: 'Author 1'},
//               {title: 'Book 2', author:'Author 2'}, 
//               {title: 'Bookk 3', author : 'Author 3'}
//             ];
// const author = books.map
// 1. Object -s duriin key g ni function parametreer damjuulaxad utgiig avdag bolgox

    // const book = { title: "To Kill a Mockinbird", author: "Harper Lee",year: 1960 };

    // const getValue = (key) => {
    //   return book[key]
    //  };
     
    //  console.log(getValue("title"));


    // ymar jims xeden shirxeg bgaigaar ni xevle 
    // const sales = [
    //   {product: "Apple", quantity: 10 },
    //   {product: "Apple", quantity: 7 },
    //   {product: "Banana", quantity: 5 },
    //   {product: "Banana", quantity: 3 },
    // ];
    
    // const total = sales.reduce((acc, item) =>{
    //   acc.
    // }[])

    // const users1= [ {id;1}]

    // const concat = users1.concat (users2).reduce ((acc,item)=> {
    //   const foundItem = acc.find ((el) => el?.email ===item.email);

    // })
   
    // 1. hun tus bvr n ovog neriig ashiglaad fullname g ni xevle

// const people = [
//   {firstName: "John", lastName: "Doe"},
//   {firstName: "Jane", lastName: "Smith"},
//   {firstName: "Emily", lastName: "Jones"},
// ];
//  const fullnames = people.map (({firstName, lastName}) => `${firstName} ${lastName}`);
//  console.log(fullnames);

// 2. Grade 60 -s ix buyu tentsvv bx ueiin humuusin neriig array d xadgal 

// 6. zoxiol tus bvriig heden jiliin umnu zoxiogdoj bsniig ni HTMLDivElement. hugatsaag ni xaruulsan shine keyless update 
// const books = [
//   {title : "1984", year : 1949},
//   {title : "The Great Gatsby" , year : 1925},
//   {title : "To kill a Mockingbird", year : 1960},
// ];
// const updatedBooks = books.map((books)=> {
//   const updatedBooks = {
//     writtenYear:2024 - books.year,
//     ...books,
//   };
//   return updateBooks;
// });
// console.log(updatedBooks);


// const books = [
//   { title: "1984", year: 1949 },
//   { title: "The Great Gatsby", year: 1925 },
//   { title: "To Kill a Mockingbird", year: 1960 },
// ];

// const updatedBooks = books.map((book) => ({
//   writtenYear: new Date().getFullYear() - book.year,
//   ...book,
// }));
 
   
//   7. duriin id - r ni completed iig update xiixfunction bich
// const tasks = [
//   { id: 1, description:"Do laundry", completed:false },
//   { id: 2, description:"Clean dishes", completed:false },
//   { id: 3, description:"Buy groceries", completed:false }
// ];
// const updateTask = (taskId) => {
//   const foundTask = tasks.find(({id}) => id ===taskId);
//   if (!foundTask) return "Not found";
//   foundTask.completed = true;

//   return tasks;
// };
// console.log(updateTask(2));
   
// BODLOGO -1 Huvirgah  "2020 Toyota Coralla" gedeg shig

// const movie = {
//   title:"Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// }

// const film = `${movie.year} ${movie.director} ${movie.title}`;
// console.log(film);

// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969
// };

// const beat = `${album.releaseYear} ${album.artist} ${album.title}`;
// console.log(beat);

// const album = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop"
// };
//  const tsomog = `${album.releaseYear} ${album.title} ${album.genre} ${album.artist}`;
//  console.log(tsomog);

// BODLOGO -2 Salary 50000 buyu tentsuu ih buyu tentsuu baih ueiin humuusiin neriig arrayd hadgal 

// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 }
// ];
// const names = employees.filter((item) =>item.salary >= 50000).map(({ name}) => name);
// console.log(names);

// Price 1000 aas ihiig  baih ueiin humuusiin neriig arrayd hadgal 

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 }
// ];

// const names = products.filter ((item) => item.price > 1000).map(({name}) => name);
// console.log(names);

// title ni type ni number baival ter objectiig ol
// const books = [
//   { title: 1984, author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];

// const object = books.filter ((item) =>typeof item.title ==="number").map(({title})=>title);
// console.log(object);

// BODLOGO - 3 Price 150g aas ih baigab baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig

// const gadgets = [
//   { name: "Smartphone", price: 699 },
//   { name: "Smartwatch", price: 199 },
//   { name: "Bluetooth Speaker", price: 49 }
// ];
// const getProducts = () => {
//   const matchedProducts = gadgets.filter(({price}) => price >150).map(({name}) =>name);
//   return matchedProducts.length ? matchedProducts: "Not found";
// };
// console.log(getProducts);



// const products = [
//   { name: "Pen", price: 5 },
//   { name: "Eraser", price: 1 },
//   { name: "Notebook", price: 12 },
// ];
// const getProducts = () => {
//   const matchedProducts = products.filter(({ price }) => price > 10).map(({ name }) => name);

//   return matchedProducts.length ? matchedProducts : "Not found";
// };


//     BODLOGO -4 Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig
// const authors = [
//   { firstName: "Mark", lastName: "Twain" },
//   { firstName: "Ernest", lastName: "Hemingway" },
//   { firstName: "Jane", lastName: "Austen" } 
// ];

// const fullnames = authors.map (({firstName, lastName})=> `${firstName} ${lastName}`);
// console.log(fullnames);
 
// const students = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Brown" },
//   { firstName: "Carol", lastName: "Davis" }
// ];
// const fullnames = students.map (({firstName, lastName})=> `${firstName} ${lastName}`);
// console.log(fullnames);

// const musicians = [
//   { firstName: "Ludwig", lastName: "Beethoven" },
//   { firstName: "Wolfgang", lastName: "Mozart" },
//   { firstName: "Johann", lastName: "Bach" }
// ];
// const fullnames = musicians.map (({firstName, lastName})=> `${firstName} ${lastName}`);
// console.log(fullnames);

// BODLOGO -5// Zohiol tus buriig hden jiliin omno zohiogdoj baisniig ni hevle. Hugatsaag ni haruulsan shine keyless update hiine gedeg shig

// const movies = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Dark Knight", year: 2008 }
// ];

//  BODLOGO -6 Duriin id aar ni completed iig update hiih function bich

const events = [
  { id: 1, name: "Conference", attended: true },
  { id: 2, name: "Workshop", attended: false },
  { id: 3, name: "Meetup", attended: false }
];

