#!/usr/bin/env python3
"""Wrap 14 jurisdiction sections in <details>/<summary> for collapsible UX."""

import re

FILE = 'lumen-lingo-frontend/src/app/[locale]/privacy/page.tsx'

# Jurisdiction section IDs and their matching locale(s)
JURISDICTION_LOCALES = {
    'japan-privacy': ['ja'],
    'china-privacy': ['zh'],
    'brazil-privacy': [],  # No pt locale
    'germany-privacy': ['de'],
    'france-privacy': ['fr'],
    'poland-privacy': ['pl'],
    'ukraine-privacy': ['uk'],
    'middle-east-privacy': ['ar'],
    'spain-latam-privacy': ['es'],
    'canada-privacy': [],  # No specific locale
    'south-korea-privacy': [],  # No ko locale
    'australia-privacy': [],  # No au locale
    'india-privacy': [],  # No hi locale
    'switzerland-privacy': [],  # No ch locale
}

with open(FILE, 'r') as f:
    content = f.read()

for section_id, locales in JURISDICTION_LOCALES.items():
    # Build the open condition
    if locales:
        open_expr = ' || '.join(f"locale === '{loc}'" for loc in locales)
        open_attr = f' open={{{open_expr}}}'
    else:
        open_attr = ''
    
    # Extract the namespace prefix from the section id (e.g., japan-privacy -> japanPrivacy)
    # Match the section opening: <section id="xxx-privacy">
    section_pattern = f'<section id="{section_id}">'
    
    if section_pattern not in content:
        print(f'WARNING: {section_id} not found!')
        continue
    
    # Find the h2 line that immediately follows the section opening
    # Pattern: <section id="xxx">\n                  <h2>{t('xxx.heading')}</h2>
    pattern = re.compile(
        rf'(<\s*)section(\s+id="{re.escape(section_id)}")\s*>'
        rf'(\s*<h2>)(.*?)(</h2>)',
        re.DOTALL
    )
    
    def replace_open(m):
        indent_open = m.group(1)
        id_attr = m.group(2)
        h2_prefix = m.group(3)
        h2_content = m.group(4)
        h2_close = m.group(5)
        return f'{indent_open}details{id_attr} className="jurisdiction-details"{open_attr}>{h2_prefix.replace("<h2>", "<summary><h2>")}{h2_content}{h2_close.replace("</h2>", "</h2></summary>")}'
    
    content = pattern.sub(replace_open, content, count=1)
    
    # Replace the closing </section> for this jurisdiction
    # We need to find the CORRECT closing tag. We'll use a simple approach:
    # Find the section and then find its closing tag
    
print("Approach changed - using line-based replacement instead")

# Re-read and do line-based approach
with open(FILE, 'r') as f:
    lines = f.readlines()

# Process each jurisdiction section
for section_id, locales in JURISDICTION_LOCALES.items():
    if locales:
        open_expr = ' || '.join(f"locale === '{loc}'" for loc in locales)
        open_attr = f' open={{{open_expr}}}'
    else:
        open_attr = ''
    
    section_open_tag = f'<section id="{section_id}">'
    
    # Find the section opening line
    start_line = None
    for i, line in enumerate(lines):
        if section_open_tag in line:
            start_line = i
            break
    
    if start_line is None:
        print(f'WARNING: {section_id} not found!')
        continue
    
    # Find the h2 line (should be start_line + 1)
    h2_line = start_line + 1
    
    # Find the closing </section> tag - count nesting
    depth = 1
    end_line = None
    for i in range(start_line + 1, len(lines)):
        # Count section opens (but not details etc)
        if '<section' in lines[i] and '/>' not in lines[i]:
            depth += 1
        if '</section>' in lines[i]:
            depth -= 1
            if depth == 0:
                end_line = i
                break
    
    if end_line is None:
        print(f'WARNING: closing tag for {section_id} not found!')
        continue
    
    # Replace <section> with <details>
    lines[start_line] = lines[start_line].replace(
        f'<section id="{section_id}">',
        f'<details id="{section_id}" className="jurisdiction-details"{open_attr}>'
    )
    
    # Wrap <h2> in <summary>
    lines[h2_line] = lines[h2_line].replace('<h2>', '<summary><h2>').replace('</h2>', '</h2></summary>')
    
    # Replace closing </section> with </details>
    lines[end_line] = lines[end_line].replace('</section>', '</details>')
    
    print(f'{section_id}: wrapped (lines {start_line+1}-{end_line+1}), open for: {locales or "none"}')

with open(FILE, 'w') as f:
    f.writelines(lines)

print('\nDone!')
