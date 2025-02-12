// Task: Write a function printTriangle(n) that prints a right-angled triangle of n rows using *.

// Example Output for n = 5:
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
      console.log("*".repeat(i));
    }
  }
  
  printTriangle(5);
  