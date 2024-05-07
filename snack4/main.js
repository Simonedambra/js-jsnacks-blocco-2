'use strict'


let prima = [0, 2, 21, 12, 3, 2, 12, 32, 1];

let seconda = [12, 3, 12, 12, 22, 123, 211, 23321, 23, 21, 122, 1, 21];

while (prima.length != seconda.length) {
    if (seconda.length < prima.length) {
        seconda.push(10)
    }
    else if (seconda.length > prima.length) { prima.push(10) }

}
console.log(prima)
console.log(seconda)