let count = 0

const countEl = document.getElementById("count-el");

function increment() {
    count = count + 1;
    countEl.innerText = count;
};

function decrease() {
  if (count != 0) {
    count = count - 1;
    countEl.innerText = count;

  }

}

function reset() {
  count = 0;
  countEl.innerText = count;
}
