let k = [1, 2, 3, 4],
  x = 2;
var solution = function (k, x) {
  let res = [];
  const n = k.length;

  for (const i in k) {
    console.log('[AA]', k[i]);
    if (n >= 1 && n <= 100 && k[i] >= 1 && k[i] <= 100) {
      if (x > 0) {
        if (i === n - 2) {
          res.push(k[i + 1] + k[0]);
          console.log('[bb] res=', res);
        } else if (i === n - 1) {
          res.push(k[0] + k[1]);
        } else {
          res.push(Number(k[i + 1]) + Number(k[i + 2]));
          console.log('[bb2] k[i+1]=', k[i + 1]);
          console.log('[bb2] k[i+2]=', k[i + 2]);
          console.log('[bb2] res=', res);
          console.log('-----');
        }
      } else if (x < 0) {
        if (i === 1) {
          res.push(k[0] + k[n - 1]);
        } else if (i === 0) {
          res.push(k[n - 1] + k[n - 2]);
        } else {
          res.push(k[i - 1] + k[i - 2]);
        }
      } else {
        res.push(0);
      }
    }
    console.log(i, ' ', res[i]);
  }
  return res;
};

let result = solution(k, x);
console.log('result:', result);
