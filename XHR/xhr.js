let button = document.querySelector("button");
let para = document.querySelector("p");
let XHR = new XMLHttpRequest();

button.addEventListener('click', function () {

    XHR.onreadystatechange = () => {

        console.log("XHR status change into " + XHR.readyState);


        if (XHR.readyState === 4)
            if (XHR.status === 200)
                para.textContent = XHR.responseText;
            else
                console.log("Error");

    }

});


XHR.open("GET", "https://api.github.com/zen");
XHR.send(); 