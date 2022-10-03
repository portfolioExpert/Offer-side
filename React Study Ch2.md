# React Study \#2



## 1. 지난 스터디 피드백

#### BackEnd 환경

- 서버: Spring boot
- 동작방식: gradle, JPA
- DB: Maria or mysql

>환경 구축이 어려울 경우
>
>webpack Mock 사용

#### FrontEnd 환경

- TypeScript
- Yarn
- Redux or Recoil 둘 중 현업에서 선호하는 라이브러리

Redux -> Recoil(간단하다, 단점은 react 16.8 버전 이상부터 사용 가능하며 함수형 컴포넌트(tsx)에서 사용가능)

Web flux 패턴 라이브러리 -> redux는 JS 라이브러리라 바닐라 JS에서도 되다.

보일러 플레이트란: 기본틀이 되는 코드



## 2. CRA 없이 React 환경 구축

참고: https://blog.joyfui.com/1243

 https://velog.io/@kmlee95/CRA%EC%97%86%EC%9D%B4-React%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

https://github.com/facebook/create-react-app



#### 필요한 것

- package.json: dependencies 관리, 패키지 관리
- React DOM환경
- Babel: 사용하는 웹 브라우저에서 TSX나 JSX, ES6환경을 지원하지 않을 경우 버전을 낮추거나 JSX를 자바스크립트 문법으로 변환시켜 동작시켜준다.
- webpack: 자바스크립트 번들러로 여러개의 자바스크립트를 entry와 output을 설정하여 하나로 묶어주는 역할을 한다.
- Ts 환경

>추가하면 좋을 것들
>
>코드 컨벤션 환경
>
>ESLint:  자바스크립트 코드에서 발견되는 문제시되는 패턴들을 식별하기 위한 정적 코드 분석 도구이다.
>
>Prettier: 코드 포멧터로 정해진 코딩스타일을 따르도록 만들어주는 도구



## 3. Directory 설계

- assets: 이미지 파일을 저장하는 곳
- common: API를 처리할 util
- components: 공통으로 사용할 컴포넌트
- layouts: 반응형을 고려하여 작성
- View: 화면을 담당하는 컴포넌트
- styles: styled Components를 사용한 CSS 전용 디렉토리

-> 나머지 구성은 화면설계하면서 따로 구성



## 4. 화면 설계

- 공고를 확인할 수 있는 메인화면
- 공고 정보 화면
- 지원하기 화면
- 지원완료 화면

![스크린샷 2022-10-02 오후 5.12.53](/Users/mac/Desktop/스크린샷 2022-10-02 오후 5.12.53.png)



## 5. 궁금한 것

- front 개발자가 실무에서 프로젝트 개발할 때 가져가는 flow가 어떻게 되는지?
  - 기획 -> 디자이너(피그마, 재플린)의 디자인 설계 -> markup으로 뽑기(하나하나 디자인을 맞춰가는게 쉽지않다) -> 코드를 입히거나 기능없는 UI로 제작(기능을 미리 개발하는 리소스를 줄이기 위해) -> 개발


- CRA없이 환경을 직접 구축하면서 얻는 이점은 무엇인지?
  - 유지보수가 99% CRA는 수정하기 까다롭다.
- 바닐라JS를 현업에서 어느정도 알고 있어야 하는지?
  - 기초적인 문법과 아는게 많을 수록 좋다.



TS쓸 때는 babel를 쓸필요가 없는게 ts-loader가 해주는 역할이 ts를 js로 tsx를 jsx로

babel과 TS를 같이쓰면 변환과정이 2번 일어나서 번들링 작업이 더 느리다.

-> babel을 빼는 작업을 추후 작업으로



## 6. 다음에 할 것

- 레이아웃 잡기
- 라우터 구현
- babel과 ts-loader에 대해서 알아보기