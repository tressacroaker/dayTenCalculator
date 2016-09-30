
var add = function(n1,n2) {
  return n1+n2;
};

var subtract = function(n1,n2) {
  return n1-n2;
};

var divide = function(n1,n2) {
  return n1/n2;
};

var multiply = function(n1,n2) {
  return n1*n2;
};

var answer = function(n1,n2,cb) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  if(cb == "add"){
    cb = add;
  } else if (cb == "subtract"){
    cb = subtract;
  } else if (cb == "multiply"){
    cb = multiply;
  } else if (cb == "divide") {
    cb = divide;
  }
  var answervalue = cb(n1,n2);
  document.getElementById('answer').textContent = answervalue;
};




// document.getElementById("submitButton").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
// }

// document.getElementById(numberOne).value =
