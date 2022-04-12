const NASA_API_KEY = config.NASA_API_KEY

fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h1').innerText += data.title
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
