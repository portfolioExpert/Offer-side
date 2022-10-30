# React Study \#3



## 1. 지난 스터디 피드백

#### babel과 ts-loader에 대해 알아보기

참고: https://velog.io/@ginameee/typescript-%EB%B2%88%EB%93%A4%EB%A7%81

- 둘 다 WebPack을 통해 번들링 하기 위한 로더로 trade-off 관계가 있다.



###### Babel loader

- 장점: 빌드시간이 짧다, babel의 다양한 플러그인을 사용할 수 있다.
- 단점: 약한 타입체크로 타입스크립트의 장점을 살리지 못한다.



###### ts-loader

- 장점: 강력한 타입체크
- 단점: 빌드시간이 길다. 타입에러가 있을 시 빌드가 불가하다.



## 2. 레이아웃 잡기

참고: https://team.daangn.com/jobs/

- Header, Footer 고정으로 두고 View 컴포넌트를 바꿔끼는 방식



## 3. 라우터 구현

###### 참고

- https://velog.io/@soryeongk/ReactRouterDomV6
-  https://mingmeng030.tistory.com/m/226

- react-router-dom의 버전 변화로 참고



#### 구현 방식

1. 각 페이지 별로 Router를 해놓은 router.tsx를 만들었다.

~~~react
//router.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../View/MainPage';
import ApplyPage from "../View/ApplyPage";
import AnnouncePage from "../View/MainPage";
import CompletePage from "../View/CompletePage";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/apply" element={<ApplyPage />} />
                <Route path="/announcement" element={<AnnouncePage />} />
                <Route path="/complete" element={<CompletePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
~~~

2. App.tsx에서 Router 컴포넌트를 불러오도록 하였다.

~~~react
//App.tsx
import React from 'react';
import Router from './router/router';
function App() {
    return (
        <div className="App">
            <Router />
        </div>
    );
}

export default App;
~~~



## 4. 궁금한 것

- babel loader와 ts loader의 혼용은 따로 없는지?

답변: TS 사용시 babel loader의 역할을 사용할 수 없으므로 JS가 있을 때 사용. 

- 레이아웃을 짤 때 html, css틀을 먼저 잡고 짜는 건지?

답변: 마크업 디자이너(실제 React 개발코드로 된) - front 개발자 구조로 가지만 개발자가 마크업을 먼저 한 뒤 







## 5. 다음에 할 것

- next.js 실습 해보고 프로젝트에 적용시키기