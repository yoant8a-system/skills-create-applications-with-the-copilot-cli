// Calculator library exporting basic arithmetic functions
// Supported operations (mirrors CLI):
// - addition (add)
// - subtraction (sub)
// - multiplication (mul)
// - division (div)

function toNumber(n) {
  const v = Number(n);
  if (!Number.isFinite(v)) {
    throw new TypeError('Invalid numeric input');
  }
  return v;
}

function add(x, y) {
  return toNumber(x) + toNumber(y);
}

function sub(x, y) {
  return toNumber(x) - toNumber(y);
}

function mul(x, y) {
  return toNumber(x) * toNumber(y);
}

function div(x, y) {
  const denom = toNumber(y);
  if (denom === 0) {
    throw new Error('Division by zero');
  }
  return toNumber(x) / denom;
}

module.exports = { add, sub, mul, div };
