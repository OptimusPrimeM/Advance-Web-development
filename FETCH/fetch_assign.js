let a = document.querySelector("p+a");
let name = document.querySelector("h4");
let username = document.querySelector("h5");
let email = document.querySelector("h6:nth-of-type(1)");
let city = document.querySelector("h6:nth-of-type(2)");
let image = document.querySelector("img");

let url = "https://randomuser.me/api/";


a.addEventListener("click", () => {
    fetch(url)
        .then(returnResponse)
        .then(attributeSetting)
        .catch(errorHandling);
});

let attributeSetting = (data) => {

    name.textContent = data.results[0].name.title + '. ' + data.results[0].name.first + ' ' + data.results[0].name.last;
    username.textContent = data.results[0].login.username;
    email.textContent = data.results[0].email;
    city.textContent = data.results[0].location.city;
    image.setAttribute("src", data.results[0].picture.large);

}

let errorHandling = (error) => console.log(error);

let returnResponse = (response) => { return response.json(); }
