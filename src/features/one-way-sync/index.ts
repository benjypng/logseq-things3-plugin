import { insertTask } from '../../services/insert-task'

export const oneWaySync = () => {
  logseq.DB.onChanged(async ({ blocks }) => {
    const re = new RegExp(`#[?[?${logseq.settings!.oneWayTag}]?]?`, 'g')
    if (blocks.length === 2 && blocks[0] && re.test(blocks[0].content)) {
      await insertTask(blocks[0])
    }
  })
}
