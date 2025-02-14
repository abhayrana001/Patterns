// Task: Write a function printHollowSquare(n) that prints a hollow square of size n.

// Example Output for n = 5:
function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
      if (i === 1 || i === n) {
        console.log("*".repeat(n));
      } else {
        console.log("*" + " ".repeat(n - 2) + "*");
      }
    }
  }
  
  printHollowSquare(5);
  