import coolNumber from "https://ultirequiem.github.io/example-html-css-esm/src/utils.js";

function generateItems(number) {
  const div = document.createElement("div");
  div.className = "item";
  div.appendChild(document.createTextNode(number));
  return div;
}

const [container] = document.getElementsByClassName("container");

for (let i = 0; i < coolNumber(); i++) {
  container.appendChild(generateItems(i));
}
