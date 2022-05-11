const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
);

console.log('sum:', sum);

const product = numbers.reduce(
  (previousValue, currentValue) => previousValue * currentValue,
);

console.log('product:', product);

let initial = 0;
const balance = account.reduce(
  function (acc, current) {
    if (current.type === 'deposit') {
      return acc + current.amount;
    } else {
      return acc - current.amount;
    }

  }, initial
)

console.log('balance:', balance);

const composite = traits.reduce((acc, current) => Object.assign(acc, current));
console.log('composite:', composite);
