// Task: Write a function printHollowPyramid(n) that prints a hollow pyramid of size n.

// Example Output for n = 5:
function printHollowPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = " ".repeat(n - i);
      
      for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
          row += "*";
        } else {
          row += " ";
        }
      }
      
      console.log(row);
    }
  }
  
  printHollowPyramid(5);
  