let promiseStatus = true;

const Promises = new Promise((resolve, reject) => {
    if(promiseStatus){
        resolve("Janji telah ditepati");
    }else{
        reject("Ingkar janji :<");
    }
});

Promises
    .then(msg => {console.log(`${msg}. Terimakasih sudah menepati janjimu`)})
    .catch(msg => {console.log(`${msg} Lain kali jangan begitu ya deck`)});
