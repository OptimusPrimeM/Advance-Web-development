let url = "https://opentdb.com/api.php?amount=1";

axios.get(url)
    .then((respond) => {
        console.log(respond.data.results[0].question);
    }).catch(err => {
        console.log(err);
    })  ;