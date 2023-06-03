function myRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let summ = +prompt("Ishlamoqchi bulgan misolingizning miqdorini kiriting")
while (isNaN(summ) || summ == 0) {
  summ = +prompt("Misol miqdorini raqam korinishida kiritirng")
}
for (let i = 0; i <summ ; i++) {
  let num1 = myRandom(10, 40);
  let num2 = myRandom(10, 40);
  let symbol = myRandom(0, 4);
  let masala = 0;
  if (symbol == 0) {
    masala = num1 + num2;
    symbol="+"
  } else if (symbol == 1) {
    masala = num1 - num2;
    symbol="-"
  } else if (symbol == 2) {
    masala = num1 / num2;
    symbol="/"
  } else if (symbol == 3) {
    masala = num1 * num2;
    symbol=" * "
  }
  let answer = prompt(num1 + symbol + num2)
  alert(answer == masala ? "Sizning javobingiz togri " + masala : " sizning javobingiz hato "+ answer  +" togri javob esa "+ masala)
}

