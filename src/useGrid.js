import { useState } from 'react';

export default function useGrid(size) {
  const [grid, setGrid] = useState(generateGrid(size));
  grid.refresh = () => setGrid(generateGrid(size));
  return grid;
}

function generateGrid(size) {
  const grid = [];
  const dice = 6;
  const numApples = 5;
  const numSkulls = 6;

  for (let x = 0; x < size; x++) {
    const row = [];
    for (let y = 0; y < size; y++) {
      row.push(Math.floor(Math.random() * dice) + 1);
    }
    grid.push(row);
  }

  for (let i = 0; i < numApples; i++) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    grid[x][y] = 0;
  }
  for (let i = 0; i < numSkulls; i++) {
    const x = Math.floor(Math.random() * (size - 2) + 1);
    const y = Math.floor(Math.random() * (size - 2) + 1);
    grid[x][y] = -1;
  }

  return grid;
}
