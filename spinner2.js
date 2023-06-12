const spinner = '|/-\\|/-\\\n';
let holdTime = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, holdTime);
  holdTime += 100;
}