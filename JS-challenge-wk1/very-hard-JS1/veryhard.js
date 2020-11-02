//////Very Hard

var _number ,_operator ,_numTwo ,_answer; 
_number = parseInt(prompt("Enter A Number"));
_operator = prompt("Enter An Operator");
_numTwo = parseInt(prompt("Enter A Second Number"));


switch (_operator) {
    case "+":
        _answer = _number + _numTwo;
        console.log(_number + " + " + _numTwo + " = " + _answer);
        break;
    case "-":
        _answer = _number - _numTwo;
        console.log(_number + " - " + _numTwo + " = " + _answer);
        break;
    case "/":
        _answer = _number / _numTwo;
        console.log(_number + " / " + _numTwo + " = " + _answer);
        break;
    case "*":
        _answer = _number * _numTwo;
        console.log(_number + " * " + _numTwo + " = " + _answer);
        break;
    default:
        console.log("Redo it");
}
