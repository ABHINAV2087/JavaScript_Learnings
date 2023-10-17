// higher-order function

// ============================= Functions as Arguments ======================================

function applyOperation(num, operation) {
    return operation(num);
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x * x;
}

const result1 = applyOperation(5, double); // Result: 10
const result2 = applyOperation(5, square); // Result: 25


// ========================== Functions as Return Values ==================================

function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

const result_a = double(5); // Result: 10
const result_b = triple(5); // Result: 15
