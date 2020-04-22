document.getElementById("spinny").classList.add("no-screen");
document.querySelector("body").classList.add("spinner");

setTimeout(() =>{
  document.querySelector("body").classList.remove("spinner");
  document.getElementById("spinny").classList.remove("no-screen");
}, 2000);