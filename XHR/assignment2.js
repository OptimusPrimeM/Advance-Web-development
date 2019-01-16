let button = document.querySelector("button");
let span =document.querySelector("span");

button.addEventListener("click", () => {

    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
       if(XHR.readyState === 4 && XHR.status === 200){

        span.textContent = JSON.parse(XHR.responseText).bpi.EUR.rate;
       }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();

});