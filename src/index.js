console.log('%c HI', 'color: firebrick')
//Returns images of dogs
let fetchImages = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => loadPics(json))
}

let loadPics = (json)=>{
    json.message.forEach(imgURL => { 
        let imgTag = document.createElement('img')
        let imgUl = document.querySelector('#dog-image-container')

        imgTag.src = imgURL
        imgUl.append(imgTag)
    });
}

// returns a list of dog breeds
let fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => loadBreeds(json))
}

let loadBreeds = (json) => {
    let breedUl = document.querySelector('#dog-breeds');
    for(let breed in json.message){
        let breedLi = document.createElement('li');
        breedLi.textContent = breed;
        breedLi.addEventListener('click', (e) => {
            breedLi.style.color = 'magenta'
        })
        breedUl.append(breedLi);
    }
}



document.addEventListener('DOMContentLoaded', event =>{
    fetchImages()
    fetchBreeds()

    //Filters the dog list based on selectioon 
    let dropDown = document.querySelector('#breed-dropdown')
    let breedList = document.querySelector('#dog-breeds')
    dropDown.addEventListener('change', (e) => {
        let breeds = document.querySelectorAll('#dog-breeds li')
        breeds.forEach(breed => breed.style.display = 'none')
        if(e.target.value === 'a'){
            let aBreeds = Array.from(breeds).filter(breed => breed.innerText[0]==='a')
            aBreeds.forEach(breed => breed.style.display='block')
        }else if(e.target.value === 'b'){
            let bBreeds = Array.from(breeds).filter(breed => breed.innerText[0]==='b')
            bBreeds.forEach(breed => breed.style.display = 'block')
        } else if(e.target.value === 'c'){
            let cBreeds = Array.from(breeds).filter(breed => breed.innerText[0]==='c')
            cBreeds.forEach(breed => breed.style.display = 'block')
        }else if(e.target.value === 'd'){
            let dBreeds = Array.from(breeds).filter(breed => breed.innerText[0]==='d')
            dBreeds.forEach(breed => breed.style.display = 'block')
        }
    })
});

