import { getImages } from './src/components/API/api'
import { button } from './src/components/button/button'
import { createIcons } from './src/components/icons/icons'
import {
  createSearchForm,
  removeLupa
} from './src/components/navSearch/navSearch'

import './style.css'

const createLogo = () => {
  const logo = document.createElement('img')
  logo.classList = 'logo'
  logo.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png'
  logo.alt = logo.className
  return logo
}

const createNavButtons = () => {
  const divButtons = document.createElement('div')
  divButtons.classList = 'divButtons'
  divButtons.innerHTML = `
    ${button('Inicio', 'highlighted')}
    ${button('Explorar', '', 'https://www.pinterest.es/today/')}
    ${button('Crear', '', 'https://www.pinterest.es/pin-creation-tool/')}
  `
  return divButtons
}

const nav = document.querySelector('nav')

nav.appendChild(createLogo())
nav.appendChild(createNavButtons())
removeLupa()
createIcons()
getImages()
