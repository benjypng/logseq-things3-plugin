import { insertTask } from '../../services/insert-task'

export const oneWaySync = () => {
  // Using DB.onChanged is unreliable for this purpose as it triggers the API even for typos
  const re = new RegExp(
    `#(?:\\[\\[)?(${logseq.settings!.oneWayTag})(?:\\]\\])?`,
    'i',
  )

  const callback = async (mutationsList: MutationRecord[]): Promise<void> => {
    for (const m of mutationsList) {
      if (
        m.type === 'childList' &&
        m.removedNodes.length > 0 &&
        (m.removedNodes[0]! as HTMLElement).className ===
          'editor-inner block-editor'
      ) {
        const uuid = (m.target as HTMLElement)
          .closest('div[id^="ls-block"]')
          ?.getAttribute('blockid') as string
        const currBlock = await logseq.Editor.getBlock(uuid)
        if (!currBlock) return

        if (re.test(currBlock.content)) await insertTask(currBlock)
      }
    }
  }

  //@ts-expect-error Mutation does not exist on window
  const observer = new parent.MutationObserver(callback)
  observer.observe(parent.document.getElementById('app-container'), {
    attributes: false,
    childList: true,
    subtree: true,
  })
}
