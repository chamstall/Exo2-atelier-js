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
// creation de ma fonction qui me permet de créer une div avec les icones dans des span
let createPosts = () => {
    posts.innerHTML += `<div> 
    <p>${data.text}</p>
    <span class="options">
        <i onclick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
        <i onclick="deletePost(this)" class="fa-solid fa-trash-can"></i>
        <button onclick="addBagroundColor(this)" type="button">terminer</button>
    </span>
    </div> `;
};
// suppression de la tache
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

// modification de la tache
let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

// ajout du bgc lorsqu'on appuit sur le bouton terminer
let addBagroundColor = (e) =>{
    e.parentElement.previousElementSibling.style.backgroundColor = "rgba(000,200,45,0.4)";
}

