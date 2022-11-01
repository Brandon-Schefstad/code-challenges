/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.

Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.

For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.

Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */

export const grandTotal = (stores) => {
	const returnTotals = [];
	for (let i = 0; i < stores.length; i++) {
		stores[i].forEach((hour, index) => {
			const obj = {
				hour: index,
				sales: hour,
			};
			returnTotals.push(obj);
		});
	}
	return Object.values(
		returnTotals.reduce(
			(acc, val) => {
				acc[val.hour] += val.sales;

				return acc;
			},
			{
				0: 0,
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0,
				6: 0,
				7: 0,
				8: 0,
				9: 0,
				10: 0,
				11: 0,
			}
		)
	);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.

Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.

Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */

export const salesData = (hours, data) => {
	const objectArray = [];
	data.forEach((hourly, i) => {
		objectArray.push({
			sales: hourly + ' cookies',
			time: hours[i],
		});
	});
	return objectArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array.
------------------------------------------------------------------------------------------------ */

export const howManyTreats = (arr) => {
	return arr
		.filter((store) => {
			return store.store === 'Pet store';
		})[0]
		.items.filter((item) => {
			return item.name === 'Treats';
		})[0].quantity;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */

export const battleship = (board, row, col) => {
	return board[row][col] === '#' ? 'hit' : 'miss';
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */

export const calculateProduct = (numbers) => {
	return numbers.reduce((acc, subArr) => {
		acc *= subArr.reduce((acc, val) => {
			acc *= val;
			return acc;
		}, 1);
		return acc;
	}, 1);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

export const averageDailyTemperature = (weather) => {
	const totalTemps =
		weather
			.map((week) => {
				return (
					week.reduce((acc, temp, i) => {
						acc += temp;
						return acc;
					}, 0) / week.length
				);
			})
			.reduce((acc, avg) => {
				acc += avg;
				return acc;
			}, 0) / weather.length;
	return totalTemps;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

export const lowestWeeklyAverage = (weather) => {
	const totalTemps = weather.map((week) => {
		return (
			week.reduce((acc, temp, i) => {
				acc += temp;
				return acc;
			}, 0) / week.length
		);
	});

	return totalTemps.sort((a, b) => {
		return a - b;
	})[0];
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are separated by newline "\n" characters. Columns are separated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

export const excel = (str) => {
	const rows = str.split(`\n`);
	return rows.map((row) => {
		return row.split(',').reduce((a, c) => {
			a += Number(c);
			return a;
		}, 0);
	});
};
