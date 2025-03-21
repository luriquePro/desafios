var reduce = function (nums, fn, init) {
  return nums.reduce((acc, curr) => fn(acc, curr), init);
};

const init = 0;
const nums = [1, 2, 3, 4];
const fn1 = function sum(accum, curr) {
  return accum + curr * curr;
};

console.log(reduce(nums, fn1, init));
