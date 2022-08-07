const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const pertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (value) => {
            resolve(value);
        });
    });
};

const createData = (nama, alamat, noTelepon, email) => {
    const dataURL = "./data/data.json";

    if (!fs.existsSync(dataURL)) {
        fs.writeFileSync(dataURL, "[]", "utf-8");
    }

    const data = fs.readFileSync(dataURL, "utf-8");
    const contacts = JSON.parse(data);
    let contact = {};

    contact = { nama, alamat, noTelepon, email };
    contacts.push(contact);

    fs.writeFile(dataURL, JSON.stringify(contacts), (err, data) => {
        if (err) throw err;

        console.log("Berhasil menambahkan data");
    });
    rl.close();
};

module.exports = { pertanyaan, createData };
