const NASA_API_KEY = config.NASA_API_KEY

fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h1').innerText += data.title
        document.querySelector('img').classList.toggle('hidden')
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

fetch('https://images-assets.nasa.gov/video/Space-Exploration-Video-1/collection.json')
    .then(res => res.json())
    .then(data => {
        document.querySelector('iframe').classList.toggle('hidden')
        document.querySelector('iframe').src = data[4]
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
