// const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const spin = '|/-\\|/-\\|';
let time = 100;

for (let char in spin) {
  setTimeout(() => {
    process.stdout.write(`\r${spin[char]}`);
    if (Number(char) + 1 === spin.length) {
      process.stdout.write('\n');
    }
  }, time);
  time += 200;
}