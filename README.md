![Logseq Badge](https://img.shields.io/badge/logseq-%2385C8C8?style=for-the-badge&logo=logseq&logoColor=black)

# Overview

Sync (one-way) your tasks to Things3, e.g. a shopping list if accessing Logseq on the go is less convenient.

> Note: The import from Things3 has been deprecated in v2 given the complexity of the manual workaround. Instead, I've added a [bash script](./gists/script.sh) that you can use with Alfred to import these tasks on the file system. The script simply imports the tasks in your `Inbox` to Logseq's daily notes page. [Read more here](https://github.com/benjypng/logseq-things3-plugin?tab=readme-ov-file#usage).

## Setup

1. Enter your Things3 API token for use with their x-callback-url.
2. Indicate the tag that will define the block to be automatically pushed to Things3.

## Usage

1. In Logseq, simply tag blocks that you want to automatically push to Things3.

### Using the bash script

Before using the bash script (as above), double-check the script to ensure that the following are accurate:

```bash
# Path to your Things database
THINGS_DB

# Path to your Logseq vault
LOGSEQ_VAULT

# Your Things3 auth token for using the x-callback-url
AUTH_TOKEN
```

## Support

If you find this plugin useful, consider supporting the developer:

- [:gift_heart: Sponsor this project on Github](https://github.com/sponsors/hkgnp)
- [:coffee: Buy me a coffee](https://www.buymeacoffee.com/hkgnp.dev)
