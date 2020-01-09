
document.addEventListener("DOMContentLoaded",(event) => {
    
    imgCreator()
    breedLister()
    let searchLetter = document.querySelector("#breed-dropdown")
    console.log(searchLetter)
    // searchLetter.addEventListener("click",function())
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




function imgCreator(){
    let imgDiv = document.querySelector("#dog-image-container")
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(obj => {
        obj.message.forEach(function(element){
        newImgTag = document.createElement("img")
        newImgTag.src = element
        // newImgTag.alt= "Test"
        
      
        imgDiv.append(newImgTag)
       
        })
       
    })
}



function breedLister (){
    let ulTag = document.querySelector("#dog-breeds")
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(obj => {
        Object.keys(obj.message).forEach(function(element){
        newLi = document.createElement("li")
        newLi.innerText = element
        ulTag.append(newLi)
        })
      
 
       
    })
    
    ulTag.addEventListener("click",function(e){ 
        if(e.target.tagName === "LI"){
            if(e.target.style.color === "green"){  
                    e.target.style.color = "red"
            }
            else{
                e.target.style.color = "green"
                }
            }
    })


}

// obj.messages

