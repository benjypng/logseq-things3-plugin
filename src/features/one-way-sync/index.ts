import { insertTask } from '../../services/insert-task'

export const oneWaySync = () => {
  logseq.DB.onChanged(async ({ blocks }) => {
    if (
      blocks.length === 2 &&
      blocks[0] &&
      /#\[?\[?\w+\]?\]?/.test(blocks[0].content)
    ) {
      await insertTask(blocks[0])
    }
  })
}
