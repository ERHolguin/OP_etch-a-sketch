const rows = 16;
const columns = 16;

const gridContainer = document.getElementById('container');

for (let i = 0; i < rows; i++) {   
    for (let j = 0; j < columns; j++) {
        const singleCell = document.createElement('div');
        singleCell.className = 'singleCell';
        singleCell.textContent = ('');

        gridContainer.appendChild(singleCell);
    }
}
    

// what needs to happen next?
//