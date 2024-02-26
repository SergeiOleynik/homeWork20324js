// Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
// форматі `"ім'я":"кількість задач"`.


alert(`task 2: функція, яка повертає ім'я найпродуктивнішого співробітника, який виконав найбільшу кількість завдань`);

const findBestEmployee = function (employees) {
  let mostValue = Object.values(employees),
    mostKey = Object.keys(employees),
    mostNumber = mostValue[0],
    countMostKey = 0;

  for (let i = 0; i < Object.keys(employees).length; i++) {
    if (mostNumber <= mostValue[i]) {
      mostNumber = mostValue[i];
      countMostKey = i;
    }
  }
  return `найпродуктивніший співробітник:  
          ${mostKey[countMostKey]}, у якого кількість виконаних завдань: ${mostNumber} `;
};

alert(`object={
                ann: 29, 
                david: 35, 
                helen: 1, 
                lorence: 99
              } 
  ${findBestEmployee({ann: 29, david: 35, helen:1, lorence: 99})}`);
alert(`object={
                poly: 12, 
                mango: 17, 
                ajax: 4
              } 
  ${findBestEmployee({poly: 12, mango: 17, ajax: 4})}`);
alert(`object={
                lux: 147, 
                david: 21, 
                kiwi: 19, 
                chelsy: 38
              } 
  ${findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38})}`);
alert(`object={
                david: 215, 
                poly: 120, 
                ajax: 409, 
                ann: 291, 
                kiwi: 23,
                helen: 18,
                lorence: 92
              } 
  ${findBestEmployee({david: 215, poly: 120, ajax: 409, ann: 291, kiwi: 23, helen: 18, lorence: 92})}`);
alert(`object={
                david: 123, 
                poly: 120, 
                ajax: 49, 
                ann: 24, 
                kiwi: 23,
                helen: 18,
                lorence: 92
              } 
  ${findBestEmployee({david: 123, poly: 120, ajax: 49, ann: 24, kiwi: 23, helen: 18, lorence: 92})}`);       




