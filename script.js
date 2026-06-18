const users = [
{
username:"admin",
password:"admin123",
role:"Administrator"
}
];

function login(){

const user =
document.getElementById("username").value;

const pass =
document.getElementById("password").value;

const found =
users.find(u =>
u.username === user &&
u.password === pass
);

if(found){

document.getElementById("loginPage")
.style.display = "none";

document.getElementById("app")
.style.display = "block";

document.getElementById("userName")
.innerHTML = found.username;

document.getElementById("userRole")
.innerHTML = found.role;

}else{

alert("Login gagal");

}
}

function logout(){

location.reload();

}

function toggleDrawer(){

document.getElementById("drawer")
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
