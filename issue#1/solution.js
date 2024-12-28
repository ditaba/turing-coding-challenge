let k = [1, 2, 3, 4],
  x = 2;
var solution = function (k, x) {
  let res = [];
  const n = k.length;
  if (n < 1 || n > 100) return res;
  if (x < -(n - 1) || x > n - 1) return res;
  for (let i = 0; i < n; i++) {
    if (k[i] < 1 || k[i] > 100) return res;
  }
  for (let i = 0; i < n; i++) {
    if (x > 0) {
      res[i] = 0;
      for (let j = 1; j <= x; j++) {
        console.log("i+j=", i + j);
        console.log("i+j-n=", i + j - n);
        console.log("res[i]=", res[i]);
        if (i + j < n) {
          res[i] = res[i] + k[i + j];
          console.log("k[i+j]=", k[i + j]);
        }
        if (i + j >= n) {
          res[i] = res[i] + k[i + j - n];
          console.log("k[i+j-n]=", k[i + j - n]);
        }
        console.log("----");
      }
    } else if (x < 0) {
      res[i] = 0;
      for (let j = 1; j <= -x; j++) {
        if (i + n - j < n) {
          res[i] = res[i] + k[i + n - j];
        }
        if (i + n - j >= n) {
          res[i] = res[i] + k[i - j];
        }
      }
    } else {
      res[i] = 0;
    }
  }
  return res;
};

let result = solution(k, x);
console.log("result:", result);
