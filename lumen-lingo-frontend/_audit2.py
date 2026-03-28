import json
with open('messages/en.json') as f:
    d = json.load(f)
cookies = d.get('Cookies', {})
for k in cookies:
    print(k)
    if isinstance(cookies[k], dict):
        for k2 in cookies[k]:
            val = cookies[k][k2]
            if isinstance(val, str) and 'emailLink' in val:
                print(f'  ** {k}.{k2} HAS emailLink **')
