let num = 9;

function fibonacci(nume) {
  let a = 0;
  let array = [1];
  for (let i = 0; i < nume - 1; i++) {
    if (i < 2) {
      a += array[i];
      array = [...array, a];
    } else {
      a = +(array[i - 1] + array[i]);
      array = [...array, a];
    }
  }

  return array;
}

const array_fibonacci = fibonacci(num);

console.log(array_fibonacci);
