// function 1

// function evaluateString(string) {
// 	if (string) {
// 		return 'The string has a value!';
// 	} else {
// 		return 'What string?';
// 	}
// }

// let first = evaluateString('');
// let second = evaluateString('This one!');
// console.log(first);
// console.log(second);

// function 2

// function dayOfWeek(date) {
// 	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// 	return days[date.getDay()];
// }

// let now = new Date();
// console.log('Happy ' + dayOfWeek(now) + '!');

// // function 3

// function calculateSalesTax(price, tax) {
// 	console.log(`price is ${price}`);
// 	console.log(`tax is ${tax}`);
// 	return price * tax;
// }

// let result = calculateSalesTax(10, 0.15);
// console.log(`Sales tax is $${result}`);

// function calculateSalesTax2(prices, tax) {
// 	let result = [];
// 	for (let i = 0; i < prices.length; i++) {
// 		result.push(prices[i] * tax);
// 	}
// 	return result;
// }

// console.log(calculateSalesTax2([1, 5, 10], 0.15));

// exercises

function dayOfWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

function greetByDay(now) {
  let day = dayOfWeek(now);
  console.log(`Happy ${day}!`);
}

let now = new Date();
greetByDay(now); // Happy Wednesday!

function calculateSalesTax(prices, tax) {
  let total = [];

  for (let i = 0; i < prices.length; i++) {
  	let sum = (prices[i] * tax) + prices[i];
  	total.push(sum);
  }
  return total;
}

console.log(calculateSalesTax([1, 5, 10], 0.15)); // [ 1.15, 5.75, 11.5 ]




