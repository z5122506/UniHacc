# Example Python script 
# (for rapydscript, a python to javascript compiler)

#def doHelloMessage():
#    alert('hello')
#doHelloMessage()

import csv

def addCourse(courseName, *args):
	# Given courseName and list of alternating Alias and URL, write 
	# to a csv file under the name"courseName.csv" as a dictionary 
	with open(courseName + '.csv', 'w', newline='') as csvfile:
		n = 0
		for arg in args:
			n += 1
		assert(n%2 == 0)
		assert(n/2 < 10)
		fieldnames = ['Alias','URL']
		writer = csv.DictWriter(csvfile,fieldnames = fieldnames)
		writer.writeheader()
		for i in range(0,n/2,2):
			writer.writerow({'Alias':args[i], 'URL' = args[i+1]})

def getURL(courseName,alias):
	# Finds relevant csv file and returns a reader/dict array
	with open('names.csv', newline='') as csvfile:
    	reader = csv.DictReader(csvfile)
    	for row in reader:
    		if row['Alias'] == alias:
    			return row[URL]
    return -1


# modify html page
document.getElementById("result").innerHTML = 'Compiled Python script in Chrome' 
 

# write into log 
console.log('hello from python')
 
	