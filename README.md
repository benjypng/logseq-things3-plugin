![Logseq Badge](https://img.shields.io/badge/logseq-%2385C8C8?style=for-the-badge&logo=logseq&logoColor=black)

# Logseq Things3 Importer Plugin

A Logseq plugin to import tasks from Things3 into your Logseq graph.

This plugin allows Logseq users to import their tasks from Things3, enhancing task management and integration between the two platforms.

## Features

- Import Tasks from Things3 to Logseq
- Custom tag option for imported tasks
- Simple slash command integration

## Installation

1. Open Logseq
2. Go to Settings > Plugins
3. Search for "Things3 Importer"
4. Click Install

## Setup

Due to the lack of an official API from Things3, some manual setup is required:

1. Locate your Things3 database file at:
   ```
   /Users/<user>/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/ThingsData-L9V74/Things Database.thingsdatabase/main.sqlite
   ```
2. Create a copy of this `main.sqlite` file in a directory of your choice.
   - You may want to create a custom script to automate this process.
3. Remember the location of this copy, as you'll need to select it when importing tasks.

## Usage

1. In Logseq, place your cursor where you want to import tasks.
2. Type `/Import Things3 tasks` to activate the import command.
3. Select the folder containing your copied `main.sqlite` file when prompted.
4. Tasks will be imported into your Logseq graph at the cursor location.

## Configuration

In the plugin settings, you can:

- Set a custom tag for imported tasks (optional)
- Configure import frequency or other preferences

## Support

If you find this plugin useful, consider supporting the developer:

- [:gift_heart: Sponsor this project on Github](https://github.com/sponsors/hkgnp)
- [:coffee: Buy me a coffee](https://www.buymeacoffee.com/hkgnp.dev)

## Issues and Contributions

For bug reports, feature requests, or contributions, please visit the [GitHub repository](https://github.com/hkgnp/logseq-zotero-plugin).

*Note: This repository is currently not taking in any pull requests.*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
