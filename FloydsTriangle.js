// Task: Write a function printFloydsTriangle(n) that prints Floyd’s Triangle up to n rows.

// Example Output for n = 5:

function printFloydsTriangle(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += num++ + " ";
      }
      console.log(row);
    }
  }
  
  printFloydsTriangle(5);
  