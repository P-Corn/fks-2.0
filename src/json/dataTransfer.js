const fs = require('fs');

let data = fs.readFileSync('./src/json/data.json');
let content = JSON.parse(data);
console.log(content);

const testObj = {
    round3000: {
        forks: 3,
        knives: 2
    }
}

let currentGame = content.scoreCards[scoreCards.lenght - 1];

let newData = JSON.stringify(content);

fs.writeFile('./src/json/data.json', newData, (err) => (
    console.log(err)
))