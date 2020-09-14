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
#### 수업 준비
- Node.js 설치 확인
명령 프롬프트에서 `node -v`
- Node.js 설치 :point_right: <https://nodejs.org>
- [npm](https://ko.wikipedia.org/wiki/Npm_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)) 설치 확인 :point_right: 명령 프롬프트에서 `npm -v`
- [npx](https://geonlee.tistory.com/32) 설치하기 :point_right: 명령 프롬프트에서 `npm install npx -g`

### Chapter2. 리액트로 클론 코딩 시작하기

#### 1. create-react-app

create-react-app은 리액트 개발을 바로 시작할 수 있도록 프로젝트 구조 작업, 설정 작업 등을 자동으로 진행해주는 도구다

**실행**

명령 프롬프트를 실행한 후 리액트 앱을 만들고 싶은 곳으로 이동해서
`npx create-react-app 원하는 이름` 으로 리액트 앱 만들기

#### 2. package.json 파일 수정

package.json 파일에서 test와 eject 명령어는 사용하지 않으니 삭제
```javascript
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",     // 삭제
    "eject": "react-scripts eject"    // 삭제
  },
```
#### 3. 리액트 앱 실행하기

명령 프롬프트에서 루트 폴더로 이동한 다음 `npm start` 입력

#### 4. src 폴더 정리

src 폴더에 App.js, index.js 제외하고 모두 제거

#### 5. App.js, index.js 수정

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

#### 1. 컴포넌트 만들기

컴포넌트는 대문자로 시작하며, 컴포넌트 이름으로 export를 해줘야한다

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

#### 2. JSX

JSX는 JavaScript와 HTML의 조합한 문법이다.

:file_folder: ./src/Movie.js
```javascript
function Movie() {
  // JSX 문법
  return <h3>I love Movie</h3>;
}
```

#### 3. 컴포넌트 사용

**① import 해서 사용**  

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

**② 같은 파일 내에 컴포넌트 정의해서 사용**  

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

#### 4. props

props는 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다. 함수의 매개변수와 비슷한 개념이라고 생각할 수 있다.  
props를 사용하면 컴포넌트를 효율적으로 사용할 수 있다.

**① props로 컴포넌트에 데이터 전달하기**  

:file_folder: ./src/App.js
```javascript
function Movie(props) {
  // 2) 중괄호로 감싸서 props.fav를 화면에 출력
  return <h3>I love { props.fav }</h3>;
}

function App() {
  return (
  <div>
    <h1>Hello</h1>
    // 1) fav라는 이름의 props 추가
    <Movie fav="Iron Man"/>
  </div>
  );
}

export default App;
```

**② 구조분해 할당으로 props 사용 - ES6**

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

**③ 여러 개의 컴포넌트에 props 사용**

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

#### 1. map 함수

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

#### 2. map 함수로 컴포넌트 여러 개 만들기

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

#### 3. map 함수로 만든 컴포넌트에 key props 추가하기

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

#### 4. props 검사하는 방법

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

명령 프롬프트에서 `npm install prop-types`

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

#### 1. 클래스형 컴포넌트

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

#### 2. state

state는 클래스형 컴포넌트에서 동적 데이터를 다루기 위해 사용되는 '객체'이다.

state를 사용하려면 반드시 클래스형 컴포넌트 안에서 소문자를 이용하여 state라고 적어야 한다.

state는 render() 함수에서 {this.state.변수명} 형식으로 사용할 수 있다.

📁 ./src/App.js
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

#### 3. 버튼으로 숫자 증감 기능 만들기

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

즉, 직접 state 데이터를 바꾸는 것이 아니라 setState() 통해 state의 데이터를 바꿀 수 있다.

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

#### 4. 클래스형 컴포넌트 생명주기 함수

**① constructor() 함수** : 클래스형 컴포넌트의 생명주기 함수는 아니지만 클래스형 컴포넌트가 생성될 때 호출되는 함수

**② componentDidMount() 함수** : 컴포넌트가 처음 화면에 그려지면 실행되는 함수

`constructor()` :arrow_right: `render()` :arrow_right: `componentDidMount()` 순서로 실행된다

**③ componentDidUpdate() 함수** : 화면이 업데이트 되면 실행되는 함수

`setState()` :arrow_right: `render()` :arrow_right: `componentDidUpdate()` 순서로 실행된다

**④ componentWillUnmount() 함수** : 컴포넌트가 화면에서 떠날 때 실행되는 함수. 주로 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용한다

### 6. 영화 앱 만들기

#### 1. 영화 앱 만들기 워밍업

:file_folder: ./src/App.js
```javascript
import React from 'react';

class App extends React.Component {
  state = {
    // 영화 로딩 상태
    isLoading: true,
    // 영화 데이터 받을 배열 미리 생성
    movies: [],
  };

  componentDidMount() {
    // 6초 뒤 영화 데이터가 다 불러와진다고 가정하고 setState() 함수 실행
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    // 구조 분해 할당을 통해 isLoading을 this.state를 입력하지 않고 사용할 수 있다
    const { isLoading } = this.state;
    return <div>{ isLoading ? 'Loading...' : 'We are ready'}</div>
  }
}

export default App;
```

#### 2. 영화 API 사용하기
영화 데이터를 로딩하려면 자바스크립트의 fetch()라는 함수가 필요하지만, fetch()는 이 책의 범위를 넘어가므로 axios를 사용해서 영화 앱을 만든다

**① axios 설치하기**

명령 프롬프트에서 `npm install axios`

**② 노마드 코더 영화 API를 영화 앱에서 호출하기**

📁 ./src/App.js
```javascript
import React from 'react';
// axios import
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    // axios로 노마드 코더 영화 API 호츨
    axios.get('https://yts-proxy.now.sh/list_movies_json')
  }

  // (생략...)
```

**③ 영화 API 호출하는 함수를 만들고 `async`와 `await`으로 영화 API로 얻은 데이터 잡기**

📁 ./src/App.js
```javascript
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // 2) async 를 통해 getMoives 함수는 시간이 필요하다는 것을 알린다
  getMovies = async () => {
    // 3) await 을 통해 axios.get의 실행이 완료될 때까지 기다려야 한다는 것을 알린다
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies_json');
  }

  // 1) getMoives 함수는 영화 데이터가 다 불러와진 후에 실행되어야 한다
  componentDidMount() {
    this.getMovies();
  }

  // (생략...)
}
```

#### 3. 영화 데이터 화면에 그리기

영화 API로 얻은 데이터에서 우리가 필요한 영화 데이터 객체는  
data > data > moives 순서로 접근해서 추출할 수 있다 👉 `movies.data.data.movies`

하지만 이런 방법으로 객체에 접근하는 것은 복잡하다. 구조 분해 할당을 활용하면 편하게 접근할 수 있다

그리고 setState를 통해 movies state에 영화 데이터를 저장하고, isLoading을 false로 업데이트한다

📁 ./src/App.js
```javascript
// (생략...)
getMovies = async () => {
  // 구조 분해 할당
  const {
    data: {
      data: { movies },
    },
  } = await axios.get("https://yts-proxy.now.sh/list_movies_json");
  // state에 데이터 저장
  // this.setState({ movies: movies })로 작성해야 하지만 ES6에서는 키와 대입할 변수 이름이 같으면 축약 가능
  this.setState({ movies, isLoading: false })
}
// (생략...)
```

#### 4. Movie 컴포넌트 만들기

**① src 폴더에 Movie.js 파일을 새로 만들고 Movie 컴포넌트를 만든다**

📁 ./src/Movie.js
```javascript
import React from 'react';
import PropTypes from 'prop-types';

// 함수형 컴포넌트로 작성하고 props를 넘겨준다
function Movie({ title, year, summary, poster }) {
  return <h4>{ title }</h4>;
}

// Movie.propTypes 작성
// 자료형에 주의하면서 props를 추가한다
Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
```

**② API에 구현되어 있는 정렬 기능을 사용해서 평점 순으로 데이터 보여주기**

axios.get()에 'yts-proxy.now.sh/list_movies_json?sort_by=rating' 을 전달한다

```javascript
// (생략...)
getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies_json?sort_by=rating');
    this.setState({ movies, isLoading: false })
  };
// (생략...)
```

**③ App 컴포넌트에서 Movie 컴포넌트 그리기**

구조 분해 할당으로 this.state에 있는 movies를 얻은 다음, App 컴포넌트에서 movies.map()을 사용하여 Movie 컴포넌트를 반환하도록 한다

📁 ./src/App.js
```javascript
import React from 'react';
import axios from 'axios';
// Movie 컴포넌트 import
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies_json?sort_by=rating');
    this.setState({ movies, isLoading: false })
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // 구조 분해 할당으로 this.state에 있는 movies를 얻는다
    const { isLoading, movies } = this.state;
    return (
    <div>
      { isLoading 
      ? 'Loading...' 
      : movies.map((movie) => {
        // Movie 컴포넌트 반환
        return (
          <Movie
            // Movie 컴포넌트에 props 전달
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        );
      })}
    </div>
    )
  }
}

export default App;
```

#### 5. 영와 앱 스타일링하기 - 기초

**App 컴포넌트에 HTML 추가하기**

📁 ./src/App.js
```javascript
// (생략...)
render() {
  const { isLoading, movies } = this.state;
  return (
  <section class="container">
    { isLoading ? ( 
      <div class="loader">
        <span class="loader__text">Loading...</span>
      </div>
    ) : (
      <div class="movies">
        {movies.map((movie) => {
          return (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          )
        })}
      </div>
    )}
  </section>
  )
}
```

📁 ./src/Movie.js
```javascript
import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, year, summary, poster }) {
  return (
    <div class="movie">
      // 영화 포스터 이미지 추가
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
// (생략...)
```

### 7. 영화 앱 다듬기

#### 1. 영화 앱 전체 모습 수정하기

**영화 API에서 장르 키를 영화 앱에 추가하기 위해 Movie 컴포넌트에 genres props 넘겨주기**

📁 ./src/Movie.js
```javascript
// genres props 넘겨주기
function Movie({ title, year, summary, poster, genres }) {
  // (생략...)
}

Movie.propTypes = {
  // (생략...)
  // genres의 prop-type 추가
  genres: PropTypes.arrayOf(PropTypes).isRequired,
};
```

**App 컴포넌트에서 Movie 컴포넌트로 genres props 전달**

📁 ./src/App.js
```javascript
render() {
  // (생략...)
  return (
    <Movie 
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      // genres props 전달
      genres={movie.genres}
    />
  )
}
```

현재 콘솔창에는 `Warning: Invalid DOM property 'class'. Did you mean 'className'?` 이라는 경고 메시지가 보일 것이다.

이것은 JSX 때문이다. HTML의 class와 자바스크림트의 class라는 이름이 겹치면 리액트가 혼란스러울 수 있으므로 하나는 다른 이름을 써야한다. Movie.js와 App.js의 class 속성을 className 속성으로 바꿔준다.

📁 ./src/Movie.js
```javascript
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
```

이제 Movie 컴포넌트에서 장르를 출력하도록 코드를 수정해야 한다. genres props가 배열이므로 map()함수를 사용해 ul, li 엘리먼트로 감싸 출력한다.

이때, 장르 배열은 API에서 id와 같은 값을 매겨 주지 않는다. 그래서 li 엘리먼트에 key props를 추가하지 않으면 콘솔창에  
`Warning: Each child in a list should have a unique "key" prop.` 메시지가 출력된다.

이런 경우엔 map() 함수에 전달할 함수에 두 번째 인자를 전달하면 된다. map() 함수에 전달할 함수의 2번째 인자에는 map() 함수가 반복 실행하며 반환할 배열 원소의 인덱스가 자동으로 들어오게 된다. 이 값을 이용 하면 key props를 손쉽게 추가할 수 있다.

📁 ./src/Movie.js
```javascript
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          // genre에는 genres의 배열 원소가 전달되고
          // index 자리에 1,2,3번째 임을 알리는 숫자가 전달된다
          {genres.map((genre, index)=> {
            // li 엘리먼트에 key props로 index를 전달한다
            return <li key={index} className="movie__genre">{genre}</li>;
          })}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}
```

#### 2. 영화 앱 스타일링하기

**App.css 파일 수정**

📁 ./src/App.css
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eff3f7;
  height: 100%;
}
```

📁 ./src/Movie.css
```css
.movies .movie {
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movies .movie a {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
}

.movie img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie .movie__title,
.movie .movie__year {
  margin: 0;
  font-weight: 300;
}

.movie .movie__title {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
}

.movie .movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
}

.movie__genres li,
.movie .movie__year {
  margin-right: 10px;
  font-size: 14px;
}
```

**시놉시스 180자로 제한하기**

📁 ./src/Movie.js
```javascript
function Movie({ title, year, summary, poster, genres }) {
  return (
    // (생략...)
    // slice() 함수를 사용해서 시놉시스를 180자로 제한
    <p className="movie__summary">{summary.slice(0, 180)}...</p>
  );
}
```

**영화 앱 제목 바꾸기**

📁 ./public/index.html
```html
<!-- 생략 -->
<title>Movie App</title>
<!-- 생략 -->
```

### 8. 영화 앱에 여러 기능 추가하기

#### 1. react-router-dom 설치하고 프로젝트 폴더 정리하기

가장 처음으로 만들 기능은 내비게이션 기능으로 Home은 영화 앱 화면으로 이동시켜주고, About은 개발자 자기 소개 화면으로 이동시켜준다. 이때 '화면 이동'을 시켜주려면 '화면 이동을 시켜주는 장치'가 필요한데 이것이 라우터다.

**① 라우터 설치** : 명령 프롬프트에서 `npm install react-router-dom`

**② components 폴더에 Movie 컴포넌트 옮기기**

📁 ./src/components/Movie.js
📁 ./src/components/Movie.css

**③ routes 폴더에 라우터가 보여줄 화면 만들기**

Home.js 파일에 작성하는 코도는 App.js 파일의 코드를 그대로 복사해서 필요한 부분을 수정한다

📁 ./src/routes/Home.js
```javascript
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component {
  // (생략...)
}

export default Home;
```

Home.css를 import 했으므로 Home.css를 만들어준다

📁 ./src/routes/Home.css
```javascript
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.movies {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
}

@media screen and (max-width: 1090px) {
  .movies {
      grid-template-columns: 1fr;
      width: 100%;
  }
}
```

**④ App.js 수정**

📁 ./src/App.js
```javascript
import React from 'react';
import Home from './routes/Home';
import './App.css'

function App() {
  return <Home />;
}

export default App;
```

이제 App.js가 2개의 라우터(Home.js, About.js)를 보여줄 수 있도록 만들면 된다.

#### 2. 라우터 만들어 보기

라우터는 URL을 통해 특정 컴포넌트를 불러오는 역할을 한다. 

예를 들어, `localhost:3000/home` 이라고 입력하면 Home 컴포넌트를 불러온다.

react-router-dom은 여러 종류의 라우터를 제공하는데 우리는 HashRouter와 Route 컴포넌트를 사용할 것이다.

**① HashRouter와 Route 컴포넌트 사용하기**

HashRouter와 Route 컴포넌트를 import 하고, HashRouter 컴포넌트가 Route 컴포넌트를 감싸 반환하도록 App.js를 수정한다

📁 ./src/App.js
```javascript
import React from 'react';
// import Home from './routes/Home'; ⇒ 잠시 삭제
import './App.css'
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route />
    </HashRouter>
  )
}

