let url = "http://numbersapi.com"
let myFavNumber = 5;
let myFavNumbers = [1,15,22]

$.getJSON(`${url}/${myFavNumber}?json`)
    .then(response => console.log(response.text))


$.getJSON(`${url}/${myFavNumbers}?json`)
    .then(response => console.log(response))


Promise.all(
    Array.from({ length:4 }, () => {
        return $.getJSON(`${url}/${myFavNumber}?json`)
    }))
        .then(data => data.forEach(point => $("body").append(`<p>${point.text} </p>`)))



