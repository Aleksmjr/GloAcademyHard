let arr = ['2123', '125156', '123123', '12512', '4231', '6854', '272543'];

for (let i = 0; i < arr.length; i++)
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }

let a;
for (let i = 2; i < 100; i++) {
  let numBoolean = true;

  for (let j = 2; j < i; j++) {
    let numberDivisor = i / j;
    if (Math.floor(numberDivisor) === numberDivisor) {
      // Если деление даёт целое число, то i не простое
      numBoolean = false;
      break; // Прерываем цикл, так как i не простое
    }
  }

  if (numBoolean) {
    console.log(`${i}: ` + `Делитель числа 1 и ${i}`);
  }
}
