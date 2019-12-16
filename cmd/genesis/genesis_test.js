const Utils = require("../../src/utils/utils.js");

let fs = require('fs'),
    filename = '/home/johnson/Projects/genesis/cmd/genesis/dartanian.txt';
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data)
});

Utils.Logger('X-Genesis running on:\n');

Utils.Logger(`${Utils.Os.type()} ${Utils.Os.arch()}`, 'd');

