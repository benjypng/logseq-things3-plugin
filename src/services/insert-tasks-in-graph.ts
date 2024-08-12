import { Task } from './read-tasks'

export const insertTasks = async (uuid: string, tasks: Task[]) => {
  const tasksBatchBlock = tasks.map((task) => ({
    content: `TODO ${task.title}`,
  }))

  // Insert tasks
  await logseq.Editor.insertBatchBlock(uuid, tasksBatchBlock, {
    before: true,
    sibling: true,
  })

  // Complete tasks using x-callback-URL
  // things:///update?auth-token=asdfasdf&id=adfsadf&completed=true
  tasks.forEach(async (task) => {
    const url = `things:///update?auth-token=${logseq.settings!.token}&id=${task.uuid}&completed=true`
    const link = document.createElement('a')
    link.href = url
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })
}
