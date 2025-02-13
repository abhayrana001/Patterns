// Task: Write a function printDiamond(n) that prints a diamond pattern with n rows (odd number only).

// Example Output for n = 5:

function printDiamond(n) {
    if (n % 2 === 0) {
      console.log("Please provide an odd number.");
      return;
    }
    
    let mid = Math.floor(n / 2);
    
    for (let i = 0; i <= mid; i++) {
      console.log(" ".repeat(mid - i) + "*".repeat(2 * i + 1));
    }
    
    for (let i = mid - 1; i >= 0; i--) {
      console.log(" ".repeat(mid - i) + "*".repeat(2 * i + 1));
    }
  }
  
  printDiamond(5);
  