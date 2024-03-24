// 1-masala

// function removeFirstOccurrences(str, value) {
//     return str.replace(value, '');
// }
// let str = prompt("So'z kiriting");
// let value = prompt("Olib tashlamoqchi bo'lgan so'z");

// console.log((removeFirstOccurrences(str,value)));

// 2-masala

// function unbracketTag(str) {
//     let res = str.replace("<", "")
//     return res.replace(">","")
// }
// let str = prompt("So'z kiriting");
// console.log(unbracketTag(str));

// 3-masala

// function isPrime(n) { 
//     if (n <= 1) { 
//         return false;
//     } 
//     for (let i = 2; i <= Math.sqrt(n); i++) { 
//         console.log(i);
//         console.log(Math.sqrt(n));
//         if (n % i === 0) { 
//             return false; 
//         } 
//     } return true;
// }
// let n = +prompt("Son kiriting :")
// console.log(isPrime(n));

// 4

// function group(array, keySelector, valueSelector) { 
//     let result = {}; 
//     for (let i = 0; i < array.length; i++) { 
//         let item = array[i];
//         console.log(item);
//         let key = keySelector(item);
//         console.log(key);
//         let value = valueSelector(item); 
//         console.log(value);
//         if (result[key]) { 
//             result[key].push(value); 
//         } 
//         else { result[key] = [value]; 
//         } 
//     } 
//     return result;
// }

// let data = [ 
//     { country: 'Belarus', city: 'Brest' }, 
//     { country: 'Russia', city: 'Omsk' }, 
//     { country: 'Russia', city: 'Samara' }, 
//     { country: 'Belarus', city: 'Grodno' }, 
//     { country: 'Belarus', city: 'Minsk' }, 
//     { country: 'Poland', city: 'Lodz' }
// ];

// let result = group(data, item => item.country.toLowerCase(), item => item.city);

// console.log(result);

// 5

// function getSumBetweenNumbers(n1, n2) {
//     let count = 0
//     for (let i = n1; i <= n2; i++) {
//         count+=i;
//     }
//     return count
// }
// let n1 = +prompt("1-sonni kiriting");
// let n2 = +prompt("2-sonni kiriting");

// console.log(getSumBetweenNumbers(n1, n2));

// 6 

// function getElementsOneTime(arr) {
//     let result = [];
//     arr.forEach((e, ind) => {
//       if (arr.indexOf(e) === arr.lastIndexOf(e)) {
//         result.push(e);
//       }
//     });
//     return result;
//   }

// let arr = [1, 5, 6, 1, 5, 7, 2];

// console.log(getElementsOneTime(arr));

// 7 

// function numberDelete(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) { // yani element indeksi topilmasa, topilsa yangi arreyga qo'shmedi
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }
  
//   let arr = [1, 2, 2, 3, 4, 5, 2, 3];
//   console.log(numberDelete(arr)); 

// 8

// function removeElements(arr, k, m) {
//     if (k > m && m > arr.length) {
//         return "xato kiritdingiz";
//     }
    
//     let newArr = arr.splice(k, m - k + 1);
//     return {
//     soni: arr.length,
//     elementlari: arr
//     };
//     }
  
// let arr = [1, 2, 3, 4, 5, 6, 7];
  
// console.log(removeElements(arr, 2, 4));

// 9

// function readOrNoread(books){
//     let newArr = books.forEach((element) => {
//         if(element.alreadyRead == true){
//             console.log(`${element.author}ning "${element.title}" kitobi o'qilgan`) 
//         }
//         else {
//            console.log(`${element.author}ning "${element.title}" kitobi o'qilmagan`);
//         }
//     });
//     return newArr
// }

// let books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyRead: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
//   ]
//   console.log(readOrNoread(books));

// 10

// function totalBalance(products){
//     let totalBalance = 0
//     products.forEach((element) => {
//         let total = element.price*element.quantity;
//         let balance = total - (total *(element.discount/100))
//         totalBalance+=balance
//         // console.log(totalBalance);
//     });
//     return totalBalance
// }

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
// console.log(totalBalance(products));