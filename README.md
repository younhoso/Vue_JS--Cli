# VUE-CLI 설정

## vue/cli setup
```
sudo npm install -g @vue/cli // VUE-CLI 처음사용 하시는 분들이라면 필수적으로 설치해야 한다.
```

## 프로젝트 생성 
```
vue create 프로젝트명
```
프로젝트를 생성할때. 질물 형식으로 설정을 도와줍니다.
![alt text](http://www.triplexlab.co.kr/images/vue-cli0.png)<br/> 
![alt text](http://www.triplexlab.co.kr/images/vue-cli1.png)<br/> 
![alt text](http://www.triplexlab.co.kr/images/vue-cli2.png)<br/> 
![alt text](http://www.triplexlab.co.kr/images/vue-cli3.png)<br/> 
![alt text](http://www.triplexlab.co.kr/images/vue-cli4.png)<br/>
![alt text](http://www.triplexlab.co.kr/images/vue-cli5.png)<br/>
![alt text](http://www.triplexlab.co.kr/images/vue-cli6.png)<br/>

## Project setup
```
yarn install
or
npm install
```

### Compiles and hot-reloads for development
```
yarn run serve
or
npm run serve
```

### 프로젝트 배포
```
yarn run build
or
npm run build
```
### 프로젝트 배포한 파일 실행해보기
```
sudo npm install -g http-server
cd dist/
http-server
```

### Run your tests
```
yarn run test
or
npm run test
```

### Lints and fixes files
```
yarn run lint
or
npm run lint
```

### 생성 creation
```
- beforeCreate
    data와 event가 세팅되지 않아 data에 접근이 불가
- created
    data, event 세팅되어 접근 가능
    api에서 데이터를 받아 data에 전달하는 등의 초반 동작 수행
```

### 마운트 mounting
```
- beforeMount
    첫 렌더링이 일어나기 직전
- mounted
    렌더링 후. 컴포넌트, 템플릿에 접근 가능
```

### 업데이트 updating
```
- beforeUpdate
    데이터가 변경되어 다시 렌더링될 때
- updated
    데이터가 변경되어 렌더링된 이후
```

### 소멸, 해체 Destruction
```
- beforeDestroy
    소멸되기 전에 호출
- destroyed
    소멸된 후 호출
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
