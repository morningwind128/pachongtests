# coding=utf-8
# www.guoke.com index listing
import re
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
from selenium import webdriver
url1 = "http://www.guokr.com"
driver = webdriver.PhantomJS(executable_path='/home/techwind/phantomjs/bin/phantomjs')
# laptop:'C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# small:'C:/Users/Patrick/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# /home/techwind/phantomjs/bin/phantomjs
driver.get(url1)
page_content = driver.find_elements_by_class_name('content-title')
cont_content = driver.find_elements_by_css_selector('.cont h3')
for i in range(0,len(page_content)):
    rich_content = page_content[i].get_attribute("innerText")
    cont_title = cont_content[i].get_attribute("innerText")
    print rich_content
    print cont_title
