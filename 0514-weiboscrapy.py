# coding=utf-8
# www.weibo.com login test
import re
import time
import sys
import json
reload(sys)
sys.setdefaultencoding('utf-8')
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
url1 = 'https://passport.weibo.cn/signin/login?res=wel&wm=3349&r=http%3A%2F%2Fwww.weibo.cn%2F%3Fjumpfrom%3Dweibocom'
def changeUserAgent(dcap_profile, userAgent):
    dcap = dict(dcap_profile)
    dcap['phantomjs.page.settings.userAgent'] = userAgent
    return dcap
dcap = changeUserAgent(
    dcap_profile=DesiredCapabilities.PHANTOMJS,
    userAgent = '')
    # userAgent='Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1')
# 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1')
driver = webdriver.PhantomJS(executable_path='C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe', desired_capabilities=dcap)
# laptop:'C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# small:'C:/Users/Patrick/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/bin/phantomjs.exe'
# /home/techwind/phantomjs/bin/phantomjs
driver.set_window_size(768, 1024)
driver.get(url1)
driver.save_screenshot('D:/1.png')
# with open('D:/cookie.json') as json_file:
#     json_data = json.load(json_file)
#    print(json_data)
# driver.add_cookie({'domain':'zhihu.com','__utma':'51854390.523816710.1463207224.1463207224.1463207224.1','__utmb':'51854390.10.9.1463207915894','__utmc':'51854390','__utmt': '1','__utmv': '0','__utmz':'51854390.1463207224.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/settings/filter','_zap': 'ebae2d30-c201-4801-b48c-12d30d734946','cap_id': 'NzczMzQ0YmE2MDY5NDQ2ZmE3MTVlYjM4NDE2YzYyYjA=|1463207231|a07ceee75c9141745d7e85975822861b97187e15','d_c0': 'AGCAZFWQ6wmPTnCaKwf1WIRuNIOyz0OsdN4=|1463207241','l_cap_id': 'MjVjNjM5OTcwNGM2NGQ0MmE3NWMyYmVlNzdmOGZmOTA=|1463207231|761fd432ab29bb4e03da2a6841e7a81c212ce78e','l_n_c': '1','login': 'N2IwYmE3Nzk1ODIxNGYwNGEyMWMzNzBmYmVhYzc4Nzc=|1463207231|5d75322d529c1fe4a6fd0777e64a4d42fb9a2c5e','q_c1': '1b0badb8d047457a9c96bbe8ecc9e5b4|1463207231000|1463207231000','z_c0': 'QUdDQWhmRmo2d2tYQUFBQVlRSlZUVVpTWGxkMkljOGtWdXJkR2ExbF80NWljaV9NbVF1N2dnPT0=|1463207238|612b7f7cfdb6d2246a27fd5798c391dc7a3691d9','_xsrf': '6321fcdc8578e37d34049156a9335460','_za': 'b3286287-44ad-4b87-a56b-0cf7389bee88'})
inputs = driver.find_elements_by_css_selector(".input-wrapper .input-box input")
inputs[0].send_keys('18917127139')
inputs[1].send_keys('18917127139and')
login_btn = driver.find_element_by_css_selector("#loginAction")
login_btn.click()
time.sleep(3)
driver.save_screenshot('D:/2.png')
output_result = []
def getpagenum():
    # 获取总页数
    page_num = int(driver.find_element_by_css_selector("#pagelist>form>div>input").get_attribute("value"))
    return page_num
def nextpageinsearch():
    # 搜索页面翻页
    try:
        driver.find_elements_by_css_selector('#pagelist>form>div>a').click()
    except:
        print "------------------"
def getweibodata():
    # 进入页面后获取微博结果
    weibo_result_all = driver.find_elements_by_css_selector('.c[id^="M_"]')
    for i in range(0, len(weibo_result_all)):
        current_output = weibo_result_all[i].text
        print current_output
    #    print weibo_content_result[i].text

def searchweibo(keyword):
    # 搜索某关键词获取所有结果
    url2 = 'http://weibo.cn/search/'
    driver.get(url2)
    time.sleep(3)
    search_input = driver.find_elements_by_css_selector("form input")
    search_input[0].send_keys(keyword)
    search_input[1].click()
    time.sleep(3)
    for j in range(0, getpagenum()):
        getweibodata()
        nextpageinsearch()

# searchweibo(u'周葆华')
def scrapyall(weiboid):
    # 爬取某人微博
    url3 = 'http://weibo.cn/u/' + str(weiboid)
    driver.get(url3)
    time.sleep(3)
    t = getpagenum()
    for i in range(0, t):
        url3 = 'http://weibo.cn/u/' + str(weiboid)+'?page='+str(i+1)
        print url3
        driver.get(url3)
        driver.save_screenshot('D:/'+str(i)+'.png')
        time.sleep(3)
        getweibodata()
scrapyall(1537790411)
driver.save_screenshot('D:/3.png')

"""
some_element = driver.find_element_by_css_selector(".home")
for i in range(0,8):
    some_element.send_keys(Keys.ARROW_DOWN)
    time.sleep(6)
    driver.save_screenshot('D:/get'+str(i)+'.png')
try:
    element = WebDriverWait(driver, 60).until(
        EC.presence_of_element_located((By.ID, "mod-pagination"))
    )
finally:
"""
driver.save_screenshot('D:/3.png')
"""
print '快去填写验证码！'
time.sleep(5)
yanzhengma = driver.find_element_by_css_selector("#captcha")
f = open('D:/yanzhengma.txt')
yzm = f.readline()
yanzhengma.send_keys(str(yzm))
login_btn.submit()
driver.save_screenshot('D:/2.png')
time.sleep(15)
driver.save_screenshot('D:/3.png')
"""
page_cookie = driver.get_cookies()
driver.quit()
