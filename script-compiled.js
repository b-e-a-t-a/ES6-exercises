'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//zad.1
var x = 'Hello',
    y = 'World';
function sayHello() {
	console.log(x + ' ' + y);
};
sayHello();

//zad.2
var multiply = function multiply() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return console.log('' + a * b);
};
multiply(4);

//zad.3
var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return sum / args.length;
};
console.log(average(1, 3, 6, 6));

//zad.4
var average1 = function average1() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return sum / args.length;
};

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var args = grades.slice(0);
//average(...args);
//console.log(args);

console.log(average1.apply(undefined, _toConsumableArray(args)));

//zad.5
var array = [1, 4, 'Iwona', false, 'Nowak'];

var firstname = array[2],
    lastname = array[4];

//console.log(array);

console.log(firstname, lastname); //w postaci string
console.log([firstname, lastname]); //w postaci tablicy
