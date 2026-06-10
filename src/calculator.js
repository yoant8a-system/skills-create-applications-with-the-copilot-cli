#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - addition (add or +)
// - subtraction (sub or -)
// - multiplication (mul or *)
// - division (div or /)

// Usage examples:
//   node src/calculator.js add 2 3    # prints 5
//   node src/calculator.js sub 10 4   # prints 6
//   node src/calculator.js mul 3 7    # prints 21
//   node src/calculator.js div 8 2    # prints 4

function printUsageAndExit() {
  console.error("Usage: node src/calculator.js <operation> <num1> <num2>");
  console.error("Operations: add (+), sub (-), mul (*), div (/)");
  process.exit(1);
}

const [, , opRaw, aRaw, bRaw] = process.argv;
if (!opRaw || aRaw === undefined || bRaw === undefined) {
  printUsageAndExit();
}

const op = opRaw.toLowerCase();
const a = Number(aRaw);
const b = Number(bRaw);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Invalid numeric input. Provide valid integers or floating-point numbers.');
  process.exit(1);
}

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

let result;
switch (op) {
  case 'add':
  case '+':
    result = add(a, b);
    break;
  case 'sub':
  case '-':
    result = sub(a, b);
    break;
  case 'mul':
  case 'x':
  case '*':
    result = mul(a, b);
    break;
  case 'div':
  case '/':
    if (b === 0) {
      console.error('Error: Division by zero');
      process.exit(1);
    }
    result = div(a, b);
    break;
  default:
    console.error(`Unknown operation: ${opRaw}`);
    printUsageAndExit();
}

// Print result to stdout
console.log(result);
process.exit(0);
