/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here

  if(equation < 10) return equation.toString();

  let divisor = 1;
  while(equation >= divisor * 10) {
    divisor *= 10;
  }

  let firstDigit = Math.floor(equation / divisor);
  let digitRemainder = equation % divisor;
  
 if(digitRemainder === 0) {
    return (firstDigit * divisor).toString();
 } else {
    return (firstDigit * divisor) + '+' + parseNumber(digitRemainder);
 }
}

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3