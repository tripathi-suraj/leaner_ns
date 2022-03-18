// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
//Callback

function arrayFnc(arr, cb) {
  arr.push(100);
  cb();
}

var ar = [2, 2, 3, 4, 5, 6];
arrayFnc(ar, function () {
  console.log('hete', ar);
});

//reverse the string
var string = 'Welcome to this Javascript Guide!';
//console.log(string.length);

function revString(string, cb) {
  var rev = '';
  for (i = string.length; i >= 0; i--) {
    rev += string[i];
  }
  cb(null, rev);
}

revString(string, function (err, data) {
  console.log(data);
});

var revs = string.split('').reverse().join('');
console.log(revs);

//Check array or object
var arrayList = {
  name: 'suraj',
  age: '33',
  gen: 'M',
};
var a = 1;
console.log(Object.prototype.toString.call(a));

//How to empty an array;

var b = [2, 3, 4, 4, 5];
c = b;
console.log(b);
b = [];
console.log(b, c);
