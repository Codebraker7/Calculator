var buttons = document.getElementsByClassName("btn");
var display = document.getElementById("display");
var operator1 = 0;
var operator2;
var operand;

for(var i = 0;i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var clicked = $(this).text();
        // alert(clicked);
        switch(clicked){
            case '+' :
                if(operand == null){
                    operand = '+';
                    operator1 = display.innerText;
                    display.innerText = '';
                } else if(operand != null){
                    operator2 = display.innerText;
                    operator1 = eval(operator1 + operand + operator2);
                    display.innerText = '';
                    operand = '+';
                    operator2 = null;
                }
                break;
            case '-' :
                if(operand == null){
                    operand = '-';
                    operator1 = display.innerText;
                    display.innerText = '';
                } else if(operand != null){
                    operator2 = display.innerText;
                    operator1 = eval(operator1 + operand + operator2);
                    display.innerText = '';
                    operand = '-';
                    operator2 = null;
                }
                break;
            case '*' :
                if(operand == null){
                    operand = '*';
                    operator1 = display.innerText;
                    display.innerText = '';
                } else if(operand != null){
                    operator2 = display.innerText;
                    operator1 = eval(operator1 + operand + operator2);
                    display.innerText = '';
                    operand = '*';
                    operator2 = null;
                }
                break;
            case '/' :
                if(operand == null){
                    operand = '/';
                    operator1 = display.innerText;
                    display.innerText = '';
                } else if(operand != null){
                    operator2 = display.innerText;
                    operator1 = eval(operator1 + operand + operator2);
                    display.innerText = '';
                    operand = '/';
                    operator2 = null;
                }
                break;
            case '+/-' :
                display.innerText *= -1;
                break;
            case '%' :
                display.innerText /= 100;
                break;
            case '=' :
                operator2 = display.innerText;
                if(operand == '/' && operator2 == '0'){
                    display.innerText = 'Error';
                }
                else{
                    display.innerText = eval(operator1 + operand + operator2);
                    operator1 = display.innerText;
                }
                break;
            case 'AC' :
                display.innerText = '';
                operator1 = 0;
                operand = null;
                operator2 = null;
                break;
            case '.' :
                display.innerText += '.';
                break;
            case '0':
                display.innerText += "0";
                break;
            case '1':
                display.innerText += "1";
                break;
            case '2':
                display.innerText += "2";
                break;
            case '3':
                display.innerText += "3";
                break;
            case '4':
                display.innerText += "4";
                break;
            case '5':
                display.innerText += "5";
                break;
            case '6':
                display.innerText += "6";
                break;
            case '7':
                display.innerText += "7";
                break;
            case '8':
                display.innerText += "8";
                break;
            case '9':
                display.innerText += "9";
                break;
        }
    });
}