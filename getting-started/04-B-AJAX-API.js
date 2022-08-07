const url = 'https://jsonplaceholder.typicode.com/users';

const ajax = new XMLHttpRequest();
ajax.onload = () => {
    if (ajax.status==200){
        const response = JSON.parse(ajax.responseText);
        console.log(response);
    }else{
        console.log(`server response : ${ajax.status}`);
    }
}

ajax.onerror = () => {
    console.log('An Error occured, unable to process request.');
    console.log(ajax.responseText);
}

ajax.open('GET', url, true);
ajax.send();