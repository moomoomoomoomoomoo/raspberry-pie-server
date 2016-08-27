var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i - 0] = arguments[_i];
        }
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.divide = function (x, y) {
        return x / y;
    };
    Calculator.prototype.multiply = function (x, y) {
        return x * y;
    };
    return Calculator;
}());
var c = new Calculator();
console.log(c.add(5, 7, 9, 8, 3, 645, 524));
console.log(c.subtract(9, 5));
console.log(c.divide(6, 2));
console.log(c.multiply(2, 4));
