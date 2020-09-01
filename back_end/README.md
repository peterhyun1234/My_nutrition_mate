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
### 4.2. typing이 제대로 되고 있는지 검사
``` bash
$ npx tsc --traceResolution
```

## 5. mysql + sequelize + dotenv 적용
## 5.1. mysql
``` bash
1. mysql을 설치하고, 스키마와 계정을 생성

# mysql 접속
$ mysql -u 사용자명 -p dbname

# 현재 사용자 목록 확인
mysql> use mysql;
mysql> select User,Host from user;

# 권한 확인 'username'@'hostname'
mysql> SHOW GRANTS FOR 'username'@'%' 

# 생성 후 필수 권한만 부여. - 실서비스 계정은 가급적 이렇게 필요 권한만 부여할 것.
mysql> CREATE USER username@localhost IDENTIFIED BY 'userpassword'
mysql> GRANT SELECT,INSERT,UPDATE,DELETE ON dbname.* TO 'username'@'localhost';
 
# 생성과 전체 권한 일괄 부여
mysql> GRANT ALL PRIVILEGES ON dbname.* TO username@localhost IDENTIFIED BY 'password';

# 데이터베이스를 생성하고,
mysql> CREATE DATABASE dbname;
 
# 현재 존재하는 데이터베이스 목록
mysql> SHOW DATABASES;
 
# 특정 데이타베이스를 사용하겠다고 선언
mysql> USE dbname;
 
# 쓸모 없으면 삭제
mysql> DROP DATABASE [IF EXISTS] dbname;

# 테이블 생성
mysql> CREATE TABLE 테이블명 (
    _id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    job VARCHAR(64) DEFAULT 'student',
    phone VARCHAR(12)
)

# 테이블 수정
mysql> alter table 테이블명 add 새로추가할필드명과 타입 after 필드이름;

# 테이블 구조
mysql> EXPLAIN tablesname;

# INSERT
mysql> INSERT INTO tablename (col1, col2, ...) VALUES(값1, 값2, ...);

# UPDATE
mysql> UPDATE tablename SET col1=새값 WEHER 조건

# DELETE
mysql> DELETE FROM tablename WEHRE 조건

# 나가기
mysql> EXIT;

```
## 5.2. sequelize
``` bash
$ npm i sequelize
$ npm i sequelize-cli

# sequelize 기본 디렉토리 설정
$ npx sequelize init

# sequelize로 db를 직접 control 가능
$ npx sequelize db:create
```

* 자바스크립트 코드로 mysql을 제어
* sequelize는 ORM(Object-Relational Mapping)로 분류
* 비번 같은 경우 .env를 통해서 보관하는 과정이 있으면 좋음

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

