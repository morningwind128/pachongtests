# coding=utf-8
# www.guoke.com index listing
import re
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
from selenium import webdriver
url1 = "http://www.hprc.org.cn/wxzl/wxysl/lczf/dishiyijie_1/200908/t20090818_27775.html"
driver = webdriver.PhantomJS(executable_path='C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe')
# laptop:'C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# small:'C:/Users/Patrick/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# /home/techwind/phantomjs/bin/phantomjs
driver.get(url1)
page_content = driver.find_elements_by_css_selector(".hui14_30_h")
print len(page_content)
