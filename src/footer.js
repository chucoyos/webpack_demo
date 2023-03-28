import right from "./right";

const footer = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  
  const footerText = document.createElement('p');
  footerText.classList.add('footer-text');
  footerText.textContent = 'Huston, Texas';
  footer.appendChild(footerText);

  return footer;
}

export default footer;