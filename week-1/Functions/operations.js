// (1) Arithmetric operations ( + , - , * , / , % )

let n1 = 10;
let n2 = 20;

console.log("n1 + n2: " + (n1 + n2)); // n1=10 n2=20
console.log("n1 - n2: " + (n1 - n2)); // n1=10 n2=20
console.log("n1 * n2: " + (n1 * n2)); // n1=10 n2=20
console.log("n1 / n2: " + (n1 / n2)); // n1=10 n2=20
console.log("n1 % n2: " + (n1 % n2)); // n1=10 n2=20


//Alternatively, you can use template literals (backticks `) to make it even more readable:
console.log(`n1 + n2: ${n1 + n2}`); // n1=10 n2=20
console.log(`n1 - n2: ${n1 - n2}`); // n1=10 n2=20
console.log(`n1 * n2: ${n1 * n2}`); // n1=10 n2=20
console.log(`n1 / n2: ${n1 / n2}`); // n1=10 n2=20
console.log(`n1 % n2: ${n1 % n2}`); // n1=10 n2=20

// (2) Assignment operations ( = , += , -= , *= , /= , %= )

n1+=n2 // n1=n1+n2  n1=10+20 n1=30 and n2=20
n1-=n2 // n1=n1-n2  n1=30-20 n1=10 and n2=20
n1*=n2 // n1=n1*n2  n1=10*20 n1=200 and n2=20
n1/=n2 // n1=n1/n2  n1=200/20 n1=10 and n2=20
n1%=n2 // n1=n1%n2  n1=10%20 n1=0 and n2=20

// (3) Comparison operations ( == , != , > , < , >= , <= )

console.log("n1 == n2: " + (n1 == n2)); // n1=10 == n2=20 false
console.log("n1 != n2: " + (n1 != n2)); // n1=10 != n2=20 true
console.log("n1 > n2: " + (n1 > n2)); // n1=10 > n2=20 false
console.log("n1 < n2: " + (n1 < n2)); // n1=10 < n2=20 true
console.log("n1 >= n2: " + (n1 >= n2)); // n1=10 >= n2=20 false
console.log("n1 <= n2: " + (n1 <= n2)); // n1=10 <= n2=20 true

// (4) Logical operations ( && , || ,! )

console.log("n1 > n2 && n1 < n2: " + (n1 > n2 && n1 < n2)); // n1=10 n2=20 false
console.log("n1 > n2 || n1 < n2: " + (n1 > n2 || n1 < n2)); // n1=10 n2=20 true
console.log("!n1 > n2: " + (!n1 > n2)); // n1=10 n2=20 false

// (5) Type conversion operations (Number(), parseInt(), parseFloat(), String() )





