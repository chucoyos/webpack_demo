function component() {
  const element = document.createElement('div')
  element.innerHtml = ._join(['Hello', 'webpack'], ' ')
  return element
}

document.body.appendChild(component())