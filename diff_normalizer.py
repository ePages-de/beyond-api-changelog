import sys

#######
# Parse raw diff
#######
sections = []

currentSection = None
currentChangeText = None

for line in sys.stdin:

    if (line.startswith("###")):
        currentSection = {}
        currentSection["headline"] = line
        currentSection["changes"] = []
        sections.append(currentSection)
        continue

    if (line.startswith("*")):
        currentChangeText = line
        currentSection["changes"].append(currentChangeText)
        continue

    if (currentChangeText):
        currentChangeText += line


#######
# Print normalized diff
#######

# for section in sections:
#     print(section["headline"])
#     for change in section["changes"]:
#         print(change)
