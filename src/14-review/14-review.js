/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named toTitleCase that takes in an array of strings and returns an array of strings with the first character in upper case and the rest as is.

For example, ['apple', 'banana', 'MacGyver'] returns ['Apple', 'Banana', 'MacGyver'].
------------------------------------------------------------------------------------------------ */

export const toTitleCase = (arr) => {
	return arr.map((word) => {
		return word[0].toUpperCase() + word.substring(1);
	});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named biggerThanLuke that, given the Star Wars data, below, returns the names of the characters whose mass is greater than Luke's.

The names should be combined into a single string with each character name separated by a dash.

For example, "Lando Calrisian - Boba Fett - Princess Amidala".
------------------------------------------------------------------------------------------------ */

export const biggerThanLuke = (arr) => {
	const minMass = arr
		.filter((person) => {
			return person.name === 'Luke Skywalker';
		})
		.map((person) => {
			return person.mass;
		});
	return arr
		.filter((person) => {
			return Number(person.mass) > Number(minMass);
		})
		.map((person) => {
			return person.name;
		})
		.join(' - ');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named sortBy that takes in an array of objects, each of which has a particular property, and sorts those objects by that property, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];

This data could be sorted by name or price.
------------------------------------------------------------------------------------------------ */

export const sortBy = (property, arr) => {
	return arr.sort((a, b) => {
		return a[property] > b[property];
	});
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function that determines if a given URL is secure, beginning with https://

Guard against malformed URLs, such as: https:missing-slashes.bad

For example:
http://www.insecure.com returns false because the URL is not secure
https://secure.com returns true because the URL is secure
https:/missingslash.org returns false because the URL is malformed
------------------------------------------------------------------------------------------------ */

export const isSecure = (url) => {
	const regex = /(https:)+(\/\/)/;
	return regex.test(url);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named detectTicTacToeWin that accepts a two-dimensional array of strings. Each string is guaranteed to be either "X", "O" or an empty string. Your function should check to see if any row, column, or either diagonal direction has three matching "X" or "O" symbols (non-empty strings), three-in-a-line.

This function should return either true or false to indicate if someone won the game.

Instead of trying to write crazy for loops to automate checking the rows, columns and diagonals consider writing one helper function that accepts three coordinate pairs and checks the values of the array at those locations. For instance helpCheck(row1, col1, row2, col2, row3, col3).

Your function does not need to work for boards of any size other than 3x3.

Here is a sample board:
[
  ['X', '', 'O'],
  ['X', 'O', ''],
  ['X', 'O', 'X'],
];
------------------------------------------------------------------------------------------------ */
function colMaker(board, colNum) {
	return board.reduce((acc, row) => {
		acc.push(row[colNum]);
		return acc;
	}, []);
}

function checkWin(row0, row1, row2, col0, col1, col2, diag1, diag2) {
	return (
		row0.join('') === 'OOO' ||
		row1.join('') === 'OOO' ||
		row2.join('') === 'OOO' ||
		col0.join('') === 'OOO' ||
		col1.join('') === 'OOO' ||
		col2.join('') === 'OOO' ||
		diag1.join('') === 'OOO' ||
		diag2.join('') === 'OOO' ||
		row0.join('') === 'XXX' ||
		row1.join('') === 'XXX' ||
		row2.join('') === 'XXX' ||
		col0.join('') === 'XXX' ||
		col1.join('') === 'XXX' ||
		col2.join('') === 'XXX' ||
		diag1.join('') === 'XXX' ||
		diag2.join('') === 'XXX'
	);
}
export const detectTicTacToeWin = (board) => {
	const row0 = board[0];
	const row1 = board[1];
	const row2 = board[2];

	const col0 = colMaker(board, 0);
	const col1 = colMaker(board, 1);
	const col2 = colMaker(board, 2);
	const diag1 = [row0[0], row1[1], row2[2]];
	const diag2 = [row0[2], row1[1], row2[0]];
	return checkWin(row0, row1, row2, col0, col1, col2, diag1, diag2);
};
