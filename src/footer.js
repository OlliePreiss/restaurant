const footerCopy = "Copyright @ OlliePreiss"

function buildFooter () {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add("footer");
  const p = document.createElement('p');
  p.innerText = `${footerCopy}`;
  footerDiv.appendChild(p);

  return footerDiv;
}

export { buildFooter };
