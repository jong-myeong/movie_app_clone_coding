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

**실행**

명령 프롬프트를 실행한 후 리액트 앱을 만들고 싶은 곳으로 이동해서
`npx create-react-app 원하는 이름` 으로 리액트 앱 만들기
##### 1. package.json 파일 수정
package.json 파일에서 test와 eject 명령어는 사용하지 않으니 삭제
```javascript
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",     // 삭제
    "eject": "react-scripts eject"    // 삭제
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
export default Movie;
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
    <Movie />
  </div>
  );
}

export default App;
```
##### 4. props
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
2. 구조분해 할당으로 props 사용 - ES6

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
  return <h3>I love { fav }</h3>;
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

### Chapter4. 슈퍼 똑똑하게 컴포넌트 만들기
##### 1. map 함수
**map 함수** : 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고, 그 함수가 반환한 결과를 모아서 배열로 반환해준다

<map 함수 예제>
```javascript
const movieList = ["Iron Man", "Captain America", "Spider Man", "Avengers"];

movieList.map(current => {
  console.log(current);
  return 0;
})
```
<결과>
```
Iron Man          // console.log(current)가 출력한 첫 번째 값 (반환값이 아닌 콘솔창에 보이는 값)
Captain America   // console.log(current)가 출력한 두 번째 값 (반환값이 아닌 콘솔창에 보이는 값)
Spider Man        // console.log(current)가 출력한 세 번째 값 (반환값이 아닌 콘솔창에 보이는 값)
Avengers          // console.log(current)가 출력한 네 번째 값 (반환값이 아닌 콘솔창에 보이는 값)

[0, 0, 0, 0]      // movieList.map의 최종 반환값
```
##### 2. map 함수로 컴포넌트 여러 개 만들기

:file_folder: ./src/App.js
```javascript
// 영화 제목과 포스터 URL을 담은 배열 생성
const moviesILike = [
  {
    name: "Iron Man",
    image: "imgae URL"
  },
  {
    name: "Captain America",
    image: "imgae URL"
  },
  {
    name: "Spider Man",
    image: "imgae URL"
  },
  {
    name: "Avengers",
    image: "imgae URL"
  },
];

// Movie 컴포넌트에서 name props와 picture props 사용
function Movie({ name, picture }) {
  return (
  <div>
    <h2>I love { name }</h2>
    <img src={ picture } />
  </div>
  );
}

function App() {
  return (
  <div>
    // create-react-app를 통해 만든 app에서 map 함수를 사용할 때는 함수 안에 {} 대신 ()를 사용한다
    {moviesILike.map(movie => (
      // Movie 컴포넌트에 name props와 picture props 추가
      <Movie name={movie.name} picture={movie.image} />
    ))}
  </div>
  );
}

export default App;
```
##### 3. map 함수로 만든 컴포넌트에 key props 추가하기
현재 콘솔 창에는 두 가지 메시지가 있을 것이다.
```
> Warning: Each child in a list should have a unique "key" prop,
(생략...)
```
```
> img elements must have an alt prop,
(생략...)
```
이 두 메시지를 해결하기 위해 moviesILike 배열 원소에 id 값을 추가하고 img 엘리먼트에 alt 속성을 추가한다

배열 내 데이터에 id를 추가하는 이유는 리액트는 컴포넌트가 서로 다르다는 걸 알 방법이 없기 때문에 서로 다르다는 것을 알려주기 위해 컴포넌트에 key props를 추가해야 한다.

:file_folder: ./src/App.js
```javascript
function Movie({ name, picture }) {
  return (
  <div>
    <h2>I love { name }</h2>
    // alt 속성 추가
    <img src={ picture } alt={ name }/>
  </div>
  );
}

// id 값 추가
const moviesILike = [
  {
    id: 1,
    name: "Iron Man",
    image: "imgae URL"
  },
  {
    id: 2,
    name: "Captain America",
    image: "imgae URL"
  },
  {
    id: 3,
    name: "Spider Man",
    image: "imgae URL"
  },
  {
    id: 4,
    name: "Avengers",
    image: "imgae URL"
  },
];

function App() {
  return (
  <div>
    {moviesILike.map(movie => (
      // key props 추가
      <Movie key={movie.id} name={movie.name} picture={movie.image} />
    ))}
  </div>
  );
}
```
##### 4. props 검사하는 방법
우리가 정의한 props의 값이 컴포넌트에 제대로 전달되지 않으면 우리가 원하는 대로 앱이 작동하지 않을 것이다. 이런 경우에 props를 검사하는 방법이 필요하다.

예를 들어, 우리가 만들고 있는 Movie 앱에 '평점' 항목을 추가했다고 가정해보자.

:file_folder: ./src/App.js
```javascript
// 평점(rating) 값 추가
const moviesILike = [
  {
    id: 1,
    name: "Iron Man",
    image: "imgae URL",
    rating: 5
  },
  {
    id: 2,
    name: "Captain America",
    image: "imgae URL",
    rating: 4.5
  },
  {
    id: 3,
    name: "Spider Man",
    image: "imgae URL",
    rating: 4.8
  },
  {
    id: 4,
    name: "Avengers",
    image: "imgae URL",
    rating: 4.9
  },
];
```
props 자료형 검사를 위해 prop-types를 설치해야 한다.
- prop-types 설치 :point_right: 명령 프롬프트에서 `npm install prop-types`

