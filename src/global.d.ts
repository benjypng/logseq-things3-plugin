interface Window {
  showDirectoryPicker(): Promise<FileSystemDirectoryHandle>
}

interface ILSPluginUser {
  settings?: {
    disabled: boolean
    // Add your new properties here
    newProperty1?: string
    newProperty2?: number
    // ... any other properties you want to add
  } & Record<string, unknown>
}
