const myLibrary = []; //has book object as elements
// const crypto = require('crypto')

function Book(name,price,author,readornot=false) {

  // the constructor...
  this.id=crypto.randomUUID()
  this.name=name
  this.price=price
  this.author=author
  this.readornot=readornot
  console.log(this.id)
}
a= new Book("o",80,"p")
function addBookToLibrary(book) {
  // take params, create a book then store it in the array
  myLibrary.push(book);
  return book;
}
addBookToLibrary(a)
b= new Book("m",90,"l")
addBookToLibrary(b)
// console.log(myLibrary)
function loopThroughArray(){
  myLibrary.forEach(x => console.log(x))      
}
loopThroughArray()
const dialog = document.getElementById("dialog");
const showButton = document.getElementById("show");
const closeButton = document.getElementById("close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
