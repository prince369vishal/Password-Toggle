let password = document.getElementById("password");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    icon.src = "eye-icons/eye-open.png";
  } else {
    password.type = "password";
    icon.src = "eye-icons/eye-close.png";
  }
};
