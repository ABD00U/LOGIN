let emailinput = document.getElementById("emailin");
let passinput = document.getElementById("passin");
let list = [];
list = JSON.parse(localStorage.getItem("date"));
function login() {
  if (emailinput.value == "" || passinput.value == "") {
    document.getElementById("massege").innerHTML = "please write all date";
  } else {
    checked();
  }
}
function checked() {
  for (let x = 0; x < list.length; x++) {
    if (emailinput.value == list[x].email && passinput.value == list[x].pass) {
      location.href = "../home";
      var y = list[x].name;
      localStorage.setItem("username", y);
    } else {
      document.getElementById("massege").innerHTML = "unsucceed";
    }
  }
}
