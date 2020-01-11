# DaysCalculator

Calculates the number of full days elapsed between the two sets of start and end dates.

## Assumptions

1. The start date and the end dates are considered partial days and are never counted by the system. e.g. 07/11/1972 and 08/11/1972 should return 0 while 01/01/2000 to 03/01/2000 should return 1
2. The solutions caters to the dates between 01/01/1901 and 31/12/2999 only. Any dates outside these region will throw error

## Solution formulation

Steps I thought of and executed for solving the get number of full elapsed days:

1. Get start dates and end dates as a parameter. Since, this project needs to be run from the terminal I have used a node native object `process.argv.forEach` that would allow the users to enter these dates from the terminal.
2. Convert these dates in to milliseconds in order get the results in days.
3. ValidMinDate and ValidMaxDate has been initialized at first, in order to check if the start date and end date falls in between the valid dates.
4. Also a condition has been passed to check if the start date and end date are the same then, it would simply return 0.

## Libraries/Tools used

- No main dependency. It might have been easier/less code to do this with something like moment.js, but that would defeat the purpose of the coding task.
- Written in node with some ES6 syntax. tested on Node v12.13.1
- Uses Jest for testing

## How to setup

Run the following commands to setup, given `node` and `npm` is available:

1. `git clone git@github.com:ghaleroshan/DaysCalculator.git`
2. `cd DaysCalculator`
3. `node getDays.js "2/22/1983" "3/2/1983"` -> to see a test output

## Running tests

1. Install Jest using either `npm install` or `npm i --save-dev jest`.
2. Simply run `npm test` to run all the tests.
3. Run command `npm run test:cov` to see all the test coverage.
   Current coverage is 100%
   ![Alt text](relative/path/to/coverage.png?raw=true "Coverage")

## Decisions and tradeoffs

1. I have chosen more of a functional
1. There are places to improve. Still, I would not opt to do them all for a small problem domain like this one. As software engineers we need to find a balance.

## If it was a bigger project

This is a coding challenge and scope is quite small. If it was a bigger real project, doing the following would be better:
