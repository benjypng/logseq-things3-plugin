import '@logseq/libs'

import { oneWaySync } from './features/one-way-sync'
import { settings } from './settings'

const main = async () => {
  console.log('logseq-things3-plugin loaded')

  if (
    (logseq.settings!.oneWayTag as string) &&
    (logseq.settings!.oneWayTag as string).length !== 0
  ) {
    oneWaySync()
  }

  if ((logseq.settings!.token as string).length === 0) {
    logseq.UI.showMsg('Token missing from plugin settings', 'error')
  }
}

logseq.useSettingsSchema(settings).ready(main).catch(console.error)
