#!/bin/bash
 
WHITELIST=$XDG_DATA_HOME/uzbl/ns_whitelist
 
while read -r line; do
    if [[ "$UZBL_URI" =~ "$line" ]]; then
        echo 'set enable_scripts = 1' > "$UZBL_FIFO"
        break
    else
        echo 'set enable_scripts = 0' > "$UZBL_FIFO"
    fi
done < "$WHITELIST"


