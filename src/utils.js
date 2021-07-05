'use strict';

/**
 * Перетасовка массива по алгоритму
 * Фишера-Йетаса.
 *
 * Функция возвращает новый массив
 *
 * @param {array} array
 * @return {array}
 */
const shuffle = (array) => {
  const resultArray = array.slice();
  for (let i = resultArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [resultArray[randomNumber], resultArray[i]] = [resultArray[i], resultArray[randomNumber]];
  }

  return resultArray;
};

/**
 * Возвращает случайное число в диапазоне
 * `min` и `max`.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
*/
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Проверяет, является ли переданный параметр массивом, если является - возвращает его без изменений,
 * в противном случае оборачивает значение в массив из одного элемента
 *
 * @param {Any} value
 * @return {Array}
 */
const ensureArray = (value) => Array.isArray(value) ? value : [value];

module.exports = {
  ensureArray,
  getRandomInt,
  shuffle,
};
