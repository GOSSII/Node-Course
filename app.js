const fs = require('fs')

// fs.writeFileSync('note.txt', 'My name is Dipesh.')

// fs.appendFileSync('note.txt', 'I welcome all you to my Node Learning Course');

fs.readFileSync('note')

var contents = fs.readFileSync('/note.txt', 'utf8');
console.log(contents);