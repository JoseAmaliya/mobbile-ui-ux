const users = [
  {username:"admin", password:"123", role:"Admin"},
  {username:"jose", password:"123", role:"User"},
  {username:"guest", password:"123", role:"Guest"}
];

function login(){

  const username =
  document.getElementById("username").value;

  const password =
  document.getElementById("password").value;

  const user = users.find(
    u => u.username === username &&
    u.password === password
  );

  if(user){

    document.getElementById("userName")
    .innerHTML = user.username;

    document.getElementById("userRole")
    .innerHTML = user.role;

    document.getElementById("loginPage")
    .style.display = "none";

    document.getElementById("app")
    .style.display = "block";

  }else{
    alert("Username atau Password salah!");
  }
}
