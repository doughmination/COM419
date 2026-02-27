const display = document.getElementById("display");

function renderList(items, formatter) {
  display.innerHTML = "";
  const ul = document.createElement("ul");
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = formatter(item);
    ul.appendChild(li);
  });
  display.appendChild(ul);
}

document.getElementById("places").addEventListener("click", () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      renderList(data, place => `${place.name} - ${place.location}`);
    }
  };
  xhttp.open("GET", "/COM419/week-6/task/about/data/places.json", true);
  xhttp.send();
});

document.getElementById("creatures").addEventListener("click", () => {
  fetch("/COM419/week-6/task/about/data/creatures.json")
    .then(response => response.json())
    .then(data => renderList(data, creature => `${creature.name} - ${creature.description}`));
});