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
u.username === username &&
u.password === password
);

if(user){

document.getElementById("loginPage").style.display="none";

document.getElementById("app").style.display="block";

document.getElementById("userName").innerHTML =
user.username;

document.getElementById("userRole").innerHTML =
user.role;

}else{
alert("Username atau Password salah!");
}

}

// LOGOUT
function logout(){

document.getElementById("app").style.display="none";

document.getElementById("loginPage").style.display="flex";

}

// DRAWER
function toggleDrawer(){

document.getElementById("drawer")
.classList.toggle("active");

}

// PINDAH HALAMAN
function showPage(pageId){

let pages =
document.querySelectorAll(".page");

pages.forEach(page=>{
page.style.display="none";
});

document.getElementById(pageId)
.style.display="block";

document.getElementById("drawer")
.classList.remove("active");

}

// SEARCH MENU
function searchMenu(){

let input =
document.getElementById("searchMenu")
.value.toLowerCase();

let cards =
document.querySelectorAll(".produk-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}

// DARK MODE
function setTheme(mode){

if(mode==="dark"){

document.body.style.background =
"linear-gradient(135deg,#0f172a,#1e293b,#334155)";

}else{

document.body.style.background =
"linear-gradient(135deg,#1b4332,#2d6a4f,#52b788,#95d5b2)";

}

}

// DEFAULT
window.onload = ()=>{

document.querySelectorAll(".page")
.forEach(page=>{
page.style.display="none";
});

document.getElementById("dashboard")
.style.display="block";

};
