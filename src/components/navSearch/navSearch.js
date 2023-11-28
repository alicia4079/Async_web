import './navSearch.css'

export const createSearchForm = () => {
  const divForm = document.createElement('div')
  const form = document.createElement('form')
  const input = document.createElement('input')
  input.className = 'inputToSearch'
  const lupa = document.createElement('img')
  input.placeholder = 'Buscar'
  lupa.src = 'https://www.svgrepo.com/show/513607/search.svg'

  form.appendChild(lupa)
  form.appendChild(input)
  divForm.appendChild(form)
  return divForm
}

export const removeLupa = () => {
  const formContainer = createSearchForm()
  const form = formContainer.querySelector('form')
  const lupa = formContainer.querySelector('img')

  const imageX = document.createElement('img')
  imageX.src = 'https://www.svgrepo.com/show/525281/close-circle.svg'
  imageX.alt = 'Imagen X'
  imageX.style.display = 'none'

  form.addEventListener('click', function (event) {
    event.stopPropagation()
    lupa.style.display = 'none'
    form.style.display = 'flex'
    form.style.justifyContent = 'space-between'
    form.style.border = '2px solid black'
    imageX.style.display = 'inline-block'
  })

  document.addEventListener('click', function () {
    lupa.style.display = 'block'
    form.style.justifyContent = 'flex-start'
    form.style.border = 'none'
    imageX.style.display = 'none'
  })

  const clearInput = () => {
    const inputToSearch = document.querySelector('.inputToSearch')
    imageX.addEventListener('click', function () {
      inputToSearch.value = ''
    })
  }

  const nav = document.querySelector('nav')
  if (!nav.contains(formContainer)) {
    nav.appendChild(formContainer)
  }
  form.appendChild(imageX)
  clearInput()
}
