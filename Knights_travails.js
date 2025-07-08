function knightMoves(st, e) {
  const boardSize = 8;

  const dir = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1]
  ];

  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < boardSize && y < boardSize;
  }

  const vis = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(false)
  );

  const queue = [[st, [st]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    if (x === e[0] && y === e[1]) {
      return path;
    }

    if (vis[x][y]) continue;
    vis[x][y] = true;
    for (let [dx, dy] of dir) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValid(newX, newY) && !vis[newX][newY]) {
        queue.push([[newX, newY], [...path, [newX, newY]]]);
      }
    }
  }

  return []; 
}
console.log(knightMoves([3,3],[4,3]))
console.log(knightMoves([0,0],[7,7]))