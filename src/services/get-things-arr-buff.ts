export const getThingsArrayBuffer = async (): Promise<ArrayBuffer> => {
  try {
    const dirHandle = await window.showDirectoryPicker()
    const fileHandle = await dirHandle.getFileHandle('main.sqlite')
    const file = await fileHandle.getFile()
    const arrayBuffer = await file.arrayBuffer()
    return new Uint8Array(arrayBuffer)
  } catch (error) {
    console.error(error)
    await logseq.UI.showMsg('Error reading file', 'error')
    throw new Error('Error reading file')
  }
}
