const imgUrl = "https://dog.ceo/api/breeds/list/all"
let thePromisedObj = fetch(imgUrl)
document.addEventListener("DOMContentLoaded", (event) => {
    thePromisedObj.then(r => r.json()) 
    .then(turnJSonToHTML)
    let selection = document.querySelector('#breed-dropdown')
    selection.addEventListener('change', (event) => {
        console.log(selection.value)
        let breeds = document.querySelectorAll("li")
        breeds.forEach(function(element){
            if(element.innerText.startsWith(selection.value)){
                element.style.display = ""
            }
            else{
                element.style.display = "none"
            }
        })
    }  )
  })
let turnJSonToHTML = (jsonObj) => { 
    Object.keys(jsonObj.message).forEach(function(element) {
    let dogUl = document.querySelector("#dog-breeds")
    let newLi = document.createElement('li')
    newLi.innerText = element
    dogUl.append(newLi)
}      ) }