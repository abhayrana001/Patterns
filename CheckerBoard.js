// Task: Write a function printCheckerboard(n) that prints a checkerboard pattern of size n.

// Example Output for n = 6:

function printCheckerboard(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j < n; j++) {
        row += (i + j) % 2 === 0 ? "* " : "  ";
      }
      console.log(row);
    }
  }
  
  printCheckerboard(6);
  