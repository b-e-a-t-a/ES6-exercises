
//zad.1
const x = 'Hello',
      y = 'World';
function sayHello() {
  console.log(`${x} ${y}`);
};
sayHello();


//zad.2
const multiply = (a = 1, b = 1) => console.log(`${a*b}`);
multiply(4);


//zad.3
const average = (...args) => {
	let sum=0;
	args.forEach(arg => {
		sum += arg;
	});
	return sum/args.length;
};
console.log(average(1,3,6,6));



//zad.4
const average1 = (...args) => {
	let sum=0;
	args.forEach(arg => {
		sum += arg;
	});
	return sum/args.length;
};

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const  [...args] = grades;
//average(...args);
//console.log(args);
console.log(average1(...args));


//zad.5
const array = [1, 4, 'Iwona', false, 'Nowak'];

const [ , , firstname, , lastname] = array;

//console.log(array);
console.log(firstname, lastname); //w postaci string
console.log([firstname, lastname]); //w postaci tablicy