import { renderTasks } from './renderer.js'
import { createTask } from './taskGateway.js'

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input')

  const text = taskTitleInputElem.value

  if (!text) {
    return
  }

  taskTitleInputElem.value = ''

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  }

  createTask(newTask).then(() => renderTasks())
}
