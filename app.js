const board = document.querySelector('#board');
const colors = [
  'rgb(253, 123, 1)',
  'rgb(255, 238, 0)',
  'rgb(6, 248, 18)',
  'rgb(0, 30, 163)',
  'rgb(174, 0, 180)',
  'rgb(253, 1, 157)'
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
};

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};