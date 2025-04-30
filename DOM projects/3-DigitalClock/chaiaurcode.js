const clock = document.getElementById("clock");

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  clock.innerHTML = currentTime;
}, 1000);
