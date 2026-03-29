import json

with open('messages/en.json') as f:
    data = json.load(f)

email_tags = ['emailLink', 'supportEmailLink', 'appealsEmailLink', 'dsaEmailLink', 'pressEmailLink', 'securityEmailLink', 'accessibilityEmailLink', 'anpdEmailLink']

sections = {
    'Terms': data.get('Terms', {}),
    'Cookies': data.get('Cookies', {}),
    'CommunityGuidelines': data.get('CommunityGuidelines', {}),
    'Impressum': data.get('Impressum', {}),
    'MentionsLegales': data.get('MentionsLegales', {}),
    'Press': data.get('Press', {}),
    'Security': data.get('Security', {}),
    'Eula': data.get('Eula', {}),
    'Accessibility': data.get('Accessibility', {}),
    'DataRequest': data.get('DataRequest', {}),
}

for section_name, section in sections.items():
    found = []
    def walk(obj, prefix=''):
        if isinstance(obj, dict):
            for k, v in obj.items():
                walk(v, prefix + '.' + k if prefix else k)
        elif isinstance(obj, str):
            for tag in email_tags:
                if '<' + tag + '>' in obj:
                    found.append((prefix, tag))
    walk(section)
    if found:
        print(f'\n=== {section_name} ===')
        for key, tag in found:
            print(f'  {key}  ->  {tag}')
