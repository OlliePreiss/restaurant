const ABOUTUSCOPY =
"Welcome to Sunrise Coffee, a hidden gem nestled on the picturesque Hampstead Heath. \n\n At Sunrise Coffee, we believe that every day should start with a delightful cup of coffee that not only awakens your senses but also transports you to a haven of warmth and relaxation. \n\n Our boutique coffee shop is a reflection of our passion for quality coffee and a commitment to creating a welcoming atmosphere for our patrons. From the moment you step through our doors, you'll be greeted by the rich aroma of freshly ground beans and the inviting ambiance that sets the stage for a memorable experience. \n\n At Sunrise Coffee, we take pride in sourcing the finest coffee beans from around the world, ensuring that each cup is a testament to the artistry of coffee-making. Our skilled baristas are dedicated to crafting the perfect brew, whether you prefer a classic espresso, a velvety cappuccino, or an adventurous specialty blend.";

function buildAboutUs () {
  const aboutUsDiv = document.createElement('div');
  aboutUsDiv.classList.add('about-us-container');
  const p = document.createElement('p');
  p.innerText = `${ABOUTUSCOPY}`;
  aboutUsDiv.appendChild(p)

  return aboutUsDiv;
}

export { buildAboutUs };
