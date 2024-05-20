function isValidMap(map) {
    if (!Array.isArray(map) || map.length < 2 || map.length > 20) {
        return false;
    }
    for (let row of map) {
        if (!Array.isArray(row) || row.length < 2 || row.length > 20 || row.some(cell => cell !== 0 && cell !== 1)) {
            return false;
        }
    }
    return true;
}

function isValidCoordinate(x, y, height, width) {
    return x >= 0 && x < height && y >= 0 && y < width;
}

function initializeSearch(start, removeWall) {
    const queue = [[start[0], start[1], 0, removeWall]];
    const visited = new Set([`${start[0]},${start[1]},${removeWall}`]);
    return { queue, visited };
}

function addNeighbor(queue, visited, nextX, nextY, steps, canRemove) {
    queue.push([nextX, nextY, steps + 1, canRemove]);
    visited.add(`${nextX},${nextY},${canRemove}`);
}

function processNode(queue, visited, map, height, width, directions) {
    const [currentX, currentY, steps, canRemove] = queue.shift();
    if (currentX === 0 && currentY === 0) return steps + 1;

    for (const [dx, dy] of directions) {
        const nextX = currentX + dx;
        const nextY = currentY + dy;

        if (isValidCoordinate(nextX, nextY, height, width)) {
            if (map[nextX][nextY] === 0 && !visited.has(`${nextX},${nextY},${canRemove}`)) {
                addNeighbor(queue, visited, nextX, nextY, steps, canRemove);
            } else if (map[nextX][nextY] === 1 && canRemove && !visited.has(`${nextX},${nextY},${canRemove - 1}`)) {
                addNeighbor(queue, visited, nextX, nextY, steps, canRemove - 1);
            }
        }
    }
    return null;
}

function findShortestPath(map, start, removeWall) {
    const height = map.length;
    const width = map[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const { queue, visited } = initializeSearch(start, removeWall);

    while (queue.length > 0) {
        const result = processNode(queue, visited, map, height, width, directions);
        if (result !== null) return result;
    }

    return Infinity;
}

function escapeLabyrinth(map) {
    if (!isValidMap(map)) {
        return "Error: Input map must be a 2D array with dimensions between 2 and 20.";
    }

    return findShortestPath(map, [map.length - 1, map[0].length - 1], 1);
}

// Some scenarios
console.log(escapeLabyrinth([
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0]
])); // Returns 11

console.log(escapeLabyrinth([
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 0]
])); // Returns 7

console.log(escapeLabyrinth([
    [0, 0, 1],
    [0, "a", 0]
])); // Returns "Error: Input map must be a 2D array with dimensions between 2 and 20."