var solution = function (cals, d, min, max) {
  let totals = 0;

  // write your solution here
  const n = cals.length;
  if (d < 1 || d > n || n > 100000) return -1;
  for (let i = 0; i < n; i++) {
    if (cals[i] < 0 || cals[i] > 20000) return -1;
  }
  if (min < 0 || min > max) return -1;

  for (let k = 0; k <= n - d; k++) {
    let total = 0;
    for (let i = 0; i <= d - 1; i++) {
      total += cals[k + i];
    }
    if (total < min) totals = totals - 1;
    else if (total > max) totals = totals + 1;
  }

  return totals;
};

let k = [1, 2, 3, 4, 5];
let d = 1;
let min = 3;
let max = 3;

const output = solution(k, d, min, max);
console.log(output);
