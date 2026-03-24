#!/usr/bin/env python3
"""Fix the quote escaping in the story 14.5 translation script."""
with open('scripts/add_story14_5_translations.py', 'r') as f:
    content = f.read()

# The issue: some warranty disclaimer text has "AS IS" style quotes
# that conflict with Python string delimiters. Replace with escaped versions.
fixes = {
    '"AS IS" AND "AS AVAILABLE"': '\\"AS IS\\" AND \\"AS AVAILABLE\\"',
    '"TAL CUAL" Y "SEGUN DISPONIBILIDAD"': '\\"TAL CUAL\\" Y \\"SEGUN DISPONIBILIDAD\\"',
    '"W STANIE, W JAKIM JEST" I "W MIARE DOSTEPNOSCI"': '\\"W STANIE, W JAKIM JEST\\" I \\"W MIARE DOSTEPNOSCI\\"',
    '"COMO ESTA" E "CONFORME DISPONIVEL"': '\\"COMO ESTA\\" E \\"CONFORME DISPONIVEL\\"',
}

for old, new in fixes.items():
    content = content.replace(old, new)

with open('scripts/add_story14_5_translations.py', 'w') as f:
    f.write(content)

print("Fixed quote escaping")
