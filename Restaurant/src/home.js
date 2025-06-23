// import 
export default function loadHome(){
    const contentDiv = document.getElementById("content")
    const homeHeader = document.createElement("div")
    homeHeader.textContent="Welcome"
    homeHeader.classList.add("color")
    contentDiv.appendChild(homeHeader)
    const homeBody =document.createElement("div")
    // homeBody.textContent=""
    homeBody.classList.add("color")
    homeBody.innerHTML="<h2>Home</h2><p>Welcome to the home page of the restaurant.</p>"
    homeHeader.appendChild(homeBody)
}