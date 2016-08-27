class Calculator {
  add(...numbers: number[]) {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
          sum += numbers[i]
      }
      return sum;
  }

  subtract(...numbers: number[]) {
      var dif = 0;
      for (var i = 0; i < numbers.length; i++) {
          dif -= numbers[i]
      }
      return dif;
  }

  divide(...numbers: number[]) {
      var quo = 0;
      for (var i = 0; i < numbers.length; i++) {
          quo /= numbers[i]
      }
      return quo;
  }

  multiply(numbers: number[]){
      var pro = 0;
      for (var i = 0; i < numbers.length; i++) {
          pro *= numbers[i]
      }
      return pro;
  }
}



var c = new Calculator();

console.log(c.add(5, 7, 9, 8, 3, 645, 524));

console.log(c.subtract(9, 5));

console.log(c.divide(6, 2));

console.log(c.multiply(2, 4));