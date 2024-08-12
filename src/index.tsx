import '@logseq/libs'
import { settings } from './settings'
import { getThingsArrayBuffer } from './services/get-things-arr-buff'
import { readTasks } from './services/read-tasks'
import { insertTasks } from './services/insert-tasks-in-graph'

const main = async () => {
  console.log('logseq-things3-plugin loaded')

  await logseq.Experiments.loadScripts(
    'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js',
  )

  if ((logseq.settings!.token as string).length === 0) {
    logseq.UI.showMsg('Token missing from plugin settings', 'error')
  }

  logseq.Editor.registerSlashCommand('Import from Things', async (e) => {
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
