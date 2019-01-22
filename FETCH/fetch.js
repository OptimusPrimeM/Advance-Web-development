let button = document.querySelector("button");
let span = document.querySelector("span");
let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

/* 
button.addEventListener('click', () => {
    fetch(url, { method: "GET" })
        .then(response => {
            return response.json();
        }).then(data => {
            span.textContent = data.bpi.EUR.rate + ' EUR';
        });
});
*/

button.addEventListener('click', () => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            userId: 100,
            id: 100,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit new',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto new'
        })
    })
        .then(response => {
            return response.json();
        }).then(data => {
            span.textContent = data.bpi.EUR.rate + ' EUR';
        });
});