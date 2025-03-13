let parentDiv = document.querySelector(".parent");
let image = document.createElement("img");
image.classList.add("image");
image.style.width = "300px";
image.style.height = "300px";
image.style.objectFit = "cover";
image.src = "../images/pic1.jpg";
parentDiv.insertAdjacentElement("afterbegin", image)
