$("button").click(function () {

    let url = "https://jsonplaceholder.typicode.com/comments";

    axios.get(
        url,
        { params: { postId: 1 } })
        .then(response => {
            console.log(response);
        }).catch(handleError);
});


let handleError = (err) => {
    if (err.response) {
        console.log("Problem with response " + err.response.status);
    } else if (err.request) {
        console.log("Problem with request" + err.request.status);
    } else {
        console.log("Error " + err.message);
    }
}


