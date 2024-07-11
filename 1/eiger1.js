

function commonPrefix(strs) {
  let res = 0;
  strs.forEach(str => {

    const points = []
    for (let i = 0; i < str.length; i++) {
      const suf = str.substring(i);
      for (let j = 0; j < suf.length; j++) {
        if (suf[j] !== str[j] || suf === str) {
          points.push(suf === str ? str.length : j);
          break;
        }
        else if (j === (suf.length - 1) && suf[j] === str[j]) points.push(j + 1);
        else continue;
      }
    }

    res += points.reduce((cur, el) => cur += el, 0);
  });

  return res;
}

console.log(commonPrefix(['abcabcd']));
console.log(commonPrefix(['ababaa']));
console.log(commonPrefix(['aa']));