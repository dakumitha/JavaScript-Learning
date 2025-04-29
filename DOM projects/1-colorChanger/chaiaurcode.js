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
const body = document.querySelector("body");
const colorSwitcher = document.querySelectorAll(".button");
colorSwitcher.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.id);
    // if(event.target.id === "grey") {
    //   document.body.style.backgroundColor = "grey";
    // } 
    // else if(event.target.id === "white") {
    //   document.body.style.backgroundColor = "white";
    // } 
    // else if(event.target.id === "blue") {
    //   document.body.style.backgroundColor = "blue";
    // } 
    // else if(event.target.id === "yellow") {
    //   document.body.style.backgroundColor = "yellow";
    // } 
    // else if(event.target.id === "red") {
    //   document.body.style.backgroundColor = "red";
    // } 
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "red":
        body.style.backgroundColor = "red";
        break;
      default:
        break;
    }
    

    
  });
});
