/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
	return arr.reduce((accumm) => {
		accumm += 1;
		return accumm;
	}, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named eyeColorTally that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value is the number of characters having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorTally = (arr) => {
	return arr.reduce((accummulator, obj) => {
		accummulator[obj.eye_color]
			? (accummulator[obj.eye_color] += 1)
			: (accummulator[obj.eye_color] = 1);
		return accummulator;
	}, {});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an 
object with a key for each eye color and whose value an array of character names having that 
eye color:

{ blue: 1, yellow: 2, red: 1, brown: 1 }
------------------------------------------------------------------------------------------------ */

export const eyeColorNames = (arr) => {
	return arr.reduce((accummulator, obj) => {
		accummulator[obj.eye_color]
			? accummulator[obj.eye_color].push(obj.name)
			: (accummulator[obj.eye_color] = [obj.name]);
		return accummulator;
	}, {});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

export const countNumberOfChildren = (arr) => {
	return arr.reduce((accummulator, obj) => {
		if (obj.hasOwnProperty('children')) {
			accummulator += Number(obj.children.length);
		}
		return accummulator;
	}, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

export const calculateAverage = (arr) => {
	const accummulator = {
		count: 0,
		sum: 0,
	};
	arr.reduce((accummulator, num) => {
		accummulator.count += 1;
		accummulator.sum += num;
		return accummulator;
	}, accummulator);
	return accummulator.sum / accummulator.count;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
	let isPrime = true;
	if (value === 1) {
		isPrime = false;
	}
	if (value > 1) {
		// looping through 2 to value-1
		for (let i = 2; i < value; i++) {
			if (value % i == 0) {
				isPrime = false;
				break;
			}
		}
	}
	return isPrime;
};

export const countPrimeNumbers = (arr) => {
	return arr.reduce((accummulator, num) => {
		if (isPrime(num)) {
			accummulator += 1;
		}
		return accummulator;
	}, 0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named effortStats that, given the snorlaxData uses reduce to return an object with the 
minimum and maximum effort level in the format:

Hint: The accumulator should begin as { min: 0, max: 0 }

------------------------------------------------------------------------------------------------ */

export const effortStats = (arr) => {
	const accummulator = { min: 0, max: 0 };
	return arr.reduce((accummulator, stat) => {
		if (stat.effort > accummulator.max) {
			accummulator.max = stat.effort;
		}
		if (accummulator.min === 0) {
			accummulator.min = stat.effort;
		} else if (accummulator.min > stat.effort) {
			accummulator.min = stat.effort;
		}
		return accummulator;
	}, accummulator);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

export const extractChildren = (arr) => {
	const regex = /a/gi;
	const accummulator = [];
	return arr
		.filter((character) => {
			return character.name.match(regex);
		})
		.reduce((accummulator, character) => {
			if (character.hasOwnProperty('children')) {
				character.children.forEach((child) => {
					accummulator.push(child);
				});
			}
			return accummulator;
		}, []);
};
