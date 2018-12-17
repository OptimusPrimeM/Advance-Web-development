/* get */
document.querySelector("button:nth-of-type(1)").addEventListener("click", function () {

    $.get("https://api.github.com/zen")
        .done(function (data) {
            console.log(data);
        })
        .fail(function () {
            console.log("fail");
        });
});


/*POST*/ 

document.querySelector("button:nth-of-type(2)").addEventListener("click", function () {

    let data = {
        name:"Optimus prime",
        age: 20
    };

    $.post("https://api.github.com/zen", data)
        .done(function (data) {
            console.log(data);
        })
        .fail(function () {
            console.log("fail");
        });
});

/*getJson*/ 
document.querySelector("button:nth-of-type(3)").addEventListener("click", function () {

    $.getJSON("https://api.github.com/zen")
        .done(function (data) {
            console.log(data);
        })
        .fail(function () {
            console.log("fail");
        });
});