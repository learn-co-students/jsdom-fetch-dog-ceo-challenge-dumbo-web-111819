const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function () {
  const dogImageContainer = document.getElementById("dog-image-container")
  const breedContainer = document.getElementById("dog-breeds")
  const dropDown = document.getElementById("breed-dropdown")
  let breeds = {}
  fetch(imgUrl)
    .then(r => r.json())
    .then(json => postImages(json.message))

  fetch(breedUrl)
  .then(r => r.json())
  .then(json => {
    // addBreeds(json.message)
    breeds = json.message
    addBreeds(breeds)
  })
  
  function postImages(images){
    images.forEach(function(image) {
      // dogImageContainer.innerHTML += `<img src=${image} height='100', width='100'><br>`
      let newImage = document.createElement("img")
      // let newBreak = document.createElement("break")
      newImage.setAttribute("src", image)
      newImage.setAttribute("height", "100")
      newImage.setAttribute("width", "100")
      // newImage.append(newBreak)
      // console.log(newBreak)
      dogImageContainer.append(newImage)
    })
  }

  function addBreeds(breeds) {
    Object.keys(breeds).forEach(function(breed){
      breedContainer.innerHTML += ` <li id="${breed}">${breed}</li>`
      breedContainer.addEventListener("click", function(e){
        if(e.target.id === breed) {
          // console.log(e.target)
          // e.target.setAttribute("style", "color: red")
          e.target.style = "color : red"
        }
      })
    })
  }

  
  function filterList(e) {
    let filteredBreeds = []
    Object.keys(breeds).forEach(function(breed){
      if (breed[0] === e.target.value){
        filteredBreeds[breed] = []
      }
    })
    breedContainer.innerHTML = ''
    addBreeds(filteredBreeds)
  }

  dropDown.addEventListener("change", filterList)
})

