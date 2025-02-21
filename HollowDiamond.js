// Task: Write a function printHollowDiamond(n) that prints a hollow diamond of size n (odd number only).

// Example Output for n = 7:
function printHollowDiamond(n) {
    if (n % 2 === 0) {
      console.log("Please enter an odd number.");
      return;
    }
  
    let mid = Math.floor(n / 2);
    
    for (let i = 0; i <= mid; i++) {
      let row = " ".repeat(mid - i) + "*";
      
      if (i > 0) {
        row += " ".repeat(2 * i - 1) + "*";
      }
      
      console.log(row);
    }
  
    for (let i = mid - 1; i >= 0; i--) {
      let row = " ".repeat(mid - i) + "*";
      
      if (i > 0) {
        row += " ".repeat(2 * i - 1) + "*";
      }
      
      console.log(row);
    }
  }
  
  printHollowDiamond(7);
  