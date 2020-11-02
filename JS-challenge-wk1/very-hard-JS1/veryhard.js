//////Very Hard

var number = prompt("Enter A Number?");
var operator = prompt("Enter An Operator?");
var number2 = prompt("Enter A Second Number?");
// var answer number = ;


switch 
(operator)
 {
    case "-":
        answer = number - number2;
        console.log(number + " - " + number2 + " = " + answer);
        break;
    case "/":
        answer = number / number2;
        console.log(number + " / " + number2 + " = " + answer);
        break;
    case "*":
        answer = number * number2;
        console.log(number + " * " + number2 + " = " + answer);
        break;
    case "+":
        answer = number + number2;
        console.log(number + " + " + number2 + " = " + answer);
        break;
    default:
        console.log("Redo it");
}