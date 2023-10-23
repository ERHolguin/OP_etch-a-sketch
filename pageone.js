let rows = 0;
let columns = 0;

const gridContainer = document.getElementById('main-grid');

function defaultGrid(rows, columns) {
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
}

defaultGrid(16, 161);


// what needs to happen next?
// Add a button to the top of the screen
// This button will send the user a popup asking the number of squares per side for a new grid
// The existing grid should be replaced by the new one created by the user, in the same total space as before (960px wide)
// Set the limit for user input to max of 100

//extra credit 
// Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
// Implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
