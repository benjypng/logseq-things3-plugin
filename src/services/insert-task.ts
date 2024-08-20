import { BlockEntity } from '@logseq/libs/dist/LSPlugin'
import { THINGS_ADD_URL } from '../constants'

export const insertTask = async (block: BlockEntity) => {
  const task = block.content
  const parsedTask = encodeURIComponent(task.replace(/#\w+/, '').trim())
  const url = `${THINGS_ADD_URL}?title=${parsedTask}&list=${logseq.settings!.oneWayTag as string}`

  // Below is needed because traditional fetch will prefix https
  const link = document.createElement('a')
  link.href = url
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
