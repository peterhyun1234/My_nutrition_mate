# My_nutrition_mate(2020.03 - 2020.07)
> 2020 Summer Humman Computer Interaction: My Nutrition Mate

## 1. Technology used
### Vue.js + Nuxt.js >
    My Nutrition 웹앱 front-end를 만들기 위해서 사용
### Node.js + TypeScript >
    프로세싱한 데이터를 front-end로 API를 공급하는 Server (in AWS EC2)  
### RDBMS >   
    - MySQL: 음식과 영양소에 대한 정보 저장
    - Firebase: 사용자에 대한 정보 저장

## 2. directory description
### 2.1 /front-end  
    - Netlify로 자동으로 변경 및 배포되는 front-end 코드

### 2.2 /back-end
    - AWS EC2 서버에서 데몬 프로세스로 있는 node.js 코드

## 3. Development result
### Main 화면
![mnm1](https://user-images.githubusercontent.com/46476398/92077322-21eb5f80-edf7-11ea-90d1-b3e813ae5704.JPG)


### 3.1 내 식단 확인
![mnm2](https://user-images.githubusercontent.com/46476398/92077324-231c8c80-edf7-11ea-8c02-b13cfc76a001.JPG)

### 3.2 식단 분석
![mnm3](https://user-images.githubusercontent.com/46476398/92077325-23b52300-edf7-11ea-894d-b5fdd9ef35eb.JPG)

### 3.3 식사 추천
![mnm4](https://user-images.githubusercontent.com/46476398/92077326-244db980-edf7-11ea-9ff5-65782d053c27.JPG)

## 4. How to process

### 4.1. Running front-end

``` bash
# go to directory
$ cd /front-end

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
### 4.2. Running back-end

``` bash
# go to directory
$ cd /back-end

# install node and npm (in ubuntu)
$ sudo apt-get update 
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ npm init --yes
$ npm install express mysql --save

# start node server with exit state(background)    
$ nohup npm start &
$ exit

# start node server with auto_modifying state(Daemon process)
$ nohup nodemon </dev/null &
$ exit
```

## 5. I felt that
    - UI보단 UX를 중점적으로 생각하면서 개발하라는 교수님의 말을 따라 개발하다보니 사용자가 원하는 것을 더 생각해볼 수 있어서 개발해서 의미가 있었다. 
    - HCI가 개발에 있어서 꼭 필요하다고 생각했다. 특히 색의 조합이 사용자에게 끼치는 영향을 체감할 수 있어서 좋았다. 

## 6. contact
    e-mail: peterhyun1234@gmail.com
