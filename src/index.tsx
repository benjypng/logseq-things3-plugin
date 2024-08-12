import '@logseq/libs'
import { settings } from './settings'
import { getThingsArrayBuffer } from './services/get-things-arr-buff'
import { readTasks } from './services/read-tasks'

const main = async () => {
  console.log('logseq-things3-plugin loaded')

  await logseq.Experiments.loadScripts(
    'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js',
  )

  logseq.Editor.registerSlashCommand('Import from Things', async (e) => {
    const buff = await getThingsArrayBuffer()
    const tasks = await readTasks(buff)
    console.log(tasks)
  })
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error)
