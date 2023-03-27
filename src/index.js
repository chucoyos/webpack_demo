import _ from 'lodash'
import './style.css';
import Dish from './main_dish.jpg';


const content = document.getElementById('content');

const dish = new Image();
dish.classList.add('dish');
dish.src = Dish;
content.appendChild(dish);

const right = document.createElement('div');
right.classList.add('right');
content.appendChild(right);

const nav = document.createElement('nav');
right.appendChild(nav);
nav.classList.add('nav');

const navList = document.createElement('ul');
navList.classList.add('nav-list');
nav.appendChild(navList);
const navItems = ['Home', 'Menu', 'Contact'];
navItems.forEach((item) => {
  const navItem = document.createElement('li');
  navItem.classList.add('nav-item');
  navItem.id = item;
  navItem.textContent = item;
  navItem.addEventListener('click', item => {
    const mainTitle = document.querySelector('.main-title');
    const mainSubtitle = document.querySelector('.main-subtitle');
    switch (item.target.id) {
      case 'Home':
        mainTitle.textContent = '1751';
        mainSubtitle.textContent = 'SEA and BAR';
      break;
      case 'Menu':
        mainTitle.textContent = 'menu';
        mainSubtitle.textContent = 'menu';
        break;
      case 'Contact':
        mainTitle.textContent = 'contact';
        mainSubtitle.textContent = 'contact';
        break;
      break;
    }
  })

  navList.appendChild(navItem);
})

const main = document.createElement('main');
main.classList.add('main');
right.appendChild(main);

const mainTitle = document.createElement('h1');
mainTitle.classList.add('main-title');
mainTitle.textContent = '1751';
main.appendChild(mainTitle);

const mainSubtitle = document.createElement('h2');
mainSubtitle.classList.add('main-subtitle');
mainSubtitle.textContent = 'SEA and BAR';
main.appendChild(mainSubtitle);

const footer = document.createElement('footer');
footer.classList.add('footer');
right.appendChild(footer);

const footerText = document.createElement('p');
footerText.classList.add('footer-text');
footerText.textContent = 'Huston, Texas';
footer.appendChild(footerText);
