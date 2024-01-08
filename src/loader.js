import { buildNav } from "./nav";
import { buildFooter } from "./footer";
import { buildHome } from "./home";
import { buildAboutUs } from "./aboutus";
import { buildMenu } from "./menu";
import { buildContact } from "./contact";

const container = document.getElementById('content');
const bodyContainerID = "body-container"

function initializeWebsite () {
  loadNav(container);
  loadBodyContainer(container);
  loadFooter(container);
  const bodyContainer = document.getElementById(bodyContainerID);
  loadHome(bodyContainer);
  changeTab(bodyContainer);
}

function loadNav (container) {
  const navbarDom = buildNav();
  container.appendChild(navbarDom);
  changeTab();
}

function loadBodyContainer (container) {
  const bodyContainer = document.createElement('div');
  bodyContainer.id = bodyContainerID;
  container.appendChild(bodyContainer);
}

function loadFooter (container) {
  const footerDom = buildFooter();
  container.appendChild(footerDom);
}

function loadHome (container) {
  clearContainer(container);
  const homeDom = buildHome();
  container.appendChild(homeDom);
}

function loadAboutUs (container) {
  clearContainer(container);
  const aboutUsDom = buildAboutUs();
  container.appendChild(aboutUsDom);
}

function loadMenu (container) {
  clearContainer(container);
  const menuDom = buildMenu();
  container.appendChild(menuDom);
}

function loadContact (container) {
  clearContainer(container);
  const contactDom = buildContact();
  container.appendChild(contactDom);
}

function changeTab (container) {
  const navbarItems = document.querySelectorAll(".navbar-item")

  navbarItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.target.innerText;

      if (target === "HOME") loadHome(container);
      if (target === "ABOUT US") loadAboutUs(container);
      if (target === "MENU") loadMenu(container);
      if (target === "CONTACT") loadContact(container);
    })
  });
}

function clearContainer (container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

export { initializeWebsite };
