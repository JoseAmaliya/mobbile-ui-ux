const users = {
admin:{
password:"admin123",
role:"Administrator"
},

jose:{
password:"jose123",
role:"Manager"
},

guest:{
password:"guest123",
role:"Guest"
}
};

function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(
users[username] &&
users[username].password === password
){

document.getElementById(
"loginPage"
).style.display="none";

document.getElementById(
"app"
).style.display="block";

document.getElementById(
"userName"
).innerText=username;

document.getElementById(
"userRole"
).innerText=
users[username].role;

document.getElementById(
"profileImg"
).src=
`https://api.dicebear.com/7.x/shapes/svg?seed=${username}`;

}else{
alert("Username atau Password salah");
}

}

function logout(){

document.getElementById(
"app"
).style.display="none";

document.getElementById(
"loginPage"
).style.display="flex";
}

function toggleDrawer(){

document
.getElementById("drawer")
.classList.toggle("active");

}

function showPage(page){

document
.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document
.getElementById(page)
.classList.add("active");

}

function refreshPage(){
location.reload();
}

function searchMenu(){

let input =
document
.getElementById("searchMenu")
.value.toLowerCase();

let cards =
document
.querySelectorAll(".produk-card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

card.style.display =
text.includes(input)
? "block"
: "none";

});

}

function setTheme(mode){

if(mode==="dark"){

document.body.style.background=
"linear-gradient(135deg,#111827,#1f2937,#374151)";

}else{

document.body.style.background=
"linear-gradient(135deg,#134e4a,#166534,#15803d)";

}

}
