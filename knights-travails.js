const possibleMoves = (coords) => {
    let allMoves = [];
    allMoves.push([coords[0] + 1, coords[1] + 2]);
    allMoves.push([coords[0] + 1, coords[1] - 2]);
    allMoves.push([coords[0] + 2, coords[1] + 1]);
    allMoves.push([coords[0] + 2, coords[1] - 1]);
    allMoves.push([coords[0] - 1, coords[1] - 2]);
    allMoves.push([coords[0] - 1, coords[1] + 2]);
    allMoves.push([coords[0] - 2, coords[1] + 1]);
    allMoves.push([coords[0] - 2, coords[1] - 1]);
    return allMoves.filter((loc) => {
        return 0 <= loc[0] && loc[0] < 8 && 0 <= loc[1] && loc[1] < 8;
    });
};
const knightMoves = (start, end) => {
    const queue = [{ coord: start, path: [] }];
    const visited = new Set();

    while (queue.length) {
        const current = queue.shift();
        const currentCoord = current.coord;
        if (currentCoord[0] === end[0] && currentCoord[1] === end[1]) {
            return [...current.path, end];
        }
        let moves = possibleMoves(currentCoord);
        moves.forEach((move) => {
            if (!visited.has(move.join())) {
                visited.add(move.join());
                queue.push({
                    coord: move,
                    path: [...current.path, currentCoord],
                });
            }
        });
    }

    return [];
};

console.log(knightMoves([3, 3], [4, 3]));
