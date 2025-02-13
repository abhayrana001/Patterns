// Task: Write a function printNumberPyramid(n) that prints a number pyramid.

// Example Output for n = 5:

function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = " ".repeat(n - i);
      let numbers = "";
      
      for (let j = 1; j <= i; j++) {
        numbers += j;
      }
      
      for (let j = i - 1; j >= 1; j--) {
        numbers += j;
      }
  
      console.log(spaces + numbers);
    }
  }
  
  printNumberPyramid(5);
  
  