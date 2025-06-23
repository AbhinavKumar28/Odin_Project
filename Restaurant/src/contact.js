// import 
export default function loadContact(){
    const contentDiv = document.getElementById("content")
    const contactHeader = document.createElement("div")
    contactHeader.textContent="We are at:"
    contactHeader.classList.add("color")
    contentDiv.appendChild(contactHeader)
    const contactBody =document.createElement("div")
    // contactBody.textContent=""
    contactBody.classList.add("color")
    contactBody.innerHTML="<h2>Contact</h2><p>Pune</p><p>Mumbai</p><p>New Delhi</p>"
    contactHeader.appendChild(contactBody)
}