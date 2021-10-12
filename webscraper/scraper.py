from typing import Text
import requests
import json
from bs4 import BeautifulSoup

link = "http://bulletin.iit.edu/courses/"
domain = "http://bulletin.iit.edu"
result  = requests.get(link)

print(result.status_code)

src = result.content
soup = BeautifulSoup(src, features="html.parser")

##helper function
def get_class_code(class_name):
    start_idx = class_name.index('(')
    return class_name[start_idx+1:len(class_name)-1]


idx = soup.find("div", {"id":"atozindex"})
dpts = idx.find_all('a', href=True)
dpt_endpoints={}
for dpt in dpts:
    dpt_endpoints.update({get_class_code(dpt.text):dpt['href']})
#print(dpt_endpoint)

#print(dpt_endpoints)

'''
we got all the departments and the endpoints to their course catalogs.
now, to store the courses themselves
create another dictonary, where keys are dpt names and vals are the course numbers. 
this is the dictonary representation of the JSON object that will be used in app itself

departments is a dictonary whos keys are department codes and whos values is a dictonary. 
this second dictonary's keys are all classes taught by that department and its values is another dictonary
this third dictonary is all of the details for that class, its name, description, prerequisites, corequisites, credits

{department : {Classes:{class details : someString}}}
'''
suffix=""
my_json_obj = {}

dummy = {"CS":"/courses/cs/"}

## todo: replace dummy with dpt endpoints 
'''
for dpt in dummy: 
    suffix = dummy.get(dpt)
    goto = domain+suffix

    result = requests.get(goto)
    print(result.status_code)
    src = result.content
    soup = BeautifulSoup(src, features="html.parser")
'''
suffix = dummy.get("CS")
goto = domain+suffix
print(goto)

result = requests.get(goto)
print(result.status_code)

src = result.content
soup = BeautifulSoup(src, features="html.parser")
courseblocks = soup.find_all("div", {"class":"courseblock"})
#print(courseblocks)


#code = courseblocks[0].find("div", {"class":"noindent coursecode"})
#print(code.text)
#s = code.text


classes={}
for courseblock in courseblocks:
    course_det = {}

    code = courseblock.find("div", {"class":"noindent coursecode"})
    title = courseblock.find("div", {"class":"noindent coursetitle"})
    desc = courseblock.find("div", {"class":"courseblockdesc"})
    creds = courseblock.find("div", {"class":"noindent courseblockattr hours"})
    prereqs = courseblock.find("div", {"class":"noindent courseblockattr"})

    course_det.update({"course_title":title.text.replace(u'\xa0', u' ')})
    course_det.update({"course_desc":desc.text.replace(u'\xa0', u' ')})
    course_det.update({"course_creds":title.text.replace(u'\xa0', u' ')})
    if(prereqs != None and "Prerequisite(s)" in prereqs.text):
        course_det.update({"course_prereqs":prereqs.text.replace(u'\xa0', u' ')})
    else:
        course_det.update({"course_prereqs":"No Prerequisites"})
    
    string = code.text.replace(u'\xa0', u' ')
    classes.update({string:course_det})



with open("CS_dpt.json", "w") as outfile:
    json.dump(classes, outfile)



#print(prereqs.text)


#thing.find("span")

#print(thing.text)
#for block in content:
    