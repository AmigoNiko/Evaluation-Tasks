Overview

This repository contains solutions to three tasks for evaluating the skills needed for an Adserver Javascript developer position. Each task is implemented in JavaScript and includes error handling to ensure robustness against incorrect inputs. Below is a detailed description of each task along with usage instructions.

Tasks

Task 1: Efficient Integer Conversion
The goal is to create a function that converts a positive integer to 1 using the least number of steps. The allowed operations are:

-Add One

-Remove One

-Divide by 2 (only if the current number is even)


Function: solution(n)

Parameters:

n (integer): A positive integer to be converted to 1.
Returns:

Number of steps to convert the integer to 1, or an error message if the input is invalid.

Task 2: Escape a Labyrinth
The objective is to find the shortest path from the bottom right to the top left of a labyrinth, represented as a 2D array, where one wall can be removed to facilitate the escape.

Function: solution(map)

Parameters:

map (2D array): A matrix where 0s are passable spaces and 1s are impassable walls.
Returns:

Length of the shortest path from the entrance to the exit, considering one wall removal, or an error message if the input is invalid.

Task 3: JavaScript DOM Manipulation
The aim is to create a function that manipulates the DOM of a webpage to create a simplified and structured view by removing multimedia content and CSS styles, and organizing textual content into div elements with banners inserted between them.

Function: simplifyPage()

Description:

Removes all CSS styles from the page.
Removes all multimedia content (images, videos, iframes).
Retrieves all textual content and places it into separate div elements.
Inserts a 728x90 banner between each div element.

Requirements
Ensure JavaScript is enabled in your environment or browser.
The DOM manipulation function should be included and called within a browser context.

Notes
Each task includes error handling to provide informative error messages when the input is invalid.
Ensure that the inputs adhere to the expected types and formats to avoid errors.
Feel free to test each function with different inputs to understand their functionality and error handling capabilities.
