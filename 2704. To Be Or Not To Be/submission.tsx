type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    let x = {
        toBe: function (another_value: any) {
            if (val === another_value) {
                return true
            } else {
                throw "Not Equal"
            }
        },
        notToBe: function (another_value: any) {
            if (val !== another_value) {
                return true
            } else {
                throw "Equal"
            }
        }
    }
    return x
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */