const users = [

{
username:"admin",
password:"admin123",
role:"Administrator"
},

{
username:"jose",
password:"jose123",
role:"Manager"
},

{
username:"guest",
password:"guest123",
role:"Customer"
}

];

// LOGIN

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

let user =
users.find(u =>
u.username===username &&
u.password===password
);

if(user){

document.getElementById("loginPage")
.style.display="none";

document.getElementById("app")
.style.display="block";

document.getElementById("userName")
.innerHTML=user.username;

document.getElementById("userRole")
.innerHTML=user.role;

}else{

alert("Login Gagal!");

}

}

// LOGOUT

function logout(){

document.getElementById("app")
.style.display="none";

document.getElementById("loginPage")
.style.display="flex";

}

// DRAWER

function toggleDrawer(){

document.getElementById("drawer")
.classList.toggle("active");

}

// PINDAH PAGE

function showPage(id){

document.querySelectorAll(".page")
.forEach(page=>{

page.style.display="none";

});

document.getElementById(id)
.style.display="block";

document.getElementById("drawer")
.classList.remove("active");

}

// SEARCH

function searchMenu(){

let input =
document.getElementById("searchMenu")
.value.toLowerCase();

let cards =
document.querySelectorAll(".produk-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

card.style.display =
text.includes(input)
? "block"
: "none";

});

}

// THEME

function setTheme(mode){

if(mode==="dark"){

document.body.classList.add("dark");

}else{

document.body.classList.remove("dark");

}

}

window.onload=()=>{

showPage("dashboard");

}
