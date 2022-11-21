/* Passenger Counter App */

let count = 0

const countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
};

function decrease() {
  if (count != 0) {
    count -= 1;
    countEl.textContent = count;

  }

}

function reset() {
  count = 0;
  countEl.textContent = count;
}
