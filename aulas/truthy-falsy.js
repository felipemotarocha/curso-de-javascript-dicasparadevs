const x = '';
// FALSE

const y = 0;
// FALSE

const a = null;
const b = undefined;
// FALSE

const list = [];
// TRUE
const object = {};
// TRUE

if (!list) {
    console.log(list)
}