const imageHolder = document.querySelector(".PassWardimage");
const PassWardHolder = document.querySelector("#Passbox");


function Passclick() {
  if (PassWardHolder.type == "password") {
      PassWardHolder.type = "text";
      imageHolder.src = "./Image/777494200.png";
  } else {
      PassWardHolder.type = "password";
       imageHolder.src = "./Image/506282200.png";
  }
}