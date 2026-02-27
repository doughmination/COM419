document.getElementById("places").addEventListener('click', plbtn => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            const placesList = document.createElement('ul');
            data.forEach(place => {
                const placeItem = document.createElement('li');
                placeItem.textContent = `${place.name} - ${place.location}`;
                placesList.appendChild(placeItem);
            });
            document.body.appendChild(placesList);
        }
    };

    xhttp.open("GET", "/COM419/week-6/task/about/data/places.json", true);
    xhttp.send();
});

document.getElementById("creatures").addEventListener('click', crbtn => {
    fetch('/COM419/week-6/task/about/data/creatures.json')
        .then(response => response.json())
        .then(data => {
            const creaturesList = document.createElement('ul');
            data.forEach(creature => {
                const creatureItem = document.createElement('li');
                creatureItem.textContent = `${creature.name} - ${creature.description}`;
                creaturesList.appendChild(creatureItem);
            });
            document.body.appendChild(creaturesList);
        });
});