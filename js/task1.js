// Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.

alert("task 1 Напиши функцію, яка рахує кількість властивостей в об'єкті");

const countProps = function(obj){
  return `в цьому об'єкті:  ${Object.keys(obj).length}, властивості/тей `; 
};

alert(`object = { } ${countProps({})}`);

alert(`object = {
                  name: 'Mango', 
                  age: 2
                } 
  ${countProps({ name: 'Mango', age: 2 })}`);

alert(`object = {
                  mail: 'poly@mail.com', 
                  isOnline: true, 
                  score: 500 
                }
  ${countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })}`);

alert(`object = {
                  mail: 'rolling@gmail.com', 
                  isOnline: true,
                  friends: 34,
                  players: 12, 
                  score: 500,
                  level: 2
                }
  ${countProps({ mail: 'rolling@gmail.com', isOnline: true,  friends: 34,  players: 12, score: 500, level: 2})}`);