export default App;
```

HashRouter 때문에 앱이 실행되는 주소에 #/이 붙게 된다

**② Route 컴포넌트에 path, component props 추가하기**

About 컴포넌트를 import 하고 path, component props에 URL과 About 컴포넌트를 전달한다

📁 ./src/App.js
```javascript
// (생략...)
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
```

**③ About.js 수정하기**

아직 About.js에 아무것도 입력하지 않았으니 적당한 내용을 작성해보자

📁 ./src/route/About.js
```javascript
import React from 'react';

function About() {
    return <span>About this page: I built it because I love movies.</span>
}

export default About;
```

**④ 라우터 테스트**

localhost:3000/#에 path props로 지정했던 값 /about을 붙여서 접속해보자

URL은 localhost:3000/#/aobut이고, About 컴포넌트에 작성했던 내용이 출력될 것이다

이제 Home 컴포넌트도 보여줄 수 있도록 App.js를 수정해보자

**⑤ Home 컴포넌트를 위한 Route 컴포넌트 추가하기**

App 컴포넌트에 Home 컴포넌트를 import 하고, 또 다른 Route 컴포넌트를 추가한다

📁 ./src/App.js
```javascript
// (생략...)
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      // path props를 "/"으로 입력한 이유는 
      // localhost:3000에 접속하면 기본으로 보여줄 컴포넌트가 Home 컴포넌트이기 때문이다
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
```

**⑥ 라우터 테스트하고 문제 찾기**

localhost:3000에 접속하면 주소 뒤에 자동으로 /#/가 붙으면서 영화 앱 화면이 나타난다. 

이어서 /about에 접속하면 About 컴포넌트와 Home 컴포넌트가 함께 출력된다.

이것은 리액트 라우터의 동작 방식 때문에 발생하는 문제이다.

![router mechanims](https://user-images.githubusercontent.com/52479435/93049662-6bac3380-f69c-11ea-838c-4a0e85a6ddc4.png)

라우터는 사용자가 /about에 접속하면 /, /about 순서로 path props가 있는지 찾는다.

그런데 현재 path props에는 /, /about이 모두 존재하기 때문에 Home 컴포넌트와 About 컴포넌트가 모두 출력되게 된다.

**⑦ Route 컴포넌트에 exact props 추가**

라우터가 path props에 있는 모든 컴포넌트를 출력하는 문제를 해결하기 위해

path props가 "/"인 Route 컴포넌트에 exact={true}를 추가한다

📁 ./src/App.js
```javascript
// (생략...)

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
```

**⑧ About.css 작성**

routes 폴더에 About.css 파일을 생성한 다음 내용을 입력한다.

📁 ./src/routes/About.css
```css
.about__container {
  box-shadow: 0 13px 27px -5px rgba(50, 50, 50, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  max-width: 400px;
  font-weight: 300;
}

.about__container span:first-child {
  font-size: 20px;
}
```

About.js에 About.css를 import 하고 css 내용을 적용할 수 있도록 JSX를 수정한다

📁 ./src/routes/About.js
```javascript
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about__container">
      <span>
        "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
      </span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;
```

#### 3. 내비게이션 만들어 보기

**① Navigartion 컴포넌트 만들기**

📁 ./src/components/Navigation.js
```javascript
import React from 'react';

function Navigation() {
    return (
        <div>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>
    );
}

export default Navigation;
```

**② Navigation 컴포넌트 App 컴포넌트에 포함시키기**

📁 ./src/App.js
```javascript
// (생략...)
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      // Navigation 컴포넌트는 반드시 HashRouter 컴포넌트 사이에 포함시켜야 한다
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
```

**③ Home 링크 테스트**

Home 링크를 눌러 보면 겉으로 보기에는 잘 동작하는 것 같다.

하지만 현재는 링크를 누를 때마다 리액트가 죽고, 새 페이지가 새로고침 되어 열리는 문제가 있다.

이것은 a 엘리먼트 특징 때문이다. a 엘리먼트의 href 속성은 페이지 전체를 다시 그리기 때문이다.

이 상태라면 필요한 부분만 다시 그려주는 리액트의 장점을 활용하기 힘들다.

이 문제를 해결하기 위해 react-router-dom의 Link 컴포넌트를 사용한다

**④ a 엘리먼트 Link 컴포넌트로 바꾸기**

Navigation 컴포넌트에 Link 컴포넌트를 import하고, a 엘리먼트를 Link 컴포넌트로 href 속성은 to로 바꿔준다.

📁 ./src/components/Navigation.js
```javascript
import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
    return (
        <div>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
        </div>
    );
}
```

**⑤ Navigation 컴포넌트 스타일링**

📁 ./src/components/Navigation.js
```javascript
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
```

📁 ./src/components/Navigation.css
```css
.nav {
	z-index: 1;
	position: fixed;
	top: 50px;
	left: 10px;
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 10px 20px;
	box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
		0 8px 16px -8px rgba(0, 0, 0, 0.3),
		0 -6px 16px -6px rgba(0, 0, 0, 0.025);
	border-radius: 5px;
}

