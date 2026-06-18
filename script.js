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
