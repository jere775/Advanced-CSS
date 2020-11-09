// //////Very Hard

// var number = prompt("Enter A Number?");
// var operator = prompt("Enter An Operator?");
// var number2 = prompt("Enter A Second Number?");

// switch 
// (operator)
//  {
//     case "-":
//         answer = number - number2;
//         console.log(number + " - " + number2 + " = " + answer);
//         break;
//     case "/":
//         answer = number / number2;
//         console.log(number + " / " + number2 + " = " + answer);
//         break;
//     case "*":
//         answer = number * number2;
//         console.log(number + " * " + number2 + " = " + answer);
//         break;
//     case "+":
//         answer = number + number2;
//         console.log(number + " + " + number2 + " = " + answer);
//         break;
//     default:
//         console.log("Redo it");
// }

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