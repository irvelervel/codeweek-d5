const search = function(event) {
    if(event.key === 'Enter'){
        console.log(event.target.value)
        // now I have my search string
        // I will need to grab data
        getAlbums(event.target.value)
    }
}

const getAlbums = function(searchString) {
    // searchString is "eminem", "shakira"
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchString, {
        headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMWYwNDQyNGY0NzAwMTUzZGVmY2MiLCJpYXQiOjE2MTkxNjYyNTMsImV4cCI6MTYyMDM3NTg1M30.qqMlSKGggXQ_6F_5dyAsIxEFzCFsQZUF6LHGbFMz3Is",
          },
    })
    .then(response => response.json())
    .then(songs => renderAlbums(songs))
}

const renderAlbums = function(songs) {
    // for removing any card already present
    // I need to manipulate the page
    // a two-step-process:
    // 1) target the main section
    // 2) erase its content

    // 1)
    let mainSection = document.querySelector('#main')
    // 2)
    mainSection.innerHTML = ''

    console.log(songs.data)
    // if I grab 25 songs, I need to create 25 cards
    // just a matter of creating a card 25 times

    if(songs.data.length > 0) {
        for(let c=0; c<songs.data.length; c++){

            console.log(songs.data[c].title)

            mainSection.innerHTML = mainSection.innerHTML + `
            <div class="card" id="${songs.data[c].id}">
            <div class="media">
                <img src=${songs.data[c].album.cover_big} />
                <ion-icon name="play-sharp"></ion-icon>
            </div>
            <div class="card-body">
                <p>${songs.data[c].title}</p>
                <span>${songs.data[c].artist.name}</span>
            </div>
            </div>
            `
        }

        // EXTRA AUDIO PART (not seen in class)
        const audio = document.querySelector("audio");
        const allTheAlbums = document.querySelectorAll(".card");
        for (let i = 0; i < allTheAlbums.length; i++) {
          allTheAlbums[i].onclick = function () {
            const clickedAlbum = songs.data.find(
              (alb) => alb.id.toString() === allTheAlbums[i].id
            );
            audio.src = clickedAlbum.preview;
            audio.onloadedmetadata = function () {
              audio.play();
            };
          };
        }
    } else {
        mainSection.innerHTML = "<h1>Hey! We couldn't find any result 🙀</h1>"
    }
}