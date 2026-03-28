#!/usr/bin/env python3
"""Audit: find t('key') calls where the translation value contains email XML tags."""
import json, re

with open('messages/en.json') as f:
    data = json.load(f)

namespaces = {
    'Privacy': 'src/app/[locale]/privacy/page.tsx',
    'Terms': 'src/app/[locale]/terms/page.tsx',
    'CookiePage': 'src/app/[locale]/cookies/page.tsx',
    'CommunityGuidelines': 'src/app/[locale]/community-guidelines/page.tsx',
    'Impressum': 'src/app/[locale]/impressum/page.tsx',
    'MentionsLegales': 'src/app/[locale]/mentions-legales/page.tsx',
    'Press': 'src/app/[locale]/press/page.tsx',
    'Security': 'src/app/[locale]/security/page.tsx',
    'Eula': 'src/app/[locale]/eula/page.tsx',
    'Accessibility': 'src/app/[locale]/accessibility/page.tsx',
    'DataRequest': 'src/app/[locale]/data-request/page.tsx',
    'Contact': 'src/app/[locale]/contact/page.tsx',
}

found = 0
for ns, filepath in namespaces.items():
    section = data.get(ns, {})
    if not section:
        continue

    email_keys = set()
    def _collect(obj, prefix=''):
        for k, v in obj.items():
            key = f'{prefix}.{k}' if prefix else k
            if isinstance(v, dict):
                _collect(v, key)
            elif isinstance(v, str) and re.search(r'<\w*[eE]mail\w*>', v):
                email_keys.add(key)
    _collect(section)

    if not email_keys:
        continue

    try:
        with open(filepath) as f:
            lines = f.readlines()
    except FileNotFoundError:
        print(f'FILE NOT FOUND: {filepath}')
        continue

    for i, line in enumerate(lines, 1):
        for m in re.finditer(r"(?<!\.)t\('([^']+)'\)", line):
            key = m.group(1)
            if key in email_keys:
                found += 1
                print(f'BROKEN {ns} L{i}: t("{key}") needs t.rich()')

if found == 0:
    print('ALL CLEAR: no broken t() calls found')
else:
    print(f'\n{found} broken call(s) found')
