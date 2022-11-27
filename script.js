function changeImage() {
  if (
    document.getElementById("image").src ===
    "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
  ) {
    document.getElementById("image").src =
      "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    document.getElementById("ligar").innerHTML = "Desligar";

  } else if (
    document.getElementById("image").src ===
    "https://i.postimg.cc/6QyTynzr/bulb-on.png"
  ) {
    document.getElementById("image").src =
      "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    document.getElementById("ligar").innerHTML = "Ligar";
   

  }
}

document.getElementById("ligar").addEventListener("click", changeImage);
