const partsSums = (ls) => {
  let copyLs = ls.slice();
  let sumArr = [];
  let firstResult = 0;
  firstResult = copyLs.reduce((a, b) => {
    return a + b;
  }, 0);
  sumArr.push(firstResult);

  for (let i = 0; i < ls.length; i++) {
    sumArr.push((firstResult -= ls[i]));
  }
  return sumArr;
};

console.log(partsSums([0, 1, 3, 6, 10]));
