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
        imgDiv.append(newImgTag)//'list' of dog image links appended to imgDiv container
        })
    })
}
function breedLister (){
    let ulTag = document.querySelector("#dog-breeds")
    let dpDown=document.querySelector('#breed-dropdown')
    let select
    
    // console.log(dpDown)
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(obj => {
        const filteredArray=(array,select=undefined) => {
            console.log(select)
            return select===undefined || select==="" ? array : array.filter(element=>element[0].toLowerCase()===select.toLowerCase())
        }
        let breedArray=Object.keys(obj.message)
        filteredArray(breedArray).forEach(element=>{
            let newLi = document.createElement("li")
            newLi.innerText = element
            ulTag.append(newLi)
        })
        dpDown.addEventListener('change',(e) => {
            ulTag.innerHTML=""
            select=e.target.value           
            // console.log('select',select)
            breedArray=Object.keys(obj.message)
            filteredArray(breedArray,select).forEach(element=>{
                newLi = document.createElement("li")
                newLi.innerText = element
                ulTag.append(newLi)
            })
        })
  

      
    })

    ulTag.addEventListener("click",(e)=>{ //event listener on the parent 'ul'
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



