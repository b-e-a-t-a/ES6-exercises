/// TESTOWE NA POTRZEBY MODUŁU

const sayHello = () => alert('Hello world!');
sayHello();


////DESTRUKTURYZACJA

//ex.1
function getCoords () {
	return {
		x: 2,
		y: 5
	};
}


const coords = getCoords();
const x = coords.x;
const y = coords.y;

console.log(coords);

//ex.1 po destrukturyzacji
function getCoords () {
	return {
		x: 2,
		y: 5
	};
}
const {x,y} = getCoords();


console.log({x,y});
console.log(getCoords());

//ex.2
const names = ['Jan', 'Zosia', 'Zbyszek', 'Kacper', 'Tomek', 'Magda'];
const [first, second, , fourth] = names;

console.log(names);
console.log([first, second, fourth]);


//domyślne wartości paramtrów
var name = ''

function sayHello(name) {
  name = name || 'World';
  console.log('Hello ' + name);
};
sayHello(name);


//w ES6
function sayHello(name = 'World') {
  console.log('Hello ' + name);
};
sayHello();


//lub
const sayHello = (name = 'World') => console.log(`Hello ${name}!`);
sayHello();

//Rest params
function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
logAllArguments(2,1,3);

const logAllArguments = (...args) => args.forEach(arg => console.log(arg));
logAllArguments(1,2,6);


//const a = prompt('Value a equals to:');
//const b = prompt('Value b equals to:');
//const a = 2;

//const multiply = (a, b = 1) => {return a * b};
//multiply();

//console.log(multiply(a,b));


//zad.2 - złe

const a = prompt('Value a equals to:');
const b = prompt('Value b equals to:');
const m = multiply(a,b);

function multiply (a,b) {
  return a*b;
};

console.log(multiply(a,b));
console.log(a*b);
console.log(m);



//zad.3 
 //w JS:
function average() {
  let sum = 0;
    for (let i=0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum/arguments.length);
};
average(2,2,2);


//zad.5
const array = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = array;

console.log(array);
console.log(firstname, lastname); //w postaci stringa
console.log([firstname, lastname]); //w postaci tablicy



