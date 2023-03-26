import _ from 'lodash'

// function comp() {
//   const ele = document.createElement('div')
//   ele.innerHtml = _.join(['Hello', 'webpack', 'with function return'], ' ')
//   return ele
// }

// document.body.appendChild(comp())
const element = document.createElement('div')
element.innerHTML = _.join(['Hello', 'webpack', 'without function'], ' ')
document.body.appendChild(element)