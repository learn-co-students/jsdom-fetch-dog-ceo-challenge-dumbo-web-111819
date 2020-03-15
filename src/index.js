console.log('%c HI', 'color: firebrick')
//Elements
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const parentDiv = document.querySelector('#dog-image-container')

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulList = document.querySelector('#dog-breeds')

const dropDownList = document.querySelector('#breed-dropdown')

//Challenge 1
  fetch(imgUrl)
    .then(function(response){
     return response.json()// this should also return promise
 })
      .then(function(jsonObj){
        printImage(jsonObj)
  })

let printImage = (jsonObj)=>{
  let imgUrlArray = jsonObj.message
  imgUrlArray.forEach(function(imgUrl) {
    let imageTag = document.createElement('img')
    imageTag.src = imgUrl
    imageTag.alt = "Dog image"
    parentDiv.append(imageTag)
  })
}

//Challenge 2

fetch(breedUrl)
  .then(function(response){
   return response.json()// this should also return promise
})
    .then(function(jsonObj2){
      // printImage(jsonObj)
      printBreedList(jsonObj2)

})




function printBreedList (jsonObj2) {
  // debugger
  dropDownList.addEventListener("change", (event) => {
    ulList.innerHTML = '';
    fetch(breedUrl)
      .then(function(response){
       return response.json()// this should also return promise
    })
        .then(function(jsonObj2){
          // printImage(jsonObj)
          printBreedList(jsonObj2)

    })
  })
  let breedObj = jsonObj2.message
  let breedKeyArray = Object.keys(breedObj)
  // let breedValue = Object.values(breedObj)
  breedKeyArray = breedKeyArray.filter(el => el.startsWith(dropDownList.value))
  debugger
  breedKeyArray.forEach((breed) => {
    let liTag = document.createElement('li')
    liTag.textContent = breed
    ulList.append(liTag)

    liTag.addEventListener("click", (evt) => {
        if (evt.target.style.color === "red"){
          evt.target.style.color = "blue"
        } else {
          evt.target.style.color = "red"
        }
    })

  })

}


//
// function filterBreed(breed) {
//   dropDownList.addEventListener("change", (event) => {
//     ulList.innerHTML = ""
//
//     if(event.target.value === "a" && breed[0] === "a"){
//       // make another fetch for list of Breeds
//       // generate elements
//       return breed
//     }else if (event.target.value === "b" && breed[0] === "b") {
//           return breed
//     }else if (event.target.value === "c" && breed[0] === "c") {
//         return breed
//     }else if (event.target.value === "d" && breed[0] === "d") {
//         return breed
//     }
//
//   })
// }





// fetch(imgUrl)
//   .then(r => r.json())
//   .then(jsonObj => {
//    console.log(jsonObj);
//   })

//step 1 fetch URL from the server and it returns us Promise
// step 2 covert to JSON OBJ
// this accessing the url(array in this case)
// return value of first .then is being passed inside the second .then()
//and it is returning us the object (which is key -value pairs)
