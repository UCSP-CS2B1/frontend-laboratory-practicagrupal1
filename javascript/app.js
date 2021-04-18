// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(int[] numbers) {

    //Write your code here
    intv b,temp;
    for(int i=1;i<numbers.size();i++)
    {
        temp=numbers[i];
        for(int j=i-1;&j>=0 && numbers[j]>temp;j--){
            numbers[j+1]=numbers[j];
            numbers[j]=temp;
        }
    }

    return [-1];
}


// Param number: single integer
// Returns a single integer
function factorial(number) {

    //Write your code here
    var total=1;
    for(i=1 ; i<=number;i++){
        total=total*i;
    }
    return total;
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
    
        if (number <= 1) return 1;
      
        return fibonacci(number - 1) + fibonacci(number - 2);
}

// Param expression: string containing a mathematical expression
// Returns an integer value

function evaluation(operacion)
{

    var sumador = 0;

    for (var i = 0; i < operacion.length; i++) {
        if (operacion[i] == "*") {
            var uno = operacion[i - 1];
            var dos = operacion[i + 1];
            console.log(parseInt(uno) * parseInt(dos));
        }

        if (operacion[i] == "/") {
            var uno = operacion[i - 1];
            var dos = operacion[i + 1];
            console.log(parseInt(uno) / parseInt(dos));
        }

        if (operacion[i] == "+") {
            var uno = operacion[i - 1];
            var dos = operacion[i + 1];
            console.log(parseInt(uno) + parseInt(dos));
        }

        if (operacion[i] == "-") {
            var uno = operacion[i - 1];
            var dos = operacion[i + 1];
            console.log(parseInt(uno) - parseInt(dos));
        }
    }
}

evaluacion("5*4-2");



if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
