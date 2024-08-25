#!/bin/bash

# Set the path to your Things database
THINGS_DB="$HOME/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/ThingsData-L9V74/Things Database.thingsdatabase/main.sqlite"

# Set the path to your Logseq vault
LOGSEQ_VAULT="$HOME/Documents/logseq_vault/journals"

# Get today's date in the format YYYY_MM_DD
TODAY=$(date +%Y_%m_%d)

# Set the path to today's journal file
JOURNAL_FILE="$LOGSEQ_VAULT/${TODAY}.md"

# Your Things3 auth token
AUTH_TOKEN="your_token_here"

# SQL query to get tasks
QUERY="SELECT uuid, title FROM TMTask WHERE trashed = 0 AND status = 0 AND type = 0 AND project IS NULL AND area IS NULL ORDER BY creationDate DESC"

# Function to URL encode a string
urlencode() {
    local string="${1}"
    local strlen=${#string}
    local encoded=""
    local pos c o

    for (( pos=0 ; pos<strlen ; pos++ )); do
        c=${string:$pos:1}
        case "$c" in
            [-_.~a-zA-Z0-9] ) o="${c}" ;;
            * )               printf -v o '%%%02x' "'$c"
        esac
        encoded+="${o}"
    done
    echo "${encoded}"
}

# Execute the query and process each task
sqlite3 "$THINGS_DB" "$QUERY" | while IFS='|' read -r uuid title; do
    # Write task to Logseq journal file, ensuring it's on a new line
    echo "" >> "$JOURNAL_FILE"  # This adds a blank line before each task
    echo "- $title #inbox" >> "$JOURNAL_FILE"
    
    # URL encode the title
    encoded_title=$(urlencode "$title")
    
    # Mark task as completed in Things3 using x-callback-url
    open "things:///update?auth-token=$AUTH_TOKEN&id=$uuid&completed=true"
    
    echo "Processed task: $title"
done

echo "Script completed. Tasks have been added to $JOURNAL_FILE and marked as completed in Things3."
