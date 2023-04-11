// Итерационный подсчет n-го числа Фибоначчи

// От нуля
function fiboIterat(n) {
  let first = 0;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  if (n === 1) {
    return first;
  } else {
    return second;
  }
}
console.log(fiboIterat(7))

// От единицы
function fiboIteratNew(n) {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  if (n === 1) {
    return first;
  } else {
    return second;
  }
}
console.log(fiboIteratNew(7))


// Рекурсивное вычисление n-го числа Фибоначчи

// От нуля
function fiboRec(n) {
  if (n <= 1) {
    return 1 - n;
  } else {
    return fiboRec(n - 1) + fiboRec(n - 2);
  }
}
console.log(fiboRec(7))

// От единицы
function fiboRecNew(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fiboRecNew(n - 1) + fiboRecNew(n - 2);
  }
}
console.log(fiboRecNew(7))