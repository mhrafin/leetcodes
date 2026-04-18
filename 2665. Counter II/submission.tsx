type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let val = 0
    let x = {
        increment: function() {
            val = val + 1
            return val + init
        },
        decrement: function() {
            val = val - 1
            return init + val
        },
        reset: function() {
            val = 0
            return init
        }
    }
    return x
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */