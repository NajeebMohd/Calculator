var button = document.getElementsByClassName('button');
var display = document.getElementById('calculator-display');
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click',function(event){
        
        var value = this.getAttribute('data-value');
        
        // if(value == '+' || value == '-' || value == '*' || value == '/'){
        //     // operator = value;
        //     // operand1 += parseFloat(display.textContent);
        //     // display.innerText = null;

        //     if(value == '+'){
        //         operator = value;
        //         operand1 += parseFloat(display.textContent);
        //         display.innerText = null;
        //     }
        //     else if(value == '-'){
        //         operator = value;
        //         if(operand1 == 0){
        //             operand1 = parseFloat(display.textContent);
        //         }else{
        //             operand1 -= parseFloat(display.textContent);
        //         }
        //         display.innerText = null;
        //     }
        //     else if(value == '*'){
        //         operator = value;
        //         if(operand1 == 0){
        //             operand1 = parseFloat(display.textContent);
        //         }else{
        //             operand1 *= parseFloat(display.textContent);
        //         }
        //         display.innerText = null;
        //     }
        //     else if(value == '/'){
        //         operator = value;
        //         if(operand1 == 0){
        //             operand1 = parseFloat(display.textContent);
        //         }else{
        //             operand1 /= parseFloat(display.textContent);
        //         }
        //         display.innerText = null;
        //     }
            

        //     console.log('inside the operator loop ');
        // }else if(value == '='){
        //     console.log('inside the equals loop..');
        //     operand2 = parseFloat(display.textContent);
        //     if(operator == '/' && operand2 == '0'){
        //         display.innerText = 'ERROR';
        //         operand1 = 0;
        //         operand2 = null;
        //         operator = null;
        //     }else{
        //         console.log(operand1,"<<---operand1           operand2--->>",operand2);
        //         var result = eval(operand1+" "+operator+" "+operand2);
        //         display.innerText = result;
        //         operand1 = result;
        //         operand2 = null;                
        //     }
        // }else if(value == 'AC'){
        //     operand1 = 0;
        //     operand2 = null;
        //     operator = null;
        //     display.innerText = null;

        // }else if(value == '%'){
        //     var ans = parseFloat(display.textContent);
        //     operand1 = eval(ans+" "+'/'+" "+"100");
        //     display.innerText = ans;
        // }else{
        //     console.log(value,'the value');
        //     display.innerText += value;
        //     console.log('inside the else st');
        // }





        // ------------------------------------------another approach for calculating ------------------------------------//
        switch(value){
            case 'AC' :
                display.innerText = '';
                break;
            case '=':
                try{                    
                    if(display.innerText.slice(-1) == '%'){     
                        let Text = display.innerText;                        

                        var ope = Text.slice(-3,Text.length-2);
                        var per = Text.slice(-2,Text.length-1)
                        var ans = eval(Text.slice(0,-3));
                        var persentage = (ans*per)/100;
                        //console.log(eval(ans+" "+ope+" "+persentage));

                        display.innerText = eval(ans+" "+ope+" "+persentage);
                    }else{
                        display.innerText = eval(display.innerText);
                    }                    
                }
                catch{
                    display.innerText = 'Error';
                }
                break;
            case 'delete':
                display.innerText = display.innerText.slice(0,-1);
                break;
            
            default:
                display.innerText += value;        

        }
        // console.log("inner funtion");
    });
    // console.log("inside forloop");
}
// console.log("outer function..");