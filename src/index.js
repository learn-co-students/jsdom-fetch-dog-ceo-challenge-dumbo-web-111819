//console.log('%c HI', 'color: firebrick')
//console.log(document.querySelector("#dog-image-container"))  //without defer this outputs null 
//because the index.js does know what document.querySelector is 
//with defer evaluation of the script index.js defer until the entire document is available




// document.addEventListener('DOMContentLoaded',function(){
//     //console.log("loaded page")
//     divDog=document.querySelector("#dog-image-container")
//     liBreed=document.querySelector("#dog-breeds")
// })

document.addEventListener("DOMContentLoaded",(event) => {
    imgCreator()
    breedLister()
})
function imgCreator(){
    let imgDiv = document.querySelector("#dog-image-container")
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(obj => {
        obj.message.forEach(element=>{
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


