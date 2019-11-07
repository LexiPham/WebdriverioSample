# WebdriverioSample
This is a sample project to demo how to run webdriverio and see video on Zalenium.

#Prerequisites
- Docker: https://www.docker.com/products/docker-desktop
- NodeJs: https://nodejs.org/en/download/

#Steps:
1. Get docker images
docker pull elgalu/selenium
docker pull dosel/zalenium
2. Clone/download source code from this repository
3. Run Zalenium
docker-compose -f docker-compose.yml up
4. Check Zalenium is up and running on the link
http://localhost:4444/dashboard
5. Get npm packages
npm install
6. Run using config file
./node_modules/.bin/wdio wdio.conf.js -l 'silent'
7. A video should be populated on Zalenium

#More info
https://webdriver.io/
https://www.youtube.com/channel/UCdsG6Ebb5UBHOhltsofrsjg

