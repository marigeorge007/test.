// main.js:47 Мария Ряполова
// main.js:54 1. Что такое итерируемое свойство и объект? Какие объекты по умолчанию итерируемые?
// main.js:55 2. Что такое генератор, написать пример генератора?
// main.js:56 =================

// 1. Итерируемое свойство и объект это что мы можем перебрать в цикле. По умолчанию итерируемые объекты: массив, строки, объкт Map и Set

// 2. Генератор это функция которая, возвращает промежуточный результат и продолжает работу с места, на котором остановилась.

function* GenarateSomeThing() {
  yield 1;
  yield 2;
}
