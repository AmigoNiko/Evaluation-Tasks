function solution(map) {
    if (!Array.isArray(map) || map.length < 2 || map.length > 20) {
        return "Error: Input map must be a 2D array with dimensions between 2 and 20.";
    }
    
    for (let row of map) {
        if (!Array.isArray(row) || row.length < 2 || row.length > 20 || row.some(cell => cell !== 0 && cell !== 1)) {
            return "Error: Each row of the map must be an array of 0s and 1s with length between 2 and 20.";
        }
    }

    const height = map.length;
    const width = map[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const isValid = (x, y) => x >= 0 && x < height && y >= 0 && y < width;

    const bfs = (start, removeWall) => {
        const queue = [[start[0], start[1], 0, removeWall]];
        const visited = new Set([`${start[0]},${start[1]},${removeWall}`]);

        while (queue.length > 0) {
            const [x, y, steps, canRemove] = queue.shift();
            if (x === 0 && y === 0) return steps + 1;

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (isValid(nx, ny)) {
                    if (map[nx][ny] === 0 && !visited.has(`${nx},${ny},${canRemove}`)) {
                        queue.push([nx, ny, steps + 1, canRemove]);
                        visited.add(`${nx},${ny},${canRemove}`);
                    } else if (map[nx][ny] === 1 && canRemove && !visited.has(`${nx},${ny},${canRemove - 1}`)) {
                        queue.push([nx, ny, steps + 1, canRemove - 1]);
                        visited.add(`${nx},${ny},${canRemove - 1}`);
                    }
                }
            }
        }
        return Infinity;
    };

    return bfs([height - 1, width - 1], 1);
}

// Test scenarios
console.log(solution([
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0]
])); // Should return 11

console.log(solution([
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 0]
])); // Should return 7

console.log(solution([
    [0, 0, 1],
    [0, "a", 0]
])); // Should return "Error: Each row of the map must be an array of 0s and 1s with length between 2 and 20."

console.log(solution("Invalid Input")); // Should return "Error: Input map must be a 2D array with dimensions between 2 and 20."