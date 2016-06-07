from urllib import *




f = open("FG_UEFA")

for line in f:
    x = line[0:-1]
    #print x

u = urlopen("http://es.uefa.com/memberassociations/uefarankings/club/index.html")
text =  u.read()


pos = 0
while True:
    pos = pos+1
    pos = text.find("width=\"18\" alt=",pos)
    if pos<0:
        break
    fin = text.find("\"",pos+17)    
    name = text[pos+16:fin]
    
    pos = text.find("src=\"",pos)
    fin = text.find("\"",pos+7) 
    src = text[pos+5:fin]
    src = src.replace("18","100")
    
    pos = text.find("countrycode\">",pos)
    fin = text.find("<",pos)
    #print  text[pos+13:fin]
    
    pos = text.find("<td class=\"r\">",pos+10)
    pos = text.find("<td class=\"r\">",pos+10)
    pos = text.find("<td class=\"r\">",pos+10)
    pos = text.find("<td class=\"r\">",pos+10)
    pos = text.find("<td class=\"r\">",pos+10)
    pos = text.find("<td class=\"r\">",pos+10)
    
    fin = text.find("<",pos+16)
    #print text[pos+14:fin]
    
    
    print "<x-product data-name=\""+name+"\" data-img=\""+ src +"\"></x-product>"
