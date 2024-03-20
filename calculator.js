const add = (x,  y)=> x+y

const multiply = (x,  y)=> x*y

const subtract = (x,  y)=> x-y

const divide = (x, y) => {
    if (y === 0) {
        throw new Error('Division by zero');
    }
    return x / y;
};


module.exports = {
    add,
    multiply,
    subtract,
    divide
};