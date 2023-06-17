let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "post can't be blank"; //le post ne peut pas etre vide.
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};
let acceptData = () => {
    data["text"] = input.value; //ca me permet de creer des clés text avec comme valeurs ce que l'utilisateur a saisi
    console.log(data);
    createPosts();
};
let createPosts = () => {
    posts.innerHTML += `<div> 
    <p>${data.text}</p>
    <span class="options">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
    </span>
    </div> `;
    
};
