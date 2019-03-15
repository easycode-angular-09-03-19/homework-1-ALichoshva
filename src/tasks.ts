// task 1(part1)
function factorial(number: number):number {
    let factorialNumber: number = number;
    for(let i: number = 1; i < number; i++) {
        factorialNumber *= i 
    }
    return factorialNumber
}

console.log(factorial(5))

// task 2(part1)
function multiply(...rest: number[]): number {
    let res: number = rest.reduce((sum: number, current: number): number => sum * current)

    return res
}

console.log(multiply(1, 2, 3, 4))

// task 3(part1)
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseString('test'))

// task 4(part1)
interface Admin {
    name: string,
    email: string,
    password: string,
    type?: string
}

// task 1-3(part2)
abstract class Car {
    protected _mileage: number;
    protected _fuel: number;

    constructor(mileage: number, fuel: number) {
        this._mileage = mileage;
        this._fuel = fuel;
    }

    public abstract drive(value: number): void;

    public abstract refuel(): void;

    public abstract get fuel(): number;

    public abstract get mileage(): number;
}

class CarInfo extends Car {
    constructor(mileage: number, fuel: number) {
        super(mileage, fuel);
    }

    public drive(value: number): void {
        this._mileage += value
        this._fuel --
        if (this._fuel <= 0) {
            console.log('нужно заправиться');
        }
    }

    public refuel(): void {
        this._fuel ++
    }

    public get fuel(): number {
        return this._fuel;
    }

    public get mileage(): number {
        return this._mileage
    }
}

let carInfo = new CarInfo(10, 5);
