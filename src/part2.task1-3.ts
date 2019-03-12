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
