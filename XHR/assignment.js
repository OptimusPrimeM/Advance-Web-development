let button = document.querySelector("button");
let image = document.querySelector("img");

button.addEventListener('click', function () {

    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            let response = JSON.parse(XHR.response);
            image.setAttribute("src", response.message);
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();

});