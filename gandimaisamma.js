const listItem1 = document.querySelector("#listItem1");
const listItem2 = document.querySelector("#listItem2");
const listItem3 = document.querySelector("#listItem3");
const listItem4 = document.querySelector("#listItem4");
const subContainer2 = document.querySelector(".subContainer2");
const subContainer3 = document.querySelector(".subContainer3");
const subContainer4 = document.querySelector(".subContainer4");
const subContainer5 = document.querySelector(".subContainer5");

listItem2.addEventListener("click", () => {
  if (subContainer3.classList.contains("subContainer")) {
    subContainer3.classList.remove("subContainer");
    subContainer2.classList.add("subContainer");
    subContainer4.classList.add("subContainer");
    subContainer5.classList.add("subContainer");
  }
});
listItem1.addEventListener("click", () => {
  if (subContainer2.classList.contains("subContainer")) {
    subContainer2.classList.remove("subContainer");
    subContainer3.classList.add("subContainer");
    subContainer4.classList.add("subContainer");
    subContainer5.classList.add("subContainer");
  }
});
listItem3.addEventListener("click", () => {
  if (subContainer4.classList.contains("subContainer")) {
    subContainer4.classList.remove("subContainer");
    subContainer3.classList.add("subContainer");
    subContainer2.classList.add("subContainer");
    subContainer5.classList.add("subContainer");
  }
});
listItem4.addEventListener("click", () => {
  if (subContainer5.classList.contains("subContainer")) {
    subContainer5.classList.remove("subContainer");
    subContainer3.classList.add("subContainer");
    subContainer2.classList.add("subContainer");
    subContainer4.classList.add("subContainer");
  }
});
