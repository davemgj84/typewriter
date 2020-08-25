const typewriter = (interval, sentence) => {
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, counter);
    counter += interval;
  }
  setTimeout(() => {
    console.log();
  }, counter);
};

typewriter(50, "Be the change you want to see in the world! <3");

module.exports = typewriter;