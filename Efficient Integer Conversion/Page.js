function isValidInput(n) {
	return typeof n === 'number' && Number.isInteger(n) && n > 0;
}

function calculateSteps(n) {
	let steps = 0;
	while (n > 1) {
		n = (n % 2 === 0) ? n / 2 : (n === 3 || n % 4 === 1) ? n - 1 : n + 1;
		steps++;
	}
	return steps;
}

function integerConversion(n) {
    if (!isValidInput(n)) {
        return "Error: Input must be a positive integer.";
    }
   return calculateSteps(n)
}

// Some scenarios
console.log(solution(4));  // Returns 2
console.log(solution(15)); // Returns 5
console.log(solution(-5)); // Returns "Error: Input must be a positive integer."
console.log(solution("15")); //Returns "Error: Input must be a positive integer."