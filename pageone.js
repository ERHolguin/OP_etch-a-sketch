let row;
let column;
const gridContainer = document.getElementById('gridContainer');
let userButton = document.getElementById('newGrid');
//let defaultColorButton = document.getElementById('defaultColor')
//let multiColorButton = document.getElementById('multiColors')

function defaultGrid(rows, columns) {
for (let i = 0; i < rows; i++) { 
    let rows = document.createElement('div');
    rows.className = 'row';
    rows.textContent = ('');
    gridContainer.appendChild(rows);

    for (let j = 0; j < columns; j++) {
        let columns = document.createElement('div');
        columns.className = 'columns';
        columns.textContent = ('');
        rows.appendChild(columns); 

        function defaultColor() {
            columns.style.backgroundColor = 'black';
        } 

        function multiColor() {
            const colors = [];

            for(let i = 0; i < 10; i++); {
                const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                colors.push(randomColor);
            } 
            return columns.style.backgroundColor = colors;
        }

        //columns.addEventListener('mouseover', defaultColor)

        columns.addEventListener('mouseover', multiColor)

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
    if (rows <= 100 && columns <= 100) {
        defaultGrid(rows, columns);
    } else {
        removeGrid();
        alert ("Invalid Input. Please enter a dimension smaller than 100")
    }
}

userButton.addEventListener('click', removeGrid)
userButton.addEventListener('click', createGrid)



// what needs to happen next?
// Make grid size spread evenly
// Set the limit for user input to max of 100

//extra credit 
// Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
// Implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
