import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user'

export const settings: SettingSchemaDesc[] = [
  {
    key: 'fileName',
    type: 'string',
    default: 'main.sqlite',
    title: 'Default Things3 SQLite Filename',
    description:
      'Change the filename to whichever is your backup filename to import tasks from.',
  },
]
