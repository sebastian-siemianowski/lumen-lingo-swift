#!/usr/bin/env python3
"""Check all version history dates across all locales."""
import json, pathlib

msgs = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

for loc in ['en','pl','de','es','fr','ja','zh','ar','uk']:
    d = json.loads((msgs / f'{loc}.json').read_text('utf-8'))
    entries = []
    for k in ['v1','v2','v2_1','v2_2','v2_3']:
        v = d.get('Privacy',{}).get('policyUpdates',{}).get(k,'')
        if v: entries.append(('Privacy.policyUpdates.'+k, v[:90]))
    lu = d.get('Privacy',{}).get('lastUpdated','')
    if lu: entries.append(('Privacy.lastUpdated', lu))
    for k in ['v1','v1_1','v1_2','v1_3']:
        v = d.get('Terms',{}).get('changes',{}).get(k,'')
        if v: entries.append(('Terms.changes.'+k, v[:90]))
    for k in ['v1','v1_1','v1_2']:
        v = d.get('CookiePage',{}).get('updates',{}).get(k,'')
        if v: entries.append(('CookiePage.updates.'+k, v[:90]))
    for k in ['v1_1','v1_2']:
        v = d.get('Eula',{}).get('changes',{}).get(k,'')
        if v: entries.append(('Eula.changes.'+k, v[:90]))
    print(f'=== {loc} ===')
    for name, val in entries:
        print(f'  {name}: {val}')
