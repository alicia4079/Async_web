import { createSearchForm } from '../navSearch/navSearch'
import './api.css'

createSearchForm()

const accessKey = 'Y53l6Q-EDTRbmqKqmsmEHMNfHuEbLSAhYytOvr7fC9U'
const endPoint = 'https://api.unsplash.com/search/photos'

export const getImages = async () => {
  try {
    const inputToSearch = document.querySelector('.inputToSearch')

    inputToSearch.addEventListener('keydown', async (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()

        let searchTerm = inputToSearch.value.trim()

        const perPage = 30

        const res = await fetch(
          `${endPoint}?client_id=${accessKey}&query=${searchTerm}&per_page=${perPage}`
        )

        const jsonResponse = await res.json()
        const imagesList = jsonResponse.results

        const listImages = document.createElement('ul')
        listImages.className = 'listImages'

        imagesList.forEach((image) => {
          const elements = document.createElement('li')
          const imgApi = document.createElement('img')
          imgApi.src = image.urls.thumb
          imgApi.className = 'imgApi'

          elements.appendChild(imgApi)
          listImages.appendChild(elements)
        })

        const existingList = document.querySelector('.listImages')
        if (existingList) {
          existingList.remove()
        }

        document.body.appendChild(listImages)
      }
    })
  } catch (error) {
    console.error('Error al obtener las imágenes:', error)
  }
}
