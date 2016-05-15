# coding=utf-8
import re
import sys
import requests
reload(sys)
sys.setdefaultencoding('utf-8')
from selenium import webdriver
file_object = open('1.html', 'w')
url1 = "http://mp.weixin.qq.com/s?src=3&timestamp=1463204174&ver=1&signature=2vvFIG9DWC9PMHgXA0WmM*L3z**t3LdNOazhKiv4IVYZXFPUIMgtmhbtRTTb8apmYUpLRXGZHgi8QH-YAc19cnZO1ZM82r2*WGljJL-yWnsla8PIPaXpYu7u9MuBUDSjZGeUXx9f-d2itp2IMJUp315A0dGodyaTX3WW3x2ChkM="
driver = webdriver.PhantomJS(executable_path='C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe')
# laptop:'C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# small:'C:/Users/Patrick/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# /home/techwind/phantomjs/bin/phantomjs
driver.get(url1)
page_content = driver.find_element_by_css_selector('#sg_readNum3')
print page_content.text
driver.quit()
