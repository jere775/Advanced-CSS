//medium

let month,number,answer,Response;

month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
answer = null;
response = "Pick a number from 1-12";

number = parseInt(prompt('Enter Number'));

switch (number){
    case 1:
        answer = month[0];
        console.log(answer)
        break;
    case 2:
        answer = month[1];
        console.log(answer)
        break;
    case 3:
        answer = month[2];
        console.log(answer)
        break;
    case 4:
        answer = month[3];
        console.log(answer)
        break;
     case 5:
        answer = month[4];
        console.log(answer)
        break;
    case 6:
        answer = month[5];
        console.log(answer)
        break;
    case 8:
        answer = month[6];
        console.log(answer)
        break;
    case 9:
        answer = month[7];
        console.log(answer)
        break;
    case 10:
        answer = month[8];
        console.log(answer)
        break;
    case 11:
        answer = month[9];
        console.log(answer)
        break;
    case 12:
        answer = month[10];
        console.log(answer)
        break;    
default:
    alert(response);       
}