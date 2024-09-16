import pandas as pd

df = pd.read_csv('Test.csv')

data = {}
stack = []
parent_child = []
parent = []
child = []
level = []
remarks = []

for i in range(len(df)):
    try:
        if not pd.isna(df.at[i, 'Parent']):
            data[df.at[i, 'Parent']].append(df.at[i, 'Child'])
        else:
            data['No Parent'].append(df.at[i, 'Child'])
    except:
        if not pd.isna(df.at[i, 'Parent']):
            data[df.at[i, 'Parent']] = [df.at[i, 'Child']]
        else:
            data['No Parent'] = [df.at[i, 'Child']]
        

original = []


def process(data, stack, original):
    for key, value in data.items():
        # print(f'{key}: {value}')
        if not stack:
            stack += value[::-1]
            original = stack.copy()
            parent_child.append(':' + original.pop())

        if stack[-1] in original:
            parent_child.append(':' + original.pop())
        while True:
            if stack[-1] not in data:
                stack.pop()
            else:
                try:
                    # print(f'{stack[-1]}: {data[stack[-1]][0]}')
                    parent_child.append(f'{stack[-1]}: {data[stack[-1]][0]}')
                except:
                    del data[stack[-1]]
                    stack.pop()
                    return data, stack, original
                if data[stack[-1]]:
                    stack.append(data[stack[-1]].pop(0))
                else:
                    break


while True:
    data, stack, original = process(data, stack, original)
    if not stack:
        break

for p_c in parent_child:
    p, c = p_c.split(':')
    p = p.strip()
    c = c.strip()
    parent.append(p)
    child.append(c)

    for i in range(len(df)):
        if (p == df.at[i, 'Parent'] and c == df.at[i, 'Child']) \
                or (p == '' and c == df.at[i, 'Child']):
            level.append(df.at[i, 'Level'])
            remarks.append(df.at[i, 'Remark'])

new_df = pd.DataFrame({'Level': level, 'Parent': parent, 'Child': child, 'Remark': remarks})
print(new_df)
