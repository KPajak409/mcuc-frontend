var elements = document.getElementsByClassName("percent");

window.onload = () => {
  for (const item of elements) {
    if (item.innerHTML[0] == "-") {
      item.style.color = "#FF4848";
    } else {
      item.style.color = "#00FF29";
    }
  }
};
