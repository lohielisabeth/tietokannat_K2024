const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Anna ensimmäinen luku: ', (luku1) => {
  rl.question('Anna toinen luku: ', (luku2) => {
    luku1 = parseFloat(luku1);
    luku2 = parseFloat(luku2);

    if (!isNaN(luku1) && !isNaN(luku2)) {
      console.log("Suurempi annettu luku on:", Math.max(luku1, luku2));
    } 
    rl.close();
  });
});
