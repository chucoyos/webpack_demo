import right from "./right";

const nav = () => {
  const nav = document.createElement('nav');
  // right().appendChild(nav);
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
  return nav;
}

export default nav;