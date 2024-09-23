// C1-A2
// I would add the step by step instruction said in the module, so there would be less confusion on what I'm doing

// 1. Develop a program initializing 4 variables [a, b, c, d] and 1 constant [e], store the following values:
let a = 25;       
let b = 20;       
let c = 12;          
let d = "15";         
const e = 15;

/* 2. then, display the following results of the required tasks below:
        a. Display the sum of the declared variables [a,b,c,d] and constant [e] combined. */

        let sum = a + b + c + Number(d) + e;  // I add everything like the module said, Also convert the 'd' to integer
        console.log("Result:", sum, '\n');

        //b. Compare the values of variable d and constant e using relational operators [>, <, =>, <=, and ===], then display the results.

        console.log("d > e:", Number(d) > e);    
        console.log("d < e:", Number(d) < e);        
        console.log("d >= e:", Number(d) >= e);     
        console.log("d <= e:", Number(d) <= e);     
        console.log("d === e:", Number(d) === e, '\n');  
        
        //c. Declare new variables to store the result/s of the following operations, then after, display the results:
            //1. Subtract all the values of the declared variables.
                let subtraction = a - b -c-Number(d)-e;

            //2. Multiply the values of variable a and c, divided by constant e.
                let multplyDivision = a * c / e;  

            //3. Display the exponent value of constant e raise to the power of variable c.
                let power = e ** c;

            //4. Reassign the value of c.3 to constant e, then display the result.
                c = e;

                console.log('Subtraction Result:', subtraction);
                console.log('Multiply and Devision Result:', multplyDivision);
                console.log('E Raise to power of C Results:', power);
                console.log('Reassign Result:', c);
