type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let final_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)) {final_arr.push(arr[i])}
    }
    return final_arr
};