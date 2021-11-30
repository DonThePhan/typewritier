const sentence = 'hello there from lighthouse labs';
let delay = 0;
for (let i = 0; i < sentence.length; i++) {
  delay += 50;
  setTimeout(() => {
    let output = sentence[i];
    if (i === sentence.length - 1) output += '\n';

    process.stdout.write(output);
  }, delay);
}
