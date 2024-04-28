let randint = Math.floor(Math.random() * 10 + 1);

const file = `https://fakestoreapi.com/products/${randint}`;

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.json();
  return myText;
}
async function cardData() {
  const data = await getText(file);
  document.querySelector(".image").setAttribute("src", data.image);
  document.querySelector(".title").innerText = data.title;
  document.querySelector(".price").innerText = "$" + data.price;
  document.querySelector(".desc").innerText = data.description;
  document.querySelector(".rating").innerText += data.rating.rate;
  console.log(data);
}

cardData();
