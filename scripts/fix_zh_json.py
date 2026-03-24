#!/usr/bin/env python3
"""Fix zh.json by properly escaping quotes inside JSON string values."""
import re

path = '/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/scripts/accessibility_zh.json'
with open(path) as f:
    lines = f.readlines()

fixed = []
for line in lines:
    stripped = line.strip()
    # Only process lines with key:value pattern
    if '": "' in stripped:
        # Split into prefix (key: ") and rest
        idx = stripped.index('": "') + 4  # position after opening value quote
        prefix = stripped[:idx]
        rest = stripped[idx:]
        # The rest ends with ", or just "
        if rest.endswith('",'):
            suffix = '",'
            value = rest[:-2]
        elif rest.endswith('"'):
            suffix = '"'
            value = rest[:-1]
        else:
            fixed.append(line)
            continue
        # Escape any unescaped quotes inside value
        value = value.replace('\\"', '\x00ESCAPED\x00')  # protect already escaped
        value = value.replace('"', '\\"')  # escape raw quotes
        value = value.replace('\x00ESCAPED\x00', '\\"')  # restore
        fixed.append(line[:len(line)-len(line.lstrip())] + prefix + value + suffix + '\n')
    else:
        fixed.append(line)

with open(path, 'w') as f:
    f.writelines(fixed)

import json
json.load(open(path))
print('Fixed and validated OK')
