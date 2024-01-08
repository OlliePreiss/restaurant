const navbarItems = [
  "HOME",
  "ABOUT US",
  "MENU",
  "CONTACT"
]

function buildNav () {
  const navbarDiv = document.createElement("div");
  navbarDiv.classList.add('navbar')

  navbarItems.forEach((item) => {
    const div = buildNavItem(item);
    navbarDiv.appendChild(div)
  });

  return navbarDiv;
}

function buildNavItem (item) {
  const div = document.createElement('div');
  div.classList.add('navbar-item')
  const p = document.createElement('p');
  p.innerText = `${item}`;
  div.appendChild(p);
  return div;
}

export { buildNav };
