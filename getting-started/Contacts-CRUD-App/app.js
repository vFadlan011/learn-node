const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
const dataURL = './data/data.json';

if (!fs.existsSync(dataURL)){
    fs.writeFileSync(dataURL, '[]', 'utf-8')
}

const data = fs.readFileSync(dataURL, 'utf-8');
const contacts = JSON.parse(data);

let contact = {};

rl.question('Masukkan Nama : ', (nama) => {
    rl.question('Masukkan Alamat : ', (alamat) => {
        rl.question('Masukkan Nomor Telepon : ', (noTelepon) => {
            rl.question('Masukkan E-Mail : ', (email) => {
                contact = {nama, alamat, noTelepon, email};
                
                contacts.push(contact);

                fs.writeFile(dataURL, JSON.stringify(contacts), (err, data) => {
                    if (err) throw err;
                    
                    console.log(`Kontak ditambahkan dengan:
                    Nama : ${contact.nama}
                    Alamat : ${contact.alamat}
                    Nomor Telepon : ${contact.noTelepon}
                    E-Mail : ${contact.email}`);
                })
                rl.close();
            });
        });
    });
});
