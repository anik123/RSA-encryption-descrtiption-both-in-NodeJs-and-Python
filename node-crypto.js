const NodeRSA = require('node-rsa');
var fs = require("fs");

function print(msg){
    console.log(msg)
}

const key = new NodeRSA({b: 1024});

var contents = fs.readFileSync("/home/anik/Desktop/Tutorial-Multi Node/Code/encrypted.txt");
print(contents);

var fsPri = fs.readFileSync("/home/anik/Desktop/Tutorial-Multi Node/Code/privateKey.txt",'utf8');
print(fsPri);

var fsPub = fs.readFileSync("/home/anik/Desktop/Tutorial-Multi Node/Code/publicKey.txt",'utf8');
print(fsPub)

const testPri = new NodeRSA(fsPri);

print(testPri);

const decrypt1 = testPri.decrypt(contents, 'utf8');

print(decrypt1)
