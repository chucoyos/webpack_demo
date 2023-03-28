import right from "./right";

const main = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('main-title');
  mainTitle.textContent = '1751';
  main.appendChild(mainTitle);
  
  const mainSubtitle = document.createElement('h2');
  mainSubtitle.classList.add('main-subtitle');
  mainSubtitle.textContent = 'SEA and BAR';
  main.appendChild(mainSubtitle);
  return main;
}

export default main;