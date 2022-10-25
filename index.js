import fetch from "node-fetch";
let url = "https://ghibliapi.herokuapp.com/people"
let myPromise = new Promise((resolve, reject) => {
    fetch("https://ghibliapi.herokuapp.com/people")
        .then((respons) => respons.json())
        .then((data) => {
            if (data) {
                resolve(data)
            }
            else {
                reject('Something went Wrong')
            }
        })
})

myPromise.then((data) => {
    const name = data.map(person => person.name).join("\n");
    console.log(name);
}).catch((err) => { console.log(err); })



