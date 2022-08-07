const fs = require('fs');


fs.writeFileSync('06-write-text-sync.txt', 'Hello World Secara Synchronous!');
fs.writeFile('06-write-text-async.txt', 'Hello World Secara Asynchronous!', (err) => {
    if (err) throw err;
    console.log('Sukses menulis di 06-write-text-async.txt');
});

const textSync = fs.readFileSync('./06-write-text-sync.txt', 'utf-8');

fs.readFile('./06-write-text-async.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(`Isi text-async: ${data}`);
    console.log('Sukses membaca file dari 06-write-text-async.txt');
});

console.log();
console.log(`Isi text-sync : ${textSync}`);