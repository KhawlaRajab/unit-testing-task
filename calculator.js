'use strict';

const calc = function (...args) {
    let operator = [], operand = [];

    for (let i = 1; i < args.length; i += 2){
        if (typeof (args[i - 1]) != 'number') 
            throw new Error('Invalid input type');   
        // console.log(args[i]);
        let res = 0;
        switch (args[i]) {
            case '/':{
                if (args[i + 1] == 0) throw new Error('Division by zero');                    
                else {
                    res = args[i - 1] / args[i + 1];
                    args[i + 1] = res;
                }
                break;
            }
            case '*': {
                res = args[i - 1] * args[i + 1];
                args[i + 1] = res;
                break;
            }  
            case '+':
            case '-': {
                if (args[i-1] > 1000) {
                    args[i - 1] = 0;
                }
                operand.push(args[i - 1]);
                operator.push(args[i]);
                break;
            }      
            default: throw new Error('Invalid operator');    
                
        }
                    
    }
    operand.push(args[args.length - 1]);
    // console.log(operand);
    // console.log(operator);

    let result=operand[0];
    for (let i = 0; i < operator.length ; i++){
        // console.log(operator[i]);
        if (operand[i] > 1000) operand[i] = 0;
        if (operator[i] == '-') result-= operand[i + 1];
        else result+=operand[i + 1];
    }
    console.log(result);
    return result;
}

calc(1, '+', 2, '*', 3, '/', 6);
calc(1001, '-', 2);
calc(1001, '+', 2);

module.exports = calc;