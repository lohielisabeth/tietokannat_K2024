const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tarkistaPalindromi(word) {
    
    const annettuSana = word.toLowerCase().replace(/\s/g, '');
    
    const kaannettySana = annettuSana.split('').reverse().join(''); //Käännetään sana ympäri ja verrataan 
                                                                    //annettuun sanaan
    return annettuSana === kaannettySana;
}
rl.question("Syötä sana: ", function(word) {
    if (tarkistaPalindromi(word)) { 
        console.log(`${word} on palindromi.`);
    } else {
        console.log(`${word} ei ole palindromi.`);
    }
    rl.close();
});