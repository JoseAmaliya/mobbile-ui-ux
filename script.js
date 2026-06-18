const users = [

{
username:"admin",
password:"admin123",
role:"Administrator"
},

{
username:"jose",
password:"jose123",
role:"User"
},

{
username:"guest",
password:"guest123",
role:"Guest"
}

];

function login(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

const user =
users.find(u =>
u.username === username &&
u.password === password
);

if(user){

document.getElementById("loginPage")
.style.display="none";

document.getElementById("app")
.style.display="block";

document.getElementById("namaUser")
.innerHTML=user.username;

document.getElementById("roleUser")
.innerHTML=user.role;

}else{

alert("Login gagal");

}

}

function logout(){

location.reload();

}

function toggleDrawer(){

document
.getElementById("drawer")
.classList.toggle("active");

}

function showPage(id){

document
.querySelectorAll(".page")
.forEach(page =>
page.classList.remove("active")
);

document
.getElementById(id)
.classList.add("active");

}

function setTheme(mode){

if(mode === "light"){

document.body.style.background =
"linear-gradient(135deg,#e0e7ff,#dbeafe,#f8fafc)";

document.body.style.color =
"#111827";

}else{

document.body.style.background =
"linear-gradient(135deg,#0f172a,#312e81,#7c3aed)";

document.body.style.color =
"white";

}

}
