const inputValue = document.getElementById("inp");
const valBtn = document.getElementById("val");

const value = valBtn.addEventListener("click", () => {
  const inpValue = parseFloat(inputValue.value);
  const result = ratingFunc(inpValue);

  document.getElementById("star-container").innerHTML = result;
  document.getElementById("rating-value").innerHTML = inpValue;
});

const ratingFunc = (value) => {
  const integerPart = Math.floor(value);
  const decimalPart = parseFloat((value - integerPart).toFixed(1));

  let emptyPart = Math.floor(5 - decimalPart - integerPart);

  let output = "";

  //full star
  for (let i = 0; i < integerPart; i++) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star100%25png.png' />";
  }

  //decimal conditional star
  if (decimalPart === 0.1) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star10%25png.png' />";
  } else if (decimalPart === 0.2) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star20%25png.png' />";
  } else if (decimalPart === 0.3) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star30%25png.png' />";
  } else if (decimalPart === 0.4) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star40%25png.png' />";
  } else if (decimalPart === 0.5) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star60%25png.png' />";
  } else if (decimalPart === 0.6) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star60%25png.png' />";
  } else if (decimalPart === 0.7) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star70%25png.png' />";
  } else if (decimalPart === 0.8) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star80%25png.png' />";
  } else if (decimalPart === 0.9) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star90%25png.png' />";
  }

  //empty star
  for (let i = 0; i < emptyPart; i++) {
    output +=
      "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star0%25png.png' />";
  }

  return output;
};

const productRender = document.getElementById("renderProducts");

productRender.addEventListener("click", () => {
  const url = "https://dummyjson.com/products";
  fetchingData(url);
});

const fetchingData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => products(data.products));
};

const products = (data) => {
  const productContainer = document.getElementById("product-container");
  data.map((p) => {
    const productHTML = `
    <div class="product">
            <img class='img-size' src=${p.thumbnail} alt="" />
            <div class='content'>
            <h2>${p.title}</h2>
            <p>Previous Price: $<del>${p.price + 299}<del/></p>
            <p>Present Price: $${p.price}</p>
            <p>Ratings: (${p.rating})</p>
            <p></p>
            <div/>
          </div>
    `;
    productContainer.innerHTML += productHTML;
  });
};
