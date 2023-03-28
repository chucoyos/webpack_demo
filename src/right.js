import nav from "./nav";
import main from "./main";
import footer from "./footer";
export default function right() {
  const right = document.createElement('div');
  right.classList.add('right');
  content.appendChild(right);
  right.appendChild(nav());
  right.appendChild(main());
  right.appendChild(footer());
  return right;
}

