function integerConversion(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        return "Error: Input must be a positive integer.";
    }
    
    let steps = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if (n === 3 || n % 4 === 1) {
            n -= 1;
        } else {
            n += 1;
        }
        steps++;
    }
    return steps;
}

// Test scenarios
console.log(solution(4));  // Should return 2: 4 -> 2 -> 1
console.log(solution(15)); // Should return 5: 15 -> 16 -> 8 -> 4 -> 2 -> 1
console.log(solution(-5)); // Should return "Error: Input must be a positive integer."
console.log(solution("15")); // Should return "Error: Input must be a positive integer."