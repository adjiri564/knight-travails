function knightMoves(start, end) {
    // Define the possible moves of a knight
    const moves = [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]];
    
    // Create a queue for BFS and add the starting position
    const queue = [[start, [start]]];
    
    // Create a set to store visited positions
    const visited = new Set([start.join(',')]);
    
    while (queue.length > 0) {
        // Get the current position and path
        const [[x, y], path] = queue.shift();
        
        // If the current position is the end position, return the path
        if (x === end[0] && y === end[1]) {
            return path;
        }
        
        // Generate all possible next positions
        for (const [dx, dy] of moves) {
            const nx = x + dx;
            const ny = y + dy;
            
            // Check if the next position is on the board and not visited
            if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited.has([nx, ny].join(','))) {
                // Add the next position to the queue and mark it as visited
                queue.push([[nx, ny], [...path, [nx, ny]]]);
                visited.add([nx, ny].join(','));
            }
        }
    }
    
    // If there is no path to the end position, return null
    return null;
}

// Test the function
const start = [3, 3];
const end = [0, 0];
const path = knightMoves(start, end);
if (path) {
    console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
    for (const pos of path) {
        console.log(pos);
    }
} else {
    console.log("No path found.");
}