import './icons.css'

export const createIcons = () => {
  const listIcons = document.createElement('ul')

  const icons = [
    {
      url: 'https://www.svgrepo.com/show/502072/notificationmajor.svg',
      title: 'Notificaciones'
    },
    {
      url: 'https://www.svgrepo.com/show/394716/bubble-message-dot-2.svg',
      title: 'Mensajes'
    },
    {
      url: 'https://www.svgrepo.com/show/532185/letter-english-a.svg',
      title: 'Tu perfil'
    },
    {
      url: 'https://www.svgrepo.com/show/513674/circle-arrow-down.svg',
      title: 'Cuentas y más opciones'
    }
  ]

  for (const icon of icons) {
    const elements = document.createElement('li')
    const imgIcon = document.createElement('img')

    imgIcon.src = icon.url
    imgIcon.title = icon.title
    imgIcon.className = 'imgIcon'

    elements.appendChild(imgIcon)
    listIcons.appendChild(elements)
  }
  const nav = document.querySelector('nav')
  nav.appendChild(listIcons)
}