@media screen and (max-width: 1090px) {
	.nav {
		left: initial;
		top: initial;
		bottom: 0px;
		width: 100%;
	}
}

.nav a {
	text-decoration: none;
	color: #0008fc;
	text-transform: uppercase;
	font-size: 12px;
	text-align: center;
	font-weight: 600;
}

.nav a:not(:last-child) {
	margin-bottom: 20px;
}
```

#### 4. 영화 상세 정보 기능 만들어 보기

Home에서 볼 수 있는 영화 정보는 아주 일부분이다. 영화 API를 통해 더 많은 정보를 받고 있으므로 이것을 활용해 영화 상세 정보 기능을 만들어보자

이 기능을 만들기 위해서는 route props를 반드시 이해해야 한다.

route props는 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props를 말한다. 즉, 우리가 직접 넘겨주지 않아도 기본으로 넘어가는 route props가 있고, 이것을 이용해야 영화 데이터를 사세 정보 컴포넌트로 전달할 수 있다.

**① route props 살표보기**

console.log()를 통해 About으로 어떤 props가 넘어오는지 살펴보자

📁 ./src/routes/About.js
```javascript
function About(props) {
  console.log(props);
  // (생략...)
}
```

About 페이지 [Console] 탭에  
`{history: {...}, Location: {...}, match:{...}, staticContext: undefined}`  
가 보일 것이다. 이게 react-router-dom에서 Route 컴포넌트가 그려줄 컴포넌트에 전달한 props다.

우리가 주목해야할 점은 Route 컴포넌트가 그려줄 컴포넌트에는 항상 props가 전달되고, 이 props에 우리가 원하는 데이터를 담아 보내줄 수 있다는 것이다.

**② route props에 데이터 담아 보내기**

route props에 데이터를 담아 보내려면 Navigation 컴포넌트에 있는 Link 컴포넌트의 to props의 구조를 조금 바꿔야 한다.

📁 ./src/components/Navigation.js
```javascript
function Navigation() {
    return (
        <div className="nav">
           <Link to="/">Home</Link>
           <Link to={{ 
               pathname: './about', 
               state: { fromNavigation: true}
            }}>About</Link>
        </div>
    );
}
```

코드에서 보듯 to props에 객체를 전달했다

pathname은 URL을 의미하고, state는 우리가 route props로 보내줄 데이터를 의미한다

About 페이지 [Console] 탭에서 [location]을 펼치면 state 키에 우리가 보내준 데이터를 확인할 수 있다

to props를 통해 데이터를 보낼 수 있는 것을 확인했으니 Navigation 컴포넌트를 원래대로 돌려 놓는다

**③ Movie 컴포넌트에 Link 컴포넌트 추가하기**

Movie 컴포넌트를 누르면 영화 상세 정보 페이지로 이동해야 하므로 Movie 컴포넌트에 Link 컴포넌트를 추가한다

이때, Link 컴포넌트의 위치에 주의한다

📁 ./src/components/Movie.js
```javascript
// (생략..)
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: '/movie-detail',
          state: { year, title, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index)=> {
              return <li key={index} className="movie__genre">{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

// (생략...)
```

이제 영화 카드를 누르면 /movie-detail로 이동하게 된다

**④ Detail 컴포넌트 만들기**

Detail 컴포넌트를 routes 폴더에 추가한다. 그리고 Detail 컴포넌트에서 Movie 컴포넌트의 Link 컴포넌트가 보내준 영화 데이터를 확인해 볼 수 있도록 console.log()도 작성해준다

📁 ./src/routes/Detial.js
```javascript
import React from 'react';

function Detail(props) {
  console.log(props);
  return <span>Hello</span>;
}

export default Detail;
```

아직 Detail을 출력해주는 Route 컴포넌트를 추가하지 않았으므로 console.log(props)의 실행을 확인할 수 없다

**⑤ Route 컴포넌트 추가하기**

App.js에 Detail 컴포넌트를 import하고 Route 컴포넌트에서 Detail 컴포넌트를 그려주도록 코드를 작성한다

📁 ./src/App.js
```javascript
// (생략...)
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      // Detail 컴포넌트 추가
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  )
}
```

**⑥ 영화 데이터 확인하기**

영화 카드를 눌러 /movie-detail로 이동하면 Detail 컴포넌트가 출력하고 있는 Hello를 볼 수 있다.

그리고 [Console] 탭의 [location → state]에 Movie 컴포넌트에서 Link 컴포넌트를 통해 보내준 데이터를 확인할 수 있다.

그런데 만약 영화 카드를 눌러서 이동하지 않고 바로 /movie-detail로 이동하면 어떻게 될까?

Detail 컴포넌트의 Hello는 출력되지만 [Console] 탭의 [location → state]에 영화 데이터가 없다(undefined)

이런 경우 사용자를 강제로 Home으로 돌려보내야 한다. 이 기능을 리다이렉트라고 한다

#### 5. 리다이렉트 기능 만들기

리다이렉트 기능을 위해서는 route props의 history 키를 이용해야 한다.

history 키에는 push, go, goBack, goForward와 같은 키가 있고, 그 키에는 URL을 변경해주는 함수들이 들어있다.

**① history 키 살펴보기**

주소창에 localhost:3000을 입력해서 이동한 다음 아무 영화 카드를 눌러 이동한다. 그럼 다음 [Console] 탭에서 [history]에 출력되는 값을 펼쳐보자

push, go, goBack, goForward 키를 볼 수 있을 것이다.

이 중 지정한 URL로 보내주는 push() 함수를 사용할 것이다.

그 전에, Detail 컴포넌트를 클래스형 컴포넌트로 변경해야 한다. 그래야 componentDidMount() 함수를 사용해 Detial 컴포넌트가 마운트될 때 push() 함수를 실행할 수 있다.

**② Detail 컴포넌트 클래스형 컴포넌트로 변경하고 push() 함수 사용**

📁 ./src/routes/Detail.js
```javascript
import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
  // 구조 분해 할당으로 location, history를 얻는다
    const { location, history }= this.props;
    // location.state가 없는 경우
    if (location.state === undefined) {
      // Home으로 이동
      history.push('/');
    }
  }

  render() {
    return <span>Hello</span>
  }
}

