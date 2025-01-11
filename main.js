let num = 266219;
// превращаем числа в строку и разделяем их на массивы
let nums = num.toString().split('');
// превращаем эти массивы в числа
nums = nums.map(Number);
// проверяем что все получилось
console.log(nums);

let numberResult = 1;

for (let i = 0; i < nums.length; i++) {
  numberResult *= nums[i];
}
let sum = numberResult ** 3;

console.log(String(sum).slice(0, 2));
