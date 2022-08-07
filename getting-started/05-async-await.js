function cobaPromise() {
    return new Promise((resolve, reject) => {
        const time = 2000;
        if (time <= 5000) {
            setTimeout(() => {
                resolve(`Baris ini baru ditampilkan setelah ${time}ms.`);
            }, time);
        } else {
            reject(`${time}ms kelamaan!`);
        }
    });
}

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}

cobaAsync();

console.log(
    "\nIni adalah baris terakhir, tapi baris ini ditampilkan selagi js menunggu promise diproses.\n"
);
