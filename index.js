let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
let heightsArray = [160, 175, 180, 165, 170];

let employeesArray = [
  { name: "Rahul", employeeId: 101, salary: 50000 },
  { name: "Sita", employeeId: 102, salary: 60000 },
  { name: "Amit", employeeId: 103, salary: 45000 },
];
// Array of books with titles, authors, and page counts
let booksArray = [
  { title: "The God of Small Things", author: "Arundhati Roy", pages: 340 },
  { title: "The White Tiger", author: "Aravind Adiga", pages: 321 },
  { title: "The Palace of Illusions", author: "Chitra Banerjee", pages: 360 },
];

/*
Question 1:

Write an Express code snippet to sort an array of heights in ascending order.

Instructions:

Define an endpoint /heights/sort-ascending using the get method.

Implement a function sortHeightsAscending that sorts heights in ascending order.

Inside the endpoint, create a copy of the heights array and sort it using the sortHeightsAscending function.

Send the sorted heights as a JSON response.

Given Data: [160, 175, 180, 165, 170]
*/

function sortHeightsAscending(height1, height2) {
  return height1 - height2;
}
app.get("/heights/sort-ascending", (req, res) => {
  let sortedHeights = heightsArray.slice().sort(sortHeightsAscending); //combined 2 functions
  res.json(sortedHeights);
});

/*
Question 2:

Write an Express code snippet to sort an array of heights in descending order.

Instructions:

Define an endpoint /heights/sort-descending using the get method.

Implement a function sortHeightsDescending that sorts heights in descending order.

Inside the endpoint, create a copy of the heights array and sort it using the sortHeightsDescending function.

Send the sorted heights as a JSON response.

Given Data: [160, 175, 180, 165, 170]
*/
function sortHeightsDescending(height1, height2) {
  return height2 - height1;
}
app.get("/heights/sort-descending", (req, res) => {
  let sortedHeights = heightsArray.slice().sort(sortHeightsDescending);
  res.json(sortedHeights);
});

/*
Question 3:

Write an Express code snippet to sort an array of employees by salary in descending order.

Instructions:

Define an endpoint /employees/sort-by-salary-descending using the get method.

Implement a function sortEmployeesBySalaryDescending that sorts employees by salary in descending order.

Inside the endpoint, create a copy of the employees array and sort it using the sortEmployeesBySalaryDescending function.

Send the sorted employees as a JSON response.
*/

function sortEmployeesBySalaryDescending(employeeObj1, employeeObj2) {
  return employeeObj2.salary - employeeObj1.salary;
}
app.get("/employees/sort-by-salary-descending", (req, res) => {
  let sortedEmployees = employeesArray
    .slice()
    .sort(sortEmployeesBySalaryDescending);
  res.json(sortedEmployees);
});

/*
Question 4:

Write an Express code snippet to sort an array of books by pages in ascending order.

Instructions:

Define an endpoint /books/sort-by-pages-ascending using the get method.

Implement a function sortBooksByPagesAscending that sorts books by pages in ascending order.

Inside the endpoint, create a copy of the books array and sort it using the sortBooksByPagesAscending function.

Send the sorted books as a JSON response.
*/

function sortBooksByPagesAscending(bookObj1, bookObj2) {
  return bookObj1.pages - bookObj2.pages;
}
app.get("/books/sort-by-pages-ascending", (req, res) => {
  let sortedBooks = booksArray.slice().sort(sortBooksByPagesAscending);
  res.json(sortedBooks);
});
