const { pertanyaan, createData } = require("./contact.js");

const main = async () => {
    nama = await pertanyaan("Masukkan nama : ");
    alamat = await pertanyaan("Masukkan alamat : ");
    noTelepon = await pertanyaan("Masukkan nomor telepon : ");
    email = await pertanyaan("Masukkan email : ");

    createData(nama, alamat, noTelepon, email);
};

main();
