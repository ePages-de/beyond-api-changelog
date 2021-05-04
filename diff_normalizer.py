import sys

#######
# Parse raw diff
#######
sections = []

currentSection = None
currentChangeLines = None

for line in sys.stdin:

    if (line.startswith("###")):
        currentSection = {}
        currentSection["headline"] = line
        currentSection["changes"] = []
        sections.append(currentSection)
        continue

    if (line.startswith("---")):
        continue

    if (line.startswith("*")):
        currentChangeLines = []
        currentChangeLines.append(line)
        currentSection["changes"].append(currentChangeLines)
        continue

    if (currentChangeLines):
        currentChangeLines.append(line)

#######
# Print normalized diff
#######

for section in sections:
    print(section["headline"])
    for changeLines in section["changes"]:
        changeText = ""
        for line in changeLines:
            changeText += line
        if (not (("Add _links" in changeText) or ("Remove _links" in changeText))):
            print(changeText)