**prop-types 적용하기**

:file_folder: ./src/App.js
```javascript
import React from 'react';
// PropTypes import
import PropTypes from 'prop-types';

// Movie 컴포넌트에서 rating props 사용
function Movie({ name, picture, rating }) {
  return (
  <div>
    <h2>I love { name }</h2>
    <h4>{ rating }/5.0</h4>
    <img src={ picture } alt={ name }/>
  </div>
  );
}

const moviesILike = [
  {
    id: 1,
    name: "Iron Man",
    image: "imgae URL",
    rating: 5
  },
  // (생략...)
];

function App() {
  return (
  <div>
    {moviesILike.map(movie => (
      // Movie 컴포넌트에 rating props 추가
      <Movie key={movie.id} name={movie.name} picture={movie.image} rating={movie.rating} />
    ))}
  </div>
  );
}

// prop-types 적용
Movie.propTypes = {
  // .isRequired : 반드시 필요
  name: PropTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  // 반드시 필요하지 않으면 생략 가능
  rating: propTypes.number,
};

export default App;
```

### 5. state와 클래스형 컴포넌트
##### 1. 클래스형 컴포넌트

클래스형 컴포넌트는 React.Component 클래스를 상속해서 만들어진다.

함수형 컴포넌트와 다르게 return 문이 JSX를 반환하지 않고, render() 함수가 JSX를 반환한다. 이것은 클래스형 컴포넌트가 render() 함수를 자동으로 실행시키기 때문이다.

기존에 있었던 코드를 지우고 아래 코드만 남겨서 클래스형 컴포넌트를 사용해보자.

:file_folder: ./src/App.js
```javascript
import React from 'react';

// App 클래스는 React.Component 클래스를 상속
class App extends React.Component {
  // render() 함수가 JSX를 반환
  render() {
    return <h1>I'm a class compnent.</h1>l
  }
}

export default App;
```

##### 2. state
state는 클래스형 컴포넌트에서 동적 데이터를 다루기 위해 사용되는 '객체'이다.

state를 사용하려면 반드시 클래스형 컴포넌트 안에서 소문자를 이용하여 state라고 적어야 한다.

state는 render() 함수에서 {this.state.변수명} 형식으로 사용할 수 있다.
```javascript
class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return <h1>The number is { this.state.count }</h1>
  };
}
```

##### 3. 버튼으로 숫자 증감 기능 만들기
state 데이터 다루는 연습을 위해 버튼을 눌러 숫자를 증감시키는 예제를 만들어보자

:file_folder: ./src/App.js
```javascript
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.state.count++;
  }
  
  minus = () => {
    this.state.count--;
  }

  render() {
    return (
    <div>
      <h1>The number is { this.state.count }</h1>
      <button onClick={ this.add }></button>
      <button onClick={ this.minus }></button>
    </div>
    );
  }
}
```

위와 같은 방식으로 state의 데이터를 동적으로 바꿀 수 있을 것이라 생각했겠지만, 리액트에서 state는 특별하게 다뤄야 한다.

리액트는 state가 변경되면 render() 함수를 다시 실행하여 변경된 state를 화면에 출력한다. 하지만 state를 직접 변경하는 경우에는 render() 함수를 다시 실행하지 않는다.

현재 콘솔에 이런 경고 메시지가 있을 것이다.

```
> Do not mutate state directly. Use setState()
```
즉, setState() 통해 state의 데이터를 바꿀 수 있다.

:file_folder: ./src/App.js
```javascript
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  }
  
  minus = () => {
    this.setState({ count: this.state.count - 1});
  }

  // (생략...)
}
```
앱을 실행하면 잘 동작하지만, `count: this.state.count + 1` 방식으로 코드를 작성하여 state를 업데이트 하는 방법은 성능 문제가 생길 수 있어 좋지 않다.

setState() 함수의 인자로 함수를 전달하면 성능 문제 없이 state를 업데이트 할 수 있다.

:file_folder: ./src/App.js
```javascript
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    // current에 현재 state가 넘어온다
    this.setState(current => ({
      // current로 넘어온 state의 count의 값에 1을 더한다
      count: current.count + 1
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  }

  // (생략...)
}
```

##### 4. 클래스형 컴포넌트 생명주기 함수

① constructor() 함수 : 클래스형 컴포넌트의 생명주기 함수는 아니지만 클래스형 컴포넌트가 생성될 때 호출되는 함수

② componentDidMount() 함수 : 컴포넌트가 처음 화면에 그려지면 실행되는 함수

`constructor()` :arrow_right: `render()` :arrow_right: `componentDidMount()` 순서로 실행된다

③ componentDidUpdate() 함수 : 화면이 업데이트 되면 실행되는 함수

`setState()` :arrow_right: `render()` :arrow_right: `componentDidUpdate()` 순서로 실행된다

④ componentWillUnmount() 함수 : 컴포넌트가 화면에서 떠날 때 실행되는 함수. 주로 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용한다
