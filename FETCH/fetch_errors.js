let button = document.querySelector("button");
let url = "https://api.github.com/users/Colt";

button.addEventListener('click', function () {

    /*
    fetch(url)
        .then(response => {
            if (!response.ok)
                throw Error(404);
            else
                return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

        */

    fetch(url)
        .then(handleError)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

});

let handleError = (response) => {
    if (!response.ok)
        throw Error(404);
    else
        return response.json();
}