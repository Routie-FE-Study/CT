function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  let result = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      let person = photo[i][j];
      if (obj[person] !== undefined) {
        sum += obj[person];
      }
    }
    result.push(sum);
  }

  return result;
}
