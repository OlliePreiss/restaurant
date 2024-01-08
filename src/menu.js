const menuItems = [
  {
    title: "Americano",
    description: "1oz shot w/ hot water",
    price: "£1.99",
  },
  {
    title: "Latte",
    description: "1oz shot w/ steamed milk",
    price: "£2.99",
  },
  {
    title: "Espresso",
    description: "1oz shot",
    price: "£2.99",
  },
  {
    title: "Cappuccino",
    description: "1oz shot w/ steamed milk and foam",
    price: "£1.99",
  },
]

function buildMenu () {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add('menu')

  console.log(menuItems)

  menuItems.forEach((item) => {
    const div = buildMenuCard(item);
    menuDiv.appendChild(div)
  })

  return menuDiv
}

function buildMenuCard (item) {
  const card = document.createElement("div");
  card.classList.add("menu-item");

  const title = document.createElement("p");
  title.classList.add("card-title")
  title.innerText = `${item.title}`

  const description = document.createElement("p");
  description.classList.add("card-description")
  description.innerText = `${item.description}`

  const price = document.createElement("p");
  price.classList.add("card-price")
  price.innerText = `${item.price}`

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);

  return card;
}

export { buildMenu };
