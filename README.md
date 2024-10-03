# Lab2--JavaScript
Lab2 - JavaScript 4th semester

Project Description - Node.js JavaScript Application
This project consists of two separate JavaScript files that run on the server-side using Node.js. It demonstrates how to structure a simple application using ES Modules syntax for importing and exporting content between files, following modern JavaScript practices. Optionally, you can implement the traditional CommonJS module system in a separate folder for learning purposes (optional, not required).

File 1: Entry Point (First JavaScript File)
This file serves as the entry point of the application. You'll run this file using Node.js to execute the functions you’ve defined in the second file.

Naming: You can give any name to this file, such as index.js or main.js.
Purpose: This file calls or invokes a list of utility functions defined in the second JavaScript file.
Importing: The utility functions from the second file are imported using ES Modules syntax.
Optional: You may implement the CommonJS module system (optional), but this must be placed in a separate folder to avoid conflicts with the ES Modules system.
File 2: Utility Functions (Second JavaScript File)
This file contains various utility functions that are used by the entry point file. You can name this file whatever you prefer, such as my-module.js.

Naming: You can use any name like utilities.js, my-module.js, etc.
Purpose: This file holds reusable functions, objects, or data to be used or called by the first JavaScript file.
Functions:
First Function:

Description: This function accepts two or three parameters, concatenates them with a message, and prints the result to the console without returning any value.
Example: A function that takes firstName and lastName and prints a message like:
css
Copiar código
"Welcome firstName lastName to G@I College"
Second Function:

Description: This function converts a measurement from one unit to another and returns the result. It can accept a single numeric value (e.g., temperature, time) as a parameter and convert it to another unit.
Example: Convert Celsius to Fahrenheit or vice versa, minutes to hours, etc.
Third Function:

Description: This function performs a mathematical operation on one or more values. It accepts one or more numeric arguments, applies a formula, and returns the result.
Example: Compute the factorial of a number or sum multiple values together.
Fourth Function:

Description: This function performs any advanced operation of your choice, such as raising a base to a power or applying another complex mathematical formula.
Example: A power function to compute base^exponent.
How to Run the Project:
Install Node.js (if not already installed).
Run the entry point file (e.g., index.js) using Node.js:
bash
Copiar código
node index.js
Optional:
If you choose to implement the CommonJS module system for learning purposes, place it in a separate folder and run it using the appropriate require syntax for module imports/exports. However, this is not required for this project.

Project Requirements:
Node.js installed on your machine.
At least 4 functions created in the utility file.
Use ES Modules syntax for module importing/exporting.
