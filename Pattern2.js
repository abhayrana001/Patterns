// Task: Write a function printPyramid(n) that prints a pyramid pattern of n rows using *.

// Example Output for n = 5:
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = " ".repeat(n - i);
      let stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  printPyramid(5);
  