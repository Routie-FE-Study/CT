function solution(phone_book) {
  var map = new Map();

  for (const pNum of phone_book) {
    map.set(pNum, true);
  }

  for (const pNum of phone_book) {
    for (let i = 0; i < pNum.length; i++) {
      const prefix = pNum.slice(0, i)

      if (map.has(prefix)) return false;
    }
  }

  return true;
}