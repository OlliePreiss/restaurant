const CONTACTNUMBER = "+44 7428 531 444"
const CONTACTEMAIL = "bookings@sunrisecoffee.com"


function buildContact () {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");

  const call = document.createElement("p");
  call.innerText = `Contact No.: ${CONTACTNUMBER}`

  const email = document.createElement("p");
  email.innerText = `Email: ${CONTACTEMAIL}`

  contactDiv.appendChild(call)
  contactDiv.appendChild(email)

  return contactDiv;
}

export { buildContact };
