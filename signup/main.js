let nameinput = document.getElementById("nametext");
let emailinput = document.getElementById("emailtext");
let passwordinput = document.getElementById("passwordtext");

let alertinput = document.getElementById("alertprice");
let list = [];
if (localStorage.getItem("date") == null) {
  list = [];
} else {
  list = JSON.parse(localStorage.getItem("date"));
}

function add() {
  if (sameemail() == true && validname() == true && validpass() == true) {
    let product = {
      name: nameinput.value,
      email: emailinput.value,
      pass: passwordinput.value,
    };
    list.push(product);
    localStorage.setItem("date", JSON.stringify(list));

    location.href = "login/index.html";
  }

  if (
    nameinput.value == "" ||
    emailinput.value == "" ||
    passwordinput.value == ""
  ) {
    document.getElementById("massege").innerHTML = "enter all date";
  }
}

nameinput.addEventListener("change", validname);

function validname() {
  let valid = /^[A-Z][a-z]{1,15}[0-9]{0,2}$/;
  if (valid.test(nameinput.value) == true) {
    return true;
  } else {
    document.getElementById("massege").innerHTML = "enter valid Name";
    return false;
  }
}
function validpass() {
  let valid = /^[0-9]{1,15}$/;
  if (valid.test(nameinput.value) == true) {
    return true;
  } else {
    document.getElementById("massege").innerHTML = "enter valid Name";
    return false;
  }
}

function sameemail() {
  console.log(list);
  console.log(nameinput.value);
  let x = list.find((el) => {
    return emailinput.value == el.email;
  });
  console.log(x);
  if (x !== undefined) {
    document.getElementById("massege").innerHTML = "email aready existS";
    return false;
  } else {
    return true;
  }
}
