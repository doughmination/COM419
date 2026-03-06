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

  display.innerHTML = ""; // clear old content

  fetch("/COM419/week-6/task/about/data/creatures.json")
    .then(response => response.json())
    .then(data => {

      data.forEach(creature => {

        // ==========================
        // 1. Main Container
        // ==========================
        const container = document.createElement("div");
        container.classList.add("resultcontainer");

        display.appendChild(container);

        // ==========================
        // 2. Description Section
        // ==========================
        const desc = document.createElement("div");
        desc.classList.add("resultdesc");

        desc.innerHTML = `
          <h3>${creature.name}</h3>
          <p>${creature.description}</p>
        `;

        container.appendChild(desc);

        // ==========================
        // 3. Image Section
        // ==========================
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("resultimgcontainer");

        const img = new Image();
        img.src = creature.image; // <-- Must exist in JSON
        img.alt = creature.name;
        img.style.maxWidth = "200px"; // optional safety

        imgContainer.appendChild(img);
        container.appendChild(imgContainer);

      });

    })
    .catch(error => console.error("Error loading creatures:", error));
});