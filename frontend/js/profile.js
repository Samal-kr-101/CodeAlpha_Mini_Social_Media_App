const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const API = "http://localhost:5000/api/users/profile";

async function loadProfile() {

    document.title=user.name;

    container.innerHTML="Loading...";

    const response = await fetch(API, {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

    const user = await response.json();

    document.getElementById("profileImage").src =
        user.profilePic || "https://via.placeholder.com/120";

    document.getElementById("name").innerText = user.name;

    document.getElementById("email").innerText = user.email;

    document.getElementById("bio").innerHTML=`

${user.bio}

<br><br>

Followers : ${user.followers.length}

<br>

Following : ${user.following.length}

`;

}

loadProfile();

document.getElementById("update").onclick = async () => {

    const body = {

        name: newName.value,

        bio: newBio.value,

        profilePic: newImage.value

    };

    const response = await fetch(API, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`

        },

        body: JSON.stringify(body)

    });

    const data = await response.json();

    alert(data.message);

    loadProfile();

};