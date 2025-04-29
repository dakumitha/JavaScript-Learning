// const greyItem = document.getElementById("grey");
// const yellowItem = document.getElementById("yellow");
// const whiteItem = document.getElementById("white");
// const blueItem = document.getElementById("blue");

// greyItem.addEventListener("click", () => {
//   document.body.style.backgroundColor = "grey";
// });
// yellowItem.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });
// whiteItem.addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });
// blueItem.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

const colorSwitcher = document.querySelectorAll(".button");
colorSwitcher.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = button.id;
    console.log(button.id);
  });
});
