import './button.css'

export const button = (texto, clase = '', href) => {
  return `<button class="button ${clase}"><a href=${href}>${texto}</a></button>`
}

export const changeButton = () => {
  const buttonsSelected = document.querySelectorAll('button')

  buttonsSelected.forEach((button) => {
    button.addEventListener('click', function () {
      buttonsSelected.forEach((btn) => {
        if (btn !== button) {
          btn.classList.remove('highlighted')
        }
      })
      button.classList.toggle('highlighted')
    })
  })
}
changeButton()
