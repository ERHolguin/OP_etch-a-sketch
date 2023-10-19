const rows = 16;
const columns = 16;

const gridContainer = document.getElementById('main-grid');

for (let i = 0; i < rows; i++) {   
    for (let j = 0; j < columns; j++) {
        const singleCell = document.createElement('div');
        singleCell.className = 'singleCell';
        singleCell.textContent = ('');

        function changeColor() {
            singleCell.style.backgroundColor = 'blue';
        }

        singleCell.addEventListener('mouseover', changeColor);

        gridContainer.appendChild(singleCell);
        
    }
}



// what needs to happen next?
//