const API="http://localhost:5000/api/auth/login";

const form=document.getElementById("loginForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const user={

email:email.value,

password:password.value

};

const response=await fetch(API,{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(user)

});

const data=await response.json();

if(response.ok){

localStorage.setItem("token",data.token);

localStorage.setItem("user",JSON.stringify(data.user));

alert("Login Successful");

window.location.href="index.html";

}

else{

alert(data.message);

}

});