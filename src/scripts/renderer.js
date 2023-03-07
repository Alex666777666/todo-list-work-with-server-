import { getTasksList } from './taskGateway.js'

const listElem = document.querySelector('.list')

const compareTasks = (a, b) => a.done - b.done

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input')
  checkboxElem.setAttribute('type', 'checkbox')
  checkboxElem.setAttribute('data-id', id)
  checkboxElem.checked = done
  checkboxElem.classList.add('list-item__checkbox')

  return checkboxElem
}

const createListItem = ({ text, done, id }) => {
  const listItemElement = document.createElement('li')
  listItemElement.classList.add('list-item', 'list__item')
  const checkboxElem = createCheckbox({ done, id })

  if (!done) {
    listItemElement.classList.add('list-item_done')
  }

  const textElem = document.createElement('span')
  textElem.classList.add('list-item__text')
  textElem.textContent = text

  const deleteBtnElem = document.createElement('button')
  deleteBtnElem.classList.add('list-item__delete-btn')

  listItemElement.append(checkboxElem, textElem, deleteBtnElem)

  return listItemElement
}

export const renderTasks = () => {
  const tasksList = getTasksList()

  listElem.innerHTML = ''
  tasksList
    .then(elem => elem.sort(compareTasks).map(createListItem))
    .then(elem => listElem.append(...elem))
}
