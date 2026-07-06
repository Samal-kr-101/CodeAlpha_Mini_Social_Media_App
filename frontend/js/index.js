const token = localStorage.getItem("token");

const currentUser = JSON.parse(localStorage.getItem("user"));

if (!token) {
    location.href = "login.html";
}

const API = "http://localhost:5000/api/posts";

async function loadPosts() {

    const response = await fetch(API);

    const posts = await response.json();

    const container = document.getElementById("posts");

    container.innerHTML = "";

    if(posts.length===0){

container.innerHTML=`

<h3 style="text-align:center">

No Posts Yet

</h3>

`;

return;

}

    posts.forEach(post=>{

container.innerHTML += `

<div class="post-card">

    <div class="post-header">

        <div class="avatar">

            ${post.user.name.charAt(0).toUpperCase()}
        </div>

        <div>

            <h3 class="post-name">
                ${post.user.name}
            </h3>

            <p class="post-username">
                @${post.user.username}
            </p>

        </div>

    </div>

    <p class="post-caption">
        ${post.caption}
    </p>

    ${
        post.image
            ? `<img src="${post.image}" class="post-image">`
            : ""
    }

    <div class="post-footer">

        <span class="post-time">
            ${new Date(post.createdAt).toLocaleString()}
        </span>

        <span class="like-count">
            ❤️ ${post.likes.length} Likes
        </span>

    </div>

    ${
        post.user._id === currentUser._id
            ? `
        <div class="post-actions">

            <button onclick="likePost('${post._id}')" class="like-btn">
                ❤️ Like
            </button>

            <button onclick="unlikePost('${post._id}')" class="unlike-btn">
                💔 Unlike
            </button>

            <button onclick="deletePost('${post._id}')" class="delete-btn">
                🗑 Delete
            </button>

        </div>
        `
            : ""
    }

    <div class="comments-section">

        <h4>Comments</h4>

        <div id="comments-${post._id}" class="comments-list">
            Loading...
        </div>

        <div class="comment-box">

            <input
                id="input-${post._id}"
                class="comment-input"
                placeholder="Write a comment...">

            <button
                onclick="addComment('${post._id}')"
                class="comment-btn">

                Post

            </button>

        </div>

    </div>

</div>

`;


loadComments(post._id);

});

}

loadPosts();

document.getElementById("createPost").onclick = async () => {

    const body = {

        caption: caption.value,

        image: image.value,

    };

    const response = await fetch(API, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`

        },

        body: JSON.stringify(body)

    });

    const data = await response.json();

    alert(data.message);

    caption.value = "";

    image.value = "";

    loadPosts();

};

async function deletePost(id) {

    const response = await fetch(`${API}/${id}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${token}`

        }

    });

    const data = await response.json();

    alert(data.message);

    loadPosts();

}


async function loadComments(postId){

const response=await fetch(`http://localhost:5000/api/comments/${postId}`);

const comments=await response.json();

const div=document.getElementById(`comments-${postId}`);

div.innerHTML="";

comments.forEach(comment=>{

div.innerHTML += `

<div class="comment-item">

    <div>

        <strong>

            ${comment.user.name}

        </strong>

        <span>

            ${comment.text}

        </span>

    </div>

    ${
        comment.user._id === currentUser._id
            ? `
        <button
        class="comment-delete"
        onclick="deleteComment('${comment._id}','${postId}')">

        ✖

        </button>
        `
            : ""
    }

</div>

`;

});

}

async function addComment(postId){

const input=document.getElementById(`input-${postId}`);

const text=input.value;

if(text==="") return;

await fetch(`http://localhost:5000/api/comments/${postId}`,{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:`Bearer ${token}`

},

body:JSON.stringify({text})

});

input.value="";

loadComments(postId);

}

async function deleteComment(id,postId){

await fetch(`http://localhost:5000/api/comments/${id}`,{

method:"DELETE",

headers:{

Authorization:`Bearer ${token}`

}

});

loadComments(postId);

}

async function likePost(id){

await fetch(`http://localhost:5000/api/posts/like/${id}`,{

method:"PUT",

headers:{

Authorization:`Bearer ${token}`

}

});

loadPosts();

}

async function unlikePost(id){

await fetch(`http://localhost:5000/api/posts/unlike/${id}`,{

method:"PUT",

headers:{

Authorization:`Bearer ${token}`

}

});

loadPosts();

}

document
.getElementById("logoutBtn")
.onclick=()=>{

localStorage.clear();

location.href="login.html";

};

