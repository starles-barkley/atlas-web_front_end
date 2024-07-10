function countPrimeNumbers() {
  let primeCount = 0;

  for (let num = 2; num <= 100; num++) {
      let isPrimeNumber = true;
      for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
          if (num % divisor === 0) {
              isPrimeNumber = false;
              break;
          }
      }
      if (isPrimeNumber) {
          primeCount++;
      }
  }

  return primeCount;
}

const startTime = performance.now();
const totalPrimes = countPrimeNumbers();
const endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
console.log(`Number of prime numbers between 2 and 100: ${totalPrimes}`);