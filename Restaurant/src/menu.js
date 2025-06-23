// import 
export default function loadMenu(){
    const contentDiv = document.getElementById("content")
    const menuHeader = document.createElement("div")
    menuHeader.textContent="Menu"
    menuHeader.classList.add("color")
    contentDiv.appendChild(menuHeader)
    const menuBody =document.createElement("li")
    menuBody.classList.add("color")
    // menuBody.innerHTML=""
    menuBody.innerHTML="<ol>1. Roti</ol><ol>2. Dal</ol><ol>3. Salad</ol>"
    menuHeader.appendChild(menuBody)
}