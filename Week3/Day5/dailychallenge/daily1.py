import time
import requests

def testtime(url:str):
    initial_time = time.time() 
    requests.get(url)
    return time.time() - initial_time

print(testtime('https://www.google.com/'))
print(testtime('https://www.ynet.co.il/home/0,7340,L-8,00.html'))
print(testtime('https://www.imdb.com/'))