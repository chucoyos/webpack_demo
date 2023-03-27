import _ from 'lodash'
import './style.css';
import First from './first.png';

// function comp() {
//   const ele = document.createElement('div')
//   ele.innerHtml = _.join(['Hello', 'webpack', 'with function return'], ' ')
//   return ele
// }

// document.body.appendChild(comp())
const element = document.createElement('div')
element.innerHTML = _.join(['Hello', 'webpack', 'without function'], ' ')
element.classList.add('hello');
document.body.appendChild(element)

const first = new Image();
first.src = First;
element.appendChild(first);