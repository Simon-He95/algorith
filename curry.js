// 让你的函数柯里化
function __add(a, b, c, d) {
  return a + b + c + d;
}

function curry(f) {
  let g = (...args) => {
    debugger;
    if (args.length >= f.length) {
      return f(...args);
    }
    return (...more) => {
      return g(...args, ...more);
    };
  };
  return g;
}

const add = curry(__add);

// console.log(add(1, 2, 3, 4));
console.log(add(1, 2)(3)(4));
