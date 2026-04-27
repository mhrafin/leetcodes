function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let final_arr = []
    for (let i = 0; i < arr.length; i++) {
        final_arr.push(fn(arr[i],i))
    }
    return final_arr
};