let robotPosition = { x: 0, y: 0 }; // Initial position of the robot
const commands = []; // List of commands

// Initialize the game board
function initializeBoard() {
    const robotCell = document.getElementById(`cell-${robotPosition.y}-${robotPosition.x}`);
    robotCell.innerHTML = '<div class="robot"></div>';
    document.getElementById("cell-2-3").innerHTML = '<div class="star">⭐</div>'; // Place the star
}

initializeBoard(); // Set up the initial board

// Function to add commands
function addCommand(command) {
    commands.push(command);
    document.getElementById('status').innerText = `Command added: ${command}`;
}

// Function to execute all commands
function executeProgram() {
    commands.forEach(command => {
        if (command === 'up' && robotPosition.y > 0) robotPosition.y--;
        if (command === 'down' && robotPosition.y < 3) robotPosition.y++;
        if (command === 'left' && robotPosition.x > 0) robotPosition.x--;
        if (command === 'right' && robotPosition.x < 3) robotPosition.x++;
    });

    updateBoard(); // Update the board after moving
    checkWinCondition(); // Check if the robot reached the star
    commands.length = 0; // Clear the commands
}

// Function to clear the board
function clearBoard() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cellId = `cell-${i}-${j}`;
            document.getElementById(cellId).innerHTML = '';
        }
    }
}

// Function to update the board
function updateBoard() {
    clearBoard();
    const robotCell = document.getElementById(`cell-${robotPosition.y}-${robotPosition.x}`);
    robotCell.innerHTML = '<div class="robot"></div>';
    document.getElementById("cell-2-3").innerHTML = '<div class="star">⭐</div>'; // Keep the star in place
}

// Function to check if the robot has collected the star
function checkWinCondition() {
    if (robotPosition.y === 2 && robotPosition.x === 3) {
        document.getElementById('status').innerText = 'Congratulations! You\'ve collected the star!';
    }
}

// Function to clear commands
function clearCommands() {
    commands.length = 0;
    document.getElementById('status').innerText = 'Commands cleared.';
}
