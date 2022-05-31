function factorialRecursive(n) {
  if (n >= 1) {
      return n * factorialRecursive(n - 1);
  }

  if(n === 0){
    return 1
  }
  return 'Factorial of a negative number does not exist!'

}

console.log(factorialRecursive(2));

console.log(factorialRecursive(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

console.log(factorialRecursive(-1000));
