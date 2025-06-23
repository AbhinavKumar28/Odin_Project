import loadContact from "./contact.js"
import loadHome from "./home.js"
import loadMenu from "./menu.js"
// console.log("hello")
let menu_button=document.getElementById("menu")
let home_button=document.getElementById("home")
let contact_button=document.getElementById("contact")
// console.log(main_div)
// let a = document.createElement("div")
// a.textContent="Welcome to the home page of the restaurant."
// let b = document.createElement("div")
// b.textContent="Please go to the Menu to see the menu."
// main_div.appendChild(a)
// main_div.appendChild(b)
loadHome()
function clearContent(){
    document.getElementById("content").innerHTML=""
}
menu_button.onclick=()=>{clearContent()
    loadMenu()}
home_button.onclick=()=>{clearContent()
    loadHome()}
contact_button.onclick=()=>{clearContent()
    loadContact()}