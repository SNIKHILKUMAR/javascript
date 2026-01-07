//         0 
//       1 1 
//     2 3 5 
//   8 13 21 34 
// 55 89 144 233 377 

let rows = 5; // Total number of rows
let a = 0, b = 1;

for (let i = 1; i <= rows; i++) {
  // Space for centering (isosceles triangle)
  let str = " ".repeat((rows - i) * 2);

  // Print i numbers in this row
  for (let j = 1; j <= i; j++) {
    str += a + " ";
    let next = a + b;
    a = b;
    b = next;
  }

  console.log(str);
}