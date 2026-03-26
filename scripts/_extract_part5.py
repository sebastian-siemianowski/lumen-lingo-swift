#!/usr/bin/env python3
"""Extract full English text for Part 5 translation keys."""
import json
with open('lumen-lingo-frontend/messages/en.json','r') as f:
    d = json.load(f)
p = d['Privacy']
keys = [
    ('subProcessors','intro'),
    ('subProcessors','dpaStatus','p1'),
    ('subProcessors','dpaStatus','li1'),
    ('subProcessors','dpaStatus','li2'),
    ('subProcessors','dpaStatus','li4'),
    ('subProcessors','dpaStatus','li5'),
    ('subProcessors','changes','p1'),
    ('internationalTransfers','intro'),
    ('internationalTransfers','li1'),
    ('internationalTransfers','li2'),
    ('internationalTransfers','li3'),
    ('internationalTransfers','safeguards','li1'),
    ('internationalTransfers','safeguards','li2'),
    ('internationalTransfers','safeguards','li3'),
    ('internationalTransfers','safeguards','li4'),
    ('internationalTransfers','li4'),
    ('internationalTransfers','li5'),
    ('aggregateData','survival'),
    ('aggregateData','deIdentification','li1'),
    ('aggregateData','deIdentification','li2'),
    ('brazilPrivacy','intro'),
    ('brazilPrivacy','applicabilityP1'),
    ('brazilPrivacy','legalBasesLi1'),
    ('brazilPrivacy','legalBasesLi2'),
    ('brazilPrivacy','legalBasesLi3'),
    ('brazilPrivacy','rightsLi4'),
    ('brazilPrivacy','rightsLi5'),
    ('brazilPrivacy','rightsLi6'),
    ('brazilPrivacy','rightsLi7'),
    ('brazilPrivacy','rightsLi8'),
    ('brazilPrivacy','rightsP2'),
    ('brazilPrivacy','crossBorderP1'),
    ('brazilPrivacy','crossBorderLi1'),
    ('brazilPrivacy','crossBorderLi2'),
    ('brazilPrivacy','crossBorderP2'),
    ('brazilPrivacy','anpdP1'),
    ('euRepresentative','assessment1'),
    ('euRepresentative','assessment2'),
    ('euRepresentative','assessment3'),
    ('euRepresentative','contact3'),
    ('euRepresentative','supervisory1'),
    ('euRepresentative','supervisory2'),
]
for k in keys:
    obj = p
    for part in k:
        obj = obj[part]
    label = '.'.join(k)
    print(f'--- {label} ---')
    print(obj)
    print()
