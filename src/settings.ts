import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user'

export const settings: SettingSchemaDesc[] = [
  {
    key: 'token',
    type: 'string',
    default: '',
    title: 'Things URL Auth Token',
    description: `In Things3, go to settings. Under General, enable Things URLs. Click 'Manage' and copy the token and paste it here. `,
  },
  {
    key: 'fileName',
    type: 'string',
    default: 'main.sqlite',
    title: 'Default Things3 SQLite Filename',
    description:
      'Change the filename to whichever is your backup filename to import tasks from.',
  },
]
