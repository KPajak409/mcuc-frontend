var elements = document.getElementsByClassName("percent");

function PercentCheck() {
  for (const item of elements) {
    if (item.innerHTML[0] == "-") {
      item.style.color = "#FF4848";
    } else {
      item.style.color = "#00FF29";
    }
  }
}
window.onload = PercentCheck;
