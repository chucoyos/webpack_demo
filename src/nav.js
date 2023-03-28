import right from "./right";

const nav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  
  const navList = document.createElement('ul');
  navList.classList.add('nav-list');
  nav.appendChild(navList);
  const navItems = ['Home', 'Menu', 'About'];
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
          mainSubtitle.classList.remove('main-subtitle-about');
          mainSubtitle.classList.add('main-subtitle');
          mainSubtitle.textContent = 'SEA and BAR';
        break;
        case 'Menu':
          mainTitle.textContent = 'menu';
          mainSubtitle.classList.remove('main-subtitle-about');
          mainSubtitle.classList.add('main-subtitle');
          mainSubtitle.textContent = 'menu';
        break;
        case 'About':
          mainTitle.textContent = 'about';
          mainSubtitle.classList.add('main-subtitle-about');
          mainSubtitle.textContent = '1751 offers seasonally inspired menus featuring the highest quality seafood and meats available from the local Gulf coast and beyond. Our full raw bar features several different varieties of oysters and rare delicacies such as and O-toro fatty tuna, Uni, Imperial Golden Ossetra caviar, soft shell crab, and local stone crab claws when available.';
        break;
      }
    })
  
    navList.appendChild(navItem);
  })
  return nav;
}

export default nav;