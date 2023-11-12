const requirementclose= document.querySelector("#close-f")
const requirementbtn= document.querySelector("#requirement-f")
console.log(requirementbtn)
requirementbtn.addEventListener("click",function(){
    document.querySelector('.requirement-form').style.display = "flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.requirement-form').style.display = "none"
})