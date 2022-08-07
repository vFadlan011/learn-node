const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const data = fs.readFileSync('./07-contact-app-data.json', 'utf-8');
const contacts = JSON.parse(data);

let contact = {};

rl.question('Masukkan Nama : ', (jwbNama) => {
    rl.question('Masukkan Alamat : ', (jwbAlamat) => {
        rl.question('Masukkan Nomor Telepon : ', (jwbNoTelepon) => {
            rl.question('Masukkan E-Mail : ', (jwbEmail) => {
                contact.nama = jwbNama;
                contact.alamat = jwbAlamat;
                contact.noTelepon = jwbNoTelepon;
                contact.email = jwbEmail;
                
                contacts.push(contact);

                fs.writeFile('./07-contact-app-data.json', JSON.stringify(contacts), (err, data) => {
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
