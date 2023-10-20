// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// вариант 1
// let cube = function (number) {
//    return number ** 3;
// }
// вариант 2
// cube = (number) => number ** 3;
// console.log(`2^3 + 3^3 = ${cube(2) + cube(3)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести
// что значение задано неверно. Создать фукнцию, которая высчитывает 13 % от
// данного числа и выводит в консоль текст "Размер заработной платы за вычетом
// налогов равен значение"

// let wage = parseInt(prompt('Введите нужную сумму'));

// let netProfit = function (wage) {
//    if (isNaN(wage)) {
//       return alert('Значение задано неверно');
//    } else {
//       return alert(`Размер заработной платы за вычетом налогов равен ${wage * 0.87}`)
//    }
// }
// netProfit(wage);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let number1 = parseInt(prompt('Введите первое число'));
// let number2 = parseInt(prompt('Введите второе число'));
// let number3 = parseInt(prompt('Введите третье число'));

// let maxNumber = function (a, b, c) {
//    let max = a;
//    if (max < b) {
//       max = b;
//    }
//    if (max < c) {
//       max = c
//    }
//    return max;
// }
// alert(`Максимальное значение = ${maxNumber(number1, number2, number3)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

let number1 = parseInt(prompt('Введите первое число'));
let number2 = parseInt(prompt('Введите второе число'));
let add = function (a, b) {
   return a + b;
}
// или
// let add = (a, b) => a + b;

let diff = function (a, b) {
   if (a === b) {
      return 0;
   } else if (b > a) {
      return b - a;
   } else {
      return a - b;
   }
}
// или
// let diff = (a, b) => {
//    return (a === b) ? 0 : ((a > b) ? a - b : b - a);
// }

let multi = function (a, b) {
   return a * b;
}
// или
// let add = (a, b) => a * b;

let div = function (a, b) {
   return a / b;
}
// или
// let add = (a, b) => a / b;

alert(`Сумма чисел равна ${add(number1, number2)}
Разность чисел равна ${diff(number1, number2)}
Произведение чисел равно ${multi(number1, number2)}
Частное чисел равно ${div(number1, number2)}`);

