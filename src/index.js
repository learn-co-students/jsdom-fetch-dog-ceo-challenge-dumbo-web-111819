console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",function(){
    loadImages();
    loadBreeds();
    dropMenuFunction();
    let breeds = []
    let newDogUl = document.createElement('ul')
})


function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(r => r.json())
    .then ((dogArr) => {
        
        dogArr.message.forEach(dogItemUrl => {
            takeJSONHTML(dogItemUrl)
            
            
            
            // newDogUl.appendChild(newDogLi)
            
            
        })
    })
}
function takeJSONHTML(dogItemUrl){
    let imageDog = document.getElementById("dog-image-container")
    let newDogImg = document.createElement("img")
    let newDogUl = document.createElement('ul')
    newDogImg.src = dogItemUrl
    newDogUl.appendChild(newDogImg)
    imageDog.appendChild(newDogUl)
    
}


function loadBreeds(){
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(r=> r.json())
    .then((breedArr)=> {
        // debugger
        let breedObj = breedArr.message
        breeds = Object.keys(breedObj);
        breeds.forEach(breed =>{
             takeJSONBreeds(breed)
        
        });
           
          
       
        
        
        
    })
    
}
function takeJSONBreeds(breedObj){
   let breedUl =document.getElementById("dog-breeds")
let newBreedLi = document.createElement("li")

newBreedLi.innerText = breedObj
breedUl.appendChild(newBreedLi)
newBreedLi.addEventListener("click", function(){
newBreedLi.style.color = 'red'

})
}

function dropMenuFunction() {
    let newDogUl = document.getElementById("dog-breeds")
   let dropBreedUl = document.getElementById("breed-dropdown")
    dropBreedUl.addEventListener("change", function(evt){
    newDogUl.innerText = ""
     breeds.forEach( breed =>{
         if ( breed[0]=== evt.target.value) {
             //   debugger
       const li = document.createElement("li")
       li.setAttribute('class','breed')
       li.innerText = breed
        newDogUl.appendChild(li)
       
   
}
     } 
        )
      
   })

  }
