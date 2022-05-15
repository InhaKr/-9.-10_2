"use strict";


// ДЗ 9. #10_2
// В объекте data существует метод addRecord,
// который аргументами получает любой набор объектов.
// Метод addRecord добавляет все свойства переданных
// объектов в data.
let data = {
  p: 600,
  str: 'hello',
  y: -50, 
  addRecord: function () {

    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
      data = Object.assign(this,arguments[i]);
    }

  }
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
console.log(data)

console.log(data.x) //50
console.log(data.y) // 20
console.log(data.z) // 30
console.log(data.p) // 600
console.log(data.str) // 'hello'



