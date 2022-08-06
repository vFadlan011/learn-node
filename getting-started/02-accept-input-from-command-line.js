const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

let a, n, result;
console.log("A^n");

// Jika menggunakan readline.question maka segala macam kalkulasi yang ada di dalamnya harus dilakukan di dalam fungsi callback dari readline.question
rl.question("Input A : ", base => {
    a = base;
    rl.question("Input n : ", exponent => {
        n = exponent;

        result = a ** n;
        console.log(`${a}^${n} = ${result}`)

        // readline close hanya dipanggil pada fungsi paling dalam
        rl.close();
    });
});


rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });