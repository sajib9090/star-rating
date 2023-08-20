const inp = document.getElementById("inp");
const val = document.getElementById("val");

const value = val.addEventListener("click", () => {
  const inpV = inp.value;
  const ratVal = parseFloat(inpV);
  // alert(typeof ratVal + ratVal);
  function formatNumber(num) {
    const integerPart = Math.floor(num);
    const decimalPart = parseFloat((num - integerPart).toFixed(1)); // Convert to a floating-point number
    let empty = Math.floor(5 - decimalPart - integerPart);

    let output = "";

    for (let i = 0; i < integerPart; i++) {
      output +=
        "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star100%25png.png' />";
    }

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
        "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star50%25png.png' />";
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

    for (let i = 0; i < empty; i++) {
      output +=
        "<img class='star-size' src='https://raw.githubusercontent.com/sajib9090/stars-resource/main/star0%25png.png' />";
    }

    return output;
  }

  const num = ratVal;
  const result = formatNumber(num);

  // Render the result in an HTML element with the id "output"
  document.getElementById("star-container").innerHTML = result;
  document.getElementById("ratings").innerHTML = num;
});

// alert(value);
