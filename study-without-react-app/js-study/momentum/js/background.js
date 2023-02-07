const images = ["seongae.jpg", "seungho.jpg", "jenny.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chooseImage}`;

document.body.appendChild(bgImage);
