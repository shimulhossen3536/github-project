let email=document.getElementById('email');
let names=document.getElementById('name');
let comment=document.getElementById('comment');
let reviwe=document.getElementById('reviwe');
let button=document.getElementById('button');


let submit=document.getElementById('submit');




submit.addEventListener('submit', (event) =>{
  event.preventDefault();
  if (names.value==""||email.value==""||comment.value=="") {
    return false;
  }else if (names.value=="") {
    names.style.border="1px solid red"
  }else if(email.value==""){
    email.style.border="1px solid red"
  }else if (comment.value=="") {
    comment.style.border="1px solid red"
    
  }
  let element=document.createElement('p');
  let username=document.createElement('p')
  let useremail=document.createElement('p')
  let reviwe_1=document.createElement('div')
  reviwe_1.className="rv_crad"
  element.className="crad"
  useremail.innerHTML=email.value
  username.innerHTML=names.value
  element.innerHTML=comment.value
  reviwe_1.append(username)
  reviwe_1.append(useremail)
  reviwe_1.append(element);
  reviwe.appendChild(reviwe_1)
})





// Create the dynamic div element
var dynamicDiv = document.createElement("div");
dynamicDiv.id = "myDiv";
dynamicDiv.innerHTML = "This is a permanent dynamic div element";

// Store the element in localStorage
localStorage.setItem("myDiv", dynamicDiv.outerHTML);
// Get the stored element from localStorage
var storedDiv = localStorage.getItem("myDiv");

// Create a new div element and set its content to the stored element's HTML
var restoredDiv = document.createElement("div");
restoredDiv.innerHTML = storedDiv;

// Add the restored element to the HTML page
document.body.appendChild(restoredDiv);




