
const gridContainer = document.getElementById('main-grid');
let userButton = document.getElementById('newGrid');

function defaultGrid(rows, columns) {
for (let i = 0; i < rows; i++) { 
    let rows = document.createElement('div');
    rows.className = 'row';
    gridContainer.appendChild(rows);
    rows.textContent = ('');
    gridContainer.appendChild(rows);

    for (let j = 0; j < columns; j++) {
        let columns = document.createElement('div');
        columns.className = 'columns';
        columns.textContent = ('');
        rows.appendChild(columns);


        function changeColor() {
            columns.style.backgroundColor = 'blue';
        }
        columns.addEventListener('mouseover', changeColor);        
    }
}
}

defaultGrid(16, 16);

function removeGrid() {
    gridContainer.textContent = '';
}

function createGrid() {
    let rows = prompt('Width Size');
    let columns = prompt('Height Size');
    //let value1 = parseInt(rows);
    //let value2 = parseInt(columns);
    defaultGrid(rows, columns);
}

userButton.addEventListener('click', removeGrid)
userButton.addEventListener('click', createGrid)



// what needs to happen next?
// Make grid size spread evenly
// Set the limit for user input to max of 100

//extra credit 
// Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
// Implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
