'use strict';

// Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
// Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
// filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
// filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

function filter(arr, func) {
  const newArr = [];
  arr.forEach((elem) => {
    if (func(elem)) {
      newArr.push(elem);
    }
  });
  return newArr;
}

function inBetween(a, b) {
  return function (elem) {
    return ((elem >= a) && (elem <= b));
  };
}

function inArray(arr) {
  return function (elem) {
    if (arr.indexOf(elem) === -1) {
      return false;
    }
    return true;
  };
}
