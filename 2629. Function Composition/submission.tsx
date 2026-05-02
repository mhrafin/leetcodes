type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        let res = x
        let i = functions.length - 1
        console.log(i)
        for (; i >= 0; i--) {
            console.log(res)
            res = functions[i](res)
            console.log(res)
        }
        return res
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */