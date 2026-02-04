const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('./09(3).txt').toString().trim().split('\n');

const chars = input[0].split('');
const strings = [];

for (let i = 0; i < chars.length; i++) {
    const temp = chars.slice(i).join('');

    strings.push(temp);
}

strings.sort().forEach((item) => console.log(item));