// 1) створити функцію яка приймає масив та виводить його
//  arrayfunc() {
//
// let newarray = [];
//     console.log(newarray);
//
// }
//
// arrayfunc();
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function arrayfunc() {
//
// let newarray = [];
// for (let i = 0; i < 10; i++) {
//
//   newarray.push(i);
//     }
//     console.log(newarray);
//
// }
//
// arrayfunc();
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minnumber = (a,b,c) => {
//     let number =[a,b,c] ;
//     let min = a;
//     for (const aElement of number) {
//         if(min > aElement) min = aElement;
//
//     }
//
//     console.log('min: ',min)
// }
//     minnumber(31,14,64);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxnumber = (a,b,c) => {
//     let number =[a,b,c] ;
//     let max = a;
//     for (const aElement of number) {
//         if(max < aElement) max = aElement;
//
//     }
//
// console.log('max: ',max)
// }
// maxnumber(3,14,64);

// // 5) створити функцію яка повертає найбільше число з масиву
// const maxarr = (array) => {
// let max = array[0];
//
//    for (const arrayElement of array) {
//     if (arrayElement > max) max = arrayElement;
//  }
//  return max;
//
// }
// const myFunk =maxarr([5,58,96,8,55,62])
//  console.log(myFunk);
// -------------------------------------------------
// -------------------------------------------------
// 6) створити функцію яка повертає найменьше число з масиву
//     let minArray = (array) => {
//     let min = array[0];
//         for (const minElement of array) {
//             if (minElement < min) min = minElement;
//         }return min;
//     }
//     const MyMinFunk = minArray([55,58,96,8,55,62]);
//     console.log(MyMinFunk);
// // 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     let sumElemArray = (array) => {
//     let sum = 0;
//         for (const Element of array) {
//             sum += Element;
//         }return sum;
//     }
//     let calcultarr = sumElemArray([55,58,96,8,55,62,-330]);
//     console.log(calcultarr)
//

// // 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let serarray = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }return sum / array.length
//
// }
// let newserarray = serarray([1,5,6,10,15])
// console.log(newserarray);
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// -----------------------------так для прикладу собі----------------------------------------------
//   let aray = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// for (const arayKey of aray) {
//     for (const arayKeyKey in arayKey) {
//         console.log(arayKeyKey)
//     }
// }

// ------------------------------------------------------------------------------
// let objectin = (array) => {
// let key =[];
//     for (const arayKey of array) {
//      for (const arayKeyKey in arayKey) {
//                 key.push(arayKeyKey)
//             }
//         }return console.log(key)
// }
// const newarray = objectin([{name: 'Dima', age: 13}, {model: 'Camry'}])


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// ---------------------------------для себе---------------------------------------------------
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// for (const arrayElement of array) {
//         for (const arrayElementElement in arrayElement) {
//             console.log(arrayElement[arrayElementElement])
//}
// }
// ------------------------------------------------------------------------------------

// let valuesObject = (array) => {
//     let key = [];
//     for (const arrayElement of array) {
//         for (const arrayElementElement in arrayElement) {
//                 key.push(arrayElement[arrayElementElement])
//             }
//         }return key
// }
// let newarray = valuesObject([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(newarray)

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// const sumarray = (array1, array2) => {
//     let sum = [];
//     for (let i = 0; i < array1.length; i++) {
//         sum.push(array1[i] + array2[i])
//     }return sum
// }
// let newtask = sumarray([1,2,3,4],[2,3,4,5])
// console.log(newtask)
// ============================================================================================
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//  походу так  умова незрозуміла
// function numbers() {
//     let min = arguments[0]; //псевдо масив,і непрацює у стрілочних ф-ях ()=>{},Он похож на массив, но не обладает ни одним из его свойств, кроме length .
//     for (const key in arguments) {
//         if (min < arguments[key])min = arguments[key];
//     }
//
//     console.log(min)
// }
// numbers(1,6,8,5);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let valuesObject = (array,flag) => {
//     let key = [];
//     if (flag){
//         for (const arrayElement of array) {
//             for (const arrayElementElement in arrayElement) {
//                 key.push(arrayElement[arrayElementElement])
//             }
//         }
//         return console.log(key)
//
// }else
//     {
//
//         for (const arayKey of array) {
//             for (const arayKeyKey in arayKey) {
//                 key.push(arayKeyKey)
//             }
//         }
//         return console.log(key)
//     }
// }
// valuesObject(array,false)
// valuesObject(array,true)
//255 - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//256 - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let funkzero =(array) => {
//     let numberArray =[];
//     let zeroArray =[];
//     for (const element of array){
//         if (element !== 0){
//             numberArray.push(element);
//         }else zeroArray.push(element)
//
//     }
//         let newarray = numberArray.concat(zeroArray)
//     return console.log(newarray)
// }
// funkzero([1,0,6,0,3])
// funkzero([0,1,2,3,4])
// funkzero([0,0,1,0])
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

// let n1 = '     Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
//
//
//  let checkString = (str) => {
//      let newstr = [];
//      let string = str.split(' ')
//      for (const stringElement of string) {
//          if (stringElement !== "")
//              newstr.push(stringElement);
//      }
//      let joinstr = newstr.join(' ');
//      return console.log(joinstr)
//  }
//
// checkString(n1);
// checkString(n2);
// checkString(n3);

// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
//         }
//     }
