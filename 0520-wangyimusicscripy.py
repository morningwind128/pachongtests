# coding=utf-8
# music.163.com rank list
import time
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
from selenium import webdriver
url1 = 'http://music.163.com/#/discover/artist/cat?id=1001'
driver = webdriver.PhantomJS(executable_path='C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe')
# laptop:'C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# small:'C:/Users/Patrick/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# /home/techwind/phantomjs/bin/phantomjs
driver.get(url1)
driver.save_screenshot("D:/1.png")
driver.switch_to_frame(0)
list = driver.find_elements_by_css_selector(".nm")
for i in list:
    print i.text
driver.quit()
