function multiply(...rest: number[]): number {
    let res: number = rest.reduce((sum: number, current: number): number => sum * current)

    return res
}

console.log(multiply(1, 2, 3, 4))