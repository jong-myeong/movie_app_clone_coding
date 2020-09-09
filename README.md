# 클론코딩 영화 평점 웹사이트
![클론코딩영화평점웹서비스](https://user-images.githubusercontent.com/52479435/92557612-8ac75180-f2a7-11ea-9ebd-11590d0619c9.png)
  
## 목차
1. 안녕 리액트?
2. 리액트로 클론 코딩 시작하기
3. 리액트 기초 개념 알아보기
4. 슈퍼 똑똑하게 컴포넌트 만들기
5. state와 클래스형 컴포넌트
6. 영화 앱 만들기
7. 영화 앱 다듬기
8. 영화 앱에 여러 기능 추가하기
---
### Chapter1. 안녕 리액트?
##### 수업 준비
- Node.js 설치 확인
명령 프롬프트에서 `node -v`
- Node.js 설치 :point_right: <https://nodejs.org>
- [npm](https://ko.wikipedia.org/wiki/Npm_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)) 설치 확인 :point_right: 명령 프롬프트에서 `npm -v`
- [npx](https://geonlee.tistory.com/32) 설치하기 :point_right: 명령 프롬프트에서 `npm install npx -g`

### Chapter2. 리액트로 클론 코딩 시작하기
##### 1. create-react-app
create-react-app은 리액트 개발을 바로 시작할 수 있도록 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해주는 도구
*실행*
명령 프롬프트를 실행한 후 리액트 앱을 만들고 싶은 곳으로 이동해서
`npx create-react-app 원하는 이름` 으로 리액트 앱 만들기
##### package.json 파일 수정
package.json 파일에서 test와 eject 명령어는 사용하지 않으니 삭제
```javascript
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",       // 삭제
    "eject": "react-scripts eject"      // 삭제
  },
```
##### 2. 리액트 앱 실행하기
명령 프롬프트에서 루트 폴더로 이동한 다음 `npm start` 입력
##### 3. src 폴더 정리
src 폴더에 App.js, index.js 제외하고 모두 제거
##### 4. App.js, index.js 수정
:file_folder: ./src/App.js
```javascript
import React from 'react';

function App() {
  return <div className="App" />;
}

export default App;
```
:file_folder: ./src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ID가 root인 엘리먼트에 App 컴포넌트를 그린다
ReactDOM.render(<App />, document.getElementById('root'));
```

### Chapter3. 리액트 기초 개념 알아보기
##### 1. 컴포넌트 만들기
:file_folder: ./src/Movie.js
```javascript
import React from 'react';

// 컴포넌트는 대문자로 시작
function Movie() {
  return <h3>I love Movie</h3>;
}

// 컴포넌트 이름으로 export
export default Potato;
```
##### 2. JSX
JSX는 JavaScript와 HTML의 조합한 문법이다.
```javascript
function Movie() {
  // JSX 문법
  return <h3>I love Movie</h3>;
}
```
##### 3. 컴포넌트 사용
1. import 해서 사용  
:file_folder: ./src/App.js
```javascript
import Movie from './Movie';

function App() {
  return (
  <div>
    <h1>Hello</h1>
    // App 컴포넌트 반환값으로 Movie 컴포넌트 추가
    <Movie />
  </div>
  );
}
```
2. 같은 파일 내에 컴포넌트 정의해서 사용  
:file_folder: ./src/App.js
```javascript
import React from 'react';

function Movie() {
  return <h3>I love Movie</h3>;
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Movie />
  </div>
  );
}

export default App;
```
##### 3. props
props는 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다. 함수의 매개변수와 비슷한 개념이라고 생각할 수 있다.  
props를 사용하면 컴포넌트를 효율적으로 사용할 수 있다.
1. props로 컴포넌트에 데이터 전달하기
:file_folder: ./src/App.js
```javascript
function Movie(props) {
  // ② 중괄호로 감싸서 props.fav를 화면에 출력
  return <h3>I love { props.fav }</h3>;
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    // ① fav라는 이름의 props 추가
    <Movie fav="Iron Man"/>
  </div>
  );
}

export default App;
```
2. 구조분해 할당으로 props 사용 - ES6 문법
:file_folder: ./src/App.js
```javascript
function Movie(props) {
  { fav } = props;
  return <h3>I love { fav }</h3>;
}
```
또는
```javascript
function Movie({ fav }) {
  return <h3>I love { fav }</h3>;
}
```
3. 여러 개의 컴포넌트에 props 사용
:file_folder: ./src/App.js
```javascript
function Movie({ fav }) {
  return <h3>I love {fav }</h3>;
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Movie fav="Iron Man"/>
    <Movie fav="Captain America"/>
    <Movie fav="Spider Man"/>
    <Movie fav="Avengers"/>
  </div>
  );
}

export default App;
```