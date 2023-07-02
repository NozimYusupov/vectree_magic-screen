const container = document.querySelector('.container');

const paint = document.createElement('div');

paint.classList.add('painter');
container.appendChild(paint);

const colors = ['Black', 'Gray', 'Silver', 'White', 'Fuchsia', 'Purple', 'Red', 'Maroon',
                'Yellow', 'Olive', 'Lime', 'Green', 'Aqua', 'Teal', 'Blue', 'Navy'];


const clean = document.getElementById('clean');

let size = 0;

clean.addEventListener('click', () => {
  paint.innerHTML = '';
  do {
    size = +prompt('Какое количество квадратов задать для новой сетки? [16..130]');
  } while (size > 130 || size < 16);
  
  cellsDraw();
  paintDraw();
});

const cellsDraw = () => {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    paint.appendChild(row);  
    for (let j = 0; j < size; j++ ) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);    
    }
  }
};

const paintDraw = (e) => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) =>  {
    let target = e.target;
    target.style.background = colors[Math.ceil(Math.random() * 10)];
    });
  });
};

cellsDraw();
paintDraw();
