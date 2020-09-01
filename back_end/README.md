# ts-node-API server
 노드에 타입스크립트를 적용한 API 서버입니다.


## 1. 개요
* node는 자바스크립트 런타임(실행기)
* node는 typescript 자체를 실행시킬 수 없음
* deno는 타입스크립트 런타임

* 따라서 typescript를 자바스크립트로 변환시켜야 함
* 자바스크립트는 싱글쓰레드로 구성되어있기 때문에 죽기 쉽다.
* pm2나 forever로 임시로 서버를 다시 실행할 수 있지만 근본적인 해결책은 아님

## 2. Why typescript?
* 자바스크립트에서 자주나오는 type 에러를 방지할 수 있음
* 코드실행 전에 에러를 발견할 수 있음 (비용 감소) 
* test case까지 넣으면 금상첨화

## 3. typescript의 단점?
* 코드가 비교적 길어진다. (생산성 저하)
* 하지만 그에 비해 안정성을 도모할 수 있음

## 4. How to install
``` bash
$ npm init
$ npm i typescript -g
$ tsc --init
```

### 4.1. /tsconfig.json + /package.json
``` json
{
  "compilerOptions": {
    "strict": true,
    "lib": ["es2015", "es2016", "es2017", "es2018", "es2019", "es2020"],
    "moduleResolution": "node",
    "typeRoots": ["./types"]
  }
}
```

``` bash
$ npm i @types/node
$ npm i express @types/express
$ npm i --save-dev nodemon ts-node 
```

``` bash
$ npx ts-node index.ts 
```

> ts-node는 개발용!! <br>
> npx를 사용하면 글로벌로 install하지 않는 것도 사용가능


``` json
{
    "name": "back_end",
    "version": "1.0.0",
    "description": "노드에 타입스크립트를 적용한 API 서버입니다.",
    "main": "index.js",
    "scripts": {
        "start": "nodemon --exec ts-node src/index.ts",
        "build": "tsc index.ts"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "@types/express": "^4.17.7",
        "@types/node": "^14.6.2",
        "express": "^4.17.1",
        "typescript": "^4.0.2"
    },
    "devDependencies": {
        "nodemon": "^2.0.4",
        "ts-node": "^9.0.0"
    }
}
```
> start에 nodemon과 ts-node 적용<br>
> 추가적으로 배포와 db 확인 시 용이한 pm2도 적용(윈도우 환경에서는 부적합..)
``` bash
$ npm i pm2@latest -g

# 설치 확인
$ pm2 -v

$ pm2 install typescript 

# 실행
$ pm2 start src/index.ts

# 확인하는 다양한 방법
$ pm2 list
$ pm2 monit
$ pm2 log

# 프로세스 종료 (stop 뒤는 ID -> list에서 확인가능)
$ pm2 stop (ID)

# 프로세스 삭제 (delete 뒤는 ID -> list에서 확인가능)
$ pm2 delete (ID)

# 상세정보
$ pm2 show (name)

# 상세정보 + 동작되는 과정 
$ pm2 monit
```

### 4.2. dependencies vs. devDependencies

* npm install 시 컴파일 옵션같은 건가?

### 4.3. typing이 제대로 되고 있는지 검사
``` bash
$ npx tsc --traceResolution
```

### 4.4. 필요한 packages 설치

``` bash
$ npm i morgan cors cookie-parser express-session dotenv passport 
$ npm i hpp helmet 
$ npm i passport-local bcrypt
```
> 대부분의 packages가 typing을 지원하지 않기 때문에 추가 설치 필요

``` bash
$ npm i @types/morgan @types/cors @types/cookie-parser @types/express-session @types/dotenv @types/passport 
$ npm i @types/hpp @types/helmet 
$ npm i @types/passport-local @types/bcrypt
```

### 4.5. Sequelize 
``` bash
$ npm i sequelize
$ npm i sequelize-cli

$ npx sequelize init
$ npx sequelize db:create
```

* 쌩 쿼리 날리는 건 좋지 않음
* ORM을 통해서 쿼리를 보내는 걸 선호
* 비번 같은 경우 .env를 통해서 보관하는 과정이 있으면 좋음

