function generateButtons() {
  let nrButtons = document.getElementById("buttons").value; 
  let winNumber = Math.floor(Math.random() * nrButtons + 1);
  for (let i = 1; i <= nrButtons; ++i) {
    let btn = document.createElement("button");
    btn.innerHTML = "Guess";
    btn.onclick = function Display() {
      if (i === winNumber) {
        document.getElementById("buttons_list").innerHTML = "You won";
      } else {
        document.getElementById("buttons_list").innerHTML = "You lose";
      }
    }
    document.getElementById("buttons_list").appendChild(btn);
  }
}
