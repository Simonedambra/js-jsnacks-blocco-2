'use strict'


const prima = [0, 2, 21, 12, 3, 2, 12, 32, 1];

const seconda = [];

while (prima.length != seconda.length) {
    if (seconda.length < prima.length) {
        seconda.push(10)
    }
    else if (seconda.length > prima.length) { prima.push(10) }

}
console.log(prima)
console.log(seconda)