const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if(name){
document.getElementById("name").innerText = name + " 💖";
}

function generateLink(){

const username = document.getElementById("username").value;

const link = window.location.origin + "?name=" + encodeURIComponent(username);

document.getElementById("link").innerHTML =
`<a href="${link}" target="_blank">${link}</a>`;
}