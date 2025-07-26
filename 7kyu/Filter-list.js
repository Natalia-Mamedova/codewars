// Создайте функцию, которая принимает список неотрицательных целых
// чисел и строк и возвращает новый список с отфильтрованными строками.

let list = [12, 23, 45, '15']

function filter_list(l) {
  return l.filter(item => typeof item === 'string');
}

console.log(filter_list(list))