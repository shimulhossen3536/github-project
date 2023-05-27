alert("Hello world Iam Md shimul and you are in the my world ha ha ha you are all hacked")




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
});



let login_form=document.getElementById("login_form");

document.getElementById("login_form").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log('hello world');



})
