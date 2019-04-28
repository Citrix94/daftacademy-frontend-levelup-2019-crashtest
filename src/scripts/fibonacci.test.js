const fib = require('./fibonacci');

describe('Check Fibonacci generator', () => {

    it('Fibonacci generator is definied', () => {
        expect(fib()).toBeDefined();
    });

    it('Fibonacci list has 0 at first position of array', () => {
        expect(fib(1)).toContain(0);
    })

    it('Length of array is this same as num argument', () => {
        expect([...fib(10)]).toHaveLength(10);
    });

    it('Ten first numbers is compatible with fibonacci rules', () => {
        expect([...fib(10)].reverse()).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

});