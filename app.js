var count = 0;
var value = document.getElementById("value");
function add() {
  if (count < 50) {
    count += 1;
  } /*else {
    count = count;
  }*/
  value.innerHTML = count;
  if (count > 0) {
    value.style.color = "hsl(120,96%,25%)";
  } else if (count === 0) {
    value.style.color = "#000";
  }
}
function decrease() {
  if (count > 0) {
    count -= 1;
  } /*else {
    count = count;
  }*/
  value.innerHTML = count;
  if (count > 0) {
    value.style.color = "hsl(120,96%,25%)";
  }
  if (count === 0) {
    value.style.color = "#000";
  }
}
