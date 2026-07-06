// const API = "http://localhost:5000/api/auth/register";

// const form = document.getElementById("registerForm");

// form.addEventListener("submit", async (e)=>{

// e.preventDefault();

// const user={

// name:name.value,

// username:username.value,

// email:email.value,

// password:password.value

// };

// const response=await fetch(API,{

// method:"POST",

// headers:{

// "Content-Type":"application/json"

// },

// body:JSON.stringify(user)

// });

// const data=await response.json();

// alert(data.message);

// if(response.ok){

// window.location.href="login.html";

// }

// });




const API = "http://localhost:5000/api/auth/register";

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch(API, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {
            window.location.href = "login.html";
        }

    } catch (error) {

        console.error(error);
        alert("Server Error");

    }

});