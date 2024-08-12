import '@logseq/libs'

import { getThingsArrayBuffer } from './services/get-things-arr-buff'
import { insertTasks } from './services/insert-tasks-in-graph'
import { readTasks } from './services/read-tasks'
import { settings } from './settings'

const main = async () => {
  console.log('logseq-things3-plugin loaded')

  await logseq.Experiments.loadScripts(
    'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js',
  )

  if ((logseq.settings!.token as string).length === 0) {
    logseq.UI.showMsg('Token missing from plugin settings', 'error')
  }

  logseq.Editor.registerSlashCommand('Import from Things', async (e) => {
    logseq.UI.showMsg(
      'Sync your Things3 sqlite file before proceeding',
      'warning',
    )

    // Delay for a while so the user can read the message first
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const buff = await getThingsArrayBuffer()
    const tasks = await readTasks(buff)
    if (!tasks) {
      logseq.UI.showMsg('Error reading tasks')
      return
    }
    await insertTasks(e.uuid, tasks)
  })
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error)
