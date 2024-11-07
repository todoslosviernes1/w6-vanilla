const container = document.querySelector(".container");
const coffees = [
  {
    name: "Valencia (28)",
    image: "images/coffee1.jpg"
  },
  {
    name: "Naguanagua (28)",
    image: "images/coffee2.jpg"
  },
  {
    name: "Unv. Carabobo (28)",
    image: "images/coffee3.jpg"
  },
  {
    name: "Biglow Center(28)",
    image: "images/coffee4.jpg"
  },
  {
    name: " Unv. JoseA.Paez (28)",
    image: "images/coffee5.jpg"
  },
  {
    name: "Unv. Arturo Michelena (28)",
    image: "images/coffee6.jpg"
  },
  {
    name: "Turismo Playa (12)",
    image: "images/coffee7.jpg"
  },
  {
    name: "Estados Vzla (24)",
    image: "images/coffee8.jpg"
  },
  {
    name: "Estados Vzla (29)",
    image: "images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
