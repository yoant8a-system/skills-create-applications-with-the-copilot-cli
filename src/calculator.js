#!/usr/bin/env node

// Node.js CLI Calculator
// Supported operations:
// - addition (add or +)
// - subtraction (sub or -)
// - multiplication (mul or *)
// - division (div or /)
// - modulo (mod or %)
// - power (pow or ^)
// - square root (sqrt)

// Usage examples:
//   node src/calculator.js add 2 3    # prints 5
//   node src/calculator.js sub 10 4   # prints 6
//   node src/calculator.js mul 3 7    # prints 21
//   node src/calculator.js div 8 2    # prints 4
//   node src/calculator.js mod 10 3   # prints 1
//   node src/calculator.js pow 2 8    # prints 256
//   node src/calculator.js sqrt 9     # prints 3

function printUsageAndExit() {
  console.error("Usage: node src/calculator.js <operation> <num1> [<num2>] ");
  console.error("Operations: add (+), sub (-), mul (*), div (/), mod (%), pow, sqrt");
  process.exit(1);
}

const { add, sub, mul, div, mod, pow, sqrt } = require('./calculator-lib');

const [, , opRaw, ...args] = process.argv;
if (!opRaw) {
  printUsageAndExit();
}

const op = opRaw.toLowerCase();

function parseNumberOrExit(val) {
  const n = Number(val);
  if (!Number.isFinite(n)) {
    console.error('Invalid numeric input. Provide valid integers or floating-point numbers.');
    process.exit(1);
  }
  return n;
}

let result;
try {
  switch (op) {
    case 'add':
    case '+': {
      if (args.length < 2) printUsageAndExit();
      result = add(args[0], args[1]);
      break;
    }
    case 'sub':
    case '-': {
      if (args.length < 2) printUsageAndExit();
      result = sub(args[0], args[1]);
      break;
    }
    case 'mul':
    case 'x':
    case '*': {
      if (args.length < 2) printUsageAndExit();
      result = mul(args[0], args[1]);
      break;
    }
    case 'div':
    case '/': {
      if (args.length < 2) printUsageAndExit();
      result = div(args[0], args[1]);
      break;
    }
    case 'mod':
    case '%': {
      if (args.length < 2) printUsageAndExit();
      result = mod(args[0], args[1]);
      break;
    }
    case 'pow':
    case 'power':
    case '^': {
      if (args.length < 2) printUsageAndExit();
      result = pow(args[0], args[1]);
      break;
    }
    case 'sqrt':
    case 'squareroot': {
      if (args.length < 1) printUsageAndExit();
      result = sqrt(args[0]);
      break;
    }
    default:
      console.error(`Unknown operation: ${opRaw}`);
      printUsageAndExit();
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}

// Print result to stdout
console.log(result);
process.exit(0);
