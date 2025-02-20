// Task: Write a function printAlphabetPyramid(n) that prints a pyramid of alphabets up to n rows.

// Example Output for n = 5:
function printAlphabetPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = " ".repeat(n - i);
      
      for (let j = 0; j < i; j++) {
        row += String.fromCharCode(65 + j);
      }
      
      for (let j = i - 2; j >= 0; j--) {
        row += String.fromCharCode(65 + j);
      }
      
      console.log(row);
    }
  }
  
  printAlphabetPyramid(5);
  