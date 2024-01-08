const RESTAURANTNAME = "Sunrise Coffeehouse"
const RESTAURANTTAGLINE = "Start your day right"

function buildHome () {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-container');

  const title = buildTitle(RESTAURANTNAME);
  const tagline = buildTagline(RESTAURANTTAGLINE);

  homeDiv.appendChild(title)
  homeDiv.appendChild(tagline)

  return homeDiv;
}

function buildTitle (copy) {
  const div = document.createElement('div');
  // add class
  const name = document.createElement('h1');
  name.innerText = `${copy}`;
  div.appendChild(name);

  return div;
}

function buildTagline (copy) {
  const div = document.createElement('div');
  // add class
  const tagline = document.createElement('h2');
  tagline.innerText = `${copy}`;
  div.appendChild(tagline);

  return div;
}

export { buildHome };
