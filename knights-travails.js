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
        return 0 < loc[0] && loc[0] < 9 && 0 < loc[1] && loc[1] < 9;
    });
};
