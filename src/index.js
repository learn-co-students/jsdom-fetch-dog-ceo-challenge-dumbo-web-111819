// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let thePromisedObject = fetch(imgUrl)
let otherPromisedObject = fetch(breedUrl)
document.addEventListener('DOMContentLoaded', (event) => {
  thePromisedObject.then(r => r.json()).then(jsonObj => {
    jsonObj.message.forEach (function(element) {
      let newImageTag = document.createElement("img")
      newImageTag.src = element
      let dogUl = document.querySelector('#dog-breeds')
      let newLi = document.createElement('li')
      newLi.append(newImageTag)
      dogUl.append(newLi)
    })
    })
    otherPromisedObject.then(r => r.json()).then(jsonObj => {
      Object.keys(jsonObj.message).forEach (function(element) {
        let dogUl = document.querySelector('#dog-breeds')
        let newLi = document.createElement('li')
        newLi.innerText = element
        dogUl.append(newLi)
        })
        // if the value of breed-dropdown is equal to value user selects then show all of
        // the dog breeds for that value
        let dropdown = document.getElementById('breed-dropdown')
        dropdown.addEventListener('change', (event) => {
          console.log(dropdown.value)
          let breeds = document.querySelectorAll('li')
          breeds.forEach(function(element) {
            if(element.innerText.startsWith(dropdown.value)) {
              element.style.display = ''
            } else {
              element.style.display = 'none';
            }
          })
          })
      })
      let myUl = document.getElementById('dog-breeds')
      myUl.addEventListener('click', (event) => {
        event.target.style.color = 'red'
      })
    }
  )
