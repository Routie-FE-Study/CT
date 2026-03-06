// 해시 풀이
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

// 정렬 풀이
function solution(phone_book) {
  phone_book.sort()

  for (let i = 0; i < phone_book.length - 1; i++) {
    const prefix = phone_book[i + 1].slice(0, phone_book[i].length)

    if (prefix === phone_book[i]) return false;
  }

  return true;
}