export default Detail;
```

이제 /movie-detail로 직접 주소를 입력해서 이동하면 다시 Home으로 돌아오게 된다

**③ 영화 제목 출력하기**

영화 상세 정보 페이지 중에서 제목부터 출력해보자

📁 ./src/routes/Detail.js
```javascript
class Detail extends React.Component {
  //(생략..)

  render() {
    const { location } = this.props;
    return <span>{location.state.title}</span>
  }
}
```

이제 첫 화면에서 영화 카드를 누르면 영화 제목이 나타난다

그런데 /movie-detail로 바로 이동하거나 새로고침을 하면 `TypeError: Cannot read property 'title' of undefined` 오류가 발생한다

이 오류의 이유는 Detail 컴포넌트는 `render() → componentDidMount()`의 순서로 함수를 실행하는데, render() 함수 내에서 `location.state.title`을 사용하려 할 때 `location.state`가 undefined이기 때문이다

그러므로 render() 함수에도 componentDidMount() 함수에 작성한 리다이렉트 코드를 추가해줘야 한다

**④ render() 함수 수정**

📁 ./src/routes/Detail.js
```javascript
class Detail extends React.Component {
  // (생략...)

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>
    } else {
      return null
    }
  }
}
```

location.state가 없으면 render() 함수가 null을 반환하도록 만들어서 문제 없이 실행되도록 만든다

그러면 이어서 componentDidMount() 함수가 실행되면서 리다이렉트 기능이 동작하게 된다

### 깃허브에 배포하기

**① package.json 수정하기**

📁 ./package.json
```json
// (생략..)
// predeploy, deploy 추가
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
},
// hoempage 추가
"homepage": "https://[계정 이름].github.io/[저장소 이름]"
```

**② 최종 코드 깃허브에 업로드**

**③ gh-pages 설치**

명령 프롬프트 : `npm install gh-pages`

**④ 영화 앱 깃허브에 배포**

명령 프롬프트 : `npm run deploy`