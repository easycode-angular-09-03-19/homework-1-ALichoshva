function factorial(number: number):number {
    let factorialNumber: number = number;
    for(let i: number = 1; i < number; i++) {
        factorialNumber *= i 
    }
    return factorialNumber
}

console.log(factorial(5))