const basicOps = {
  add: (a, b) => Number(a) + Number(b),
  subtract: (a, b) => Number(a) - Number(b),
  multiply: (a, b) => Number(a) * Number(b),
  divide: (a, b) => (b !== 0 ? Number(a) / Number(b) : "Cannot divide by 0"),
};

const advancedOps = {
  root: (a) => Math.sqrt(a),
  pow: (a, b) => Math.pow(a, b),
  factorial: (a) => {
    if (a <= 0) return "Number must be greater than 0";
    let f = 1;
    for (let i = 1; i <= a; i++) {
      f *= i;
    }
    return f;
  },
};
const trigonometryOps = {
  cos: (a) => Math.cos(a),
  sin: (a) => Math.sin(a),
  tan: (a) => Math.tan(a),
  acos: (a) => Math.acos(a),
  asin: (a) => Math.asin(a),
  atan: (a) => Math.atan(a),
};

const operate = (operation, expression) => {
  let sign, operationType, result;
  if (operation == "add") {
    sign = "+";
  } else if (operation == "subtract") {
    sign = "-";
  } else if (operation == "multiply") {
    sign = "*";
  } else {
    sign = "/";
  }
  if (
    operation == "add" ||
    operation == "subtract" ||
    operation == "multiply" ||
    operation == "divide"
  ) {
    operationType = basicOps;
    const [a, b] = expression.split(sign);
    result = operationType[operation](a, b);
  } else if (
    operation == "root" ||
    operation == "pow" ||
    operation == "factorial"
  ) {
    operationType = advancedOps;
    result = operationType[operation](expression);
  } else {
    operationType = trigonometryOps;
    result = operationType[operation](expression);
  }
  return { operation, expression, result };
};

module.exports = {
  operate,
};
