import requests
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

print(dpt_endpoints)

'''
we got all the departments and the endpoints to their course catalogs.
now, to store the courses themselves
create another dictonary, where keys are dpt names and vals are the course numbers. 
'''

