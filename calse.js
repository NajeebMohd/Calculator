var button = document.getElementsByClassName('button');
var display = document.getElementById('calculator-display');
var operand1= 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+' || value == '-' || value == '*' || value == '/'){
            operator = value;
            operand1 += parseFloat(display.textContent);
            display.innerText = null;
        }else if(value == '='){
            operand2 = parseFloat(display.textContent);
            if(operator == '/' && operand2 == '0'){
                display.innerText = 'ERROR';
                operand1 = 0;
                operand2 = null;
                operator = null;
            }else{
                var result = eval(operand1+" "+operator+" "+operand2);
                display.innerText = result;
                operand1 = result;
                operand2 = null;                
            }
        }else if(value == 'AC'){
            operand1 = 0;
            operand2 = null;
            operator = null;
            display.innerText = null;

        }else if(value == '%'){
            var ans = parseFloat(display.textContent);
            operand1 = eval(ans+" "+'/'+" "+"100");
            display.innerText = ans;
        }else{
            display.innerText += value;
        }
        // console.log("inner funtion");
    });
    // console.log("inside forloop");
}
// console.log("outer function..");