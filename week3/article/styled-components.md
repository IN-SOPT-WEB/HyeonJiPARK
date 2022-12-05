# 🎀 styled-components

styled-components는 React 컴포넌트 안에 쉽게 css를 내장할 수 있도록 도와주는 CSS-in-JS 라이브러리입니다.

> \***\*CSS-in-JS\*\***
> CSS-in-JS는 스타일 정의를 css나 scss 파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법입니다. 대표적으로는 styled-components, emotion 등의 라이브러리가 있으며, 이것을 import하여 활용합니다.

현대의 웹은 ‘컴포넌트’ 단위로 제작이 되었지만 이전까지의 CSS는 컴포넌트 기반 방식으로 제작되어진 적이 한번도 없었습니다. 그러한 점을 해결해주는 CSS-in-JS 방식은 CSS도 컴포넌트처럼 생각하고 모듈화 할 수 있도록 하였기 때문에, CSS를 더욱 선언적이고 유지보수가 수월합니다. 또한 실제 CSS를 DOM에 생성하는 동작방식 덕분에 모든 CSS를 자유자재로 JS에서 사용할 수 있습니다.

-   **사용 방법**

```jsx
import styled from "styled-components";

const Button = styled.button`
    display: block;
    padding: 6px 10px;
    color: #fff;
    font-size: 18px;
    border-radius: 3px;
    background-color: crimson;
    border: 0;
`;

function App() {
    return (
        <div>
            <Button>나는 버튼!</Button>
        </div>
    );
}

export default App;
```

1. 컴포넌트 이름은 대문자로 시작합니다.

2. styled 뒤에 사용해야 할 HTML 태그명을 입력합니다.

3. 백틱(``)으로 감싸서 스타일시트를 작성합니다.

---

## 🎈 styled-components의 장/단점

### 👍🏻 장점

-   자유로운 CSS 커스텀 컴포넌트를 만들 수 있음
-   스타일링을 위한 코드 사용량이 줄어들음
-   CSS 문법에 친화적임
-   스타일에 대한 고유 클래스명을 생성함
    -   클래스명의 중복이나 오타로 인한 버그를 줄여줌
-   동적 스타일링을 편리하게 할 수 있음
    -   컴포넌트의 props를 참조할 수 있으며, props의 값에 따라 스타일을 다르게 코딩 할 수 있음

### 👎🏻 단점

-   러닝 커브
-   새로운 의존성 발생
-   별도의 라이브러리 설치에 따른 번들 크기 증대
-   CSS-in-CSS에 비해 느린 속도

---

## 🛍 대체할 수 있는 라이브러리가 있는가?

![css-in-js](https://user-images.githubusercontent.com/73213437/199598779-bd463256-c7c9-47f4-985f-1edc22269775.png)

CSS-in-JS 방식을 사용하는 라이브러리에는 styled-components 이외에 emotion, styled-jsx, JSS, stitches 등이 있습니다.

### 1. emotion

-   className이 자동으로 부여
-   props, 조건 등에 따라 스타일 지정 가능
-   styled component 사용방식과 css prop 기능을 지원하여 확장에 용이
-   styled component보다 파일 사이즈가 작고, SSR(서버 사이드 렌더링)시 서버 작업이 필요없음

-   **사용 방법**

    > 객체형 스타일

    ```jsx
    import { css } from "@emotion/react";

    function MyComponent() {
        return (
            <div
                css={css({
                    backgroundColor: "yellow",
                })}
            >
                노란색 영역
            </div>
        );
    }
    ```

    > 문자형 스타일

    ```jsx
    import { css } from "@emotion/react";

    function MyComponent() {
        return (
            <div
                css={css`
                    background-color: yellow;
                `}
            >
                노란색 영역
            </div>
        );
    }
    ```

### 2. JSS

-   컴포넌트의 상태를 기반으로 css를 동적으로 생성할 수 있음
-   프레임워크에 구애받지 않음
-   브라우저, 서버 또는 Node.js를 사용하여 빌드 시 컴파일할 수 있음

-   **사용 방법**

    ```jsx
    import React from "react";
    import injectSheet from "react-jss";

    const styles = {
        wrapper: {
            background: "black",
        },
        title: {
            color: "white",
        },
    };

    const App = ({ classes }) => (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Hello JSS-React!</h1>
        </div>
    );

    export default injectSheet(styles)(App);
    ```

### 3. stitches

-   SSR 환경에서도 잘 동작이 되도록 세팅되어 있음
-   runtime overhead와 zero-runtime의 제약을 해결하여 빠름
-   React 및 Vue, Svelte, Vanilla HTML에도 사용 가능
-   Variant, 테마, 스마트 토큰, 커스텀 CSS 속성 등 지원

-   **사용 방법**

```jsx
import { styled } from "@stitches/react";
// or

import { createStitches } from "@stitches/react";
export const { styled } = createStitches({
    media: {
        xs: "(min-width: 360px)",
        sm: "(min-width: 640px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
    },
});
```

---

## 🎁 난 어떤 스타일링 라이브러리가 가장 마음에 드는가?

컴포넌트 기반의 개발인 React를 공부하며, 해당 컴포넌트에서 바로 적용된 스타일을 확인할 수 있는 styled-component가 정말 편리하다고 생각했습니다.

CSS파일을 따로 만들어서 import해서 className을 선언하는 개발 방법에 비해 css-in-js 방식인 styled-component는 className을 고민할 필요도 없고, 커스터마이징 하기도 쉬웠습니다.

styled-component는 커뮤니티도 매우 커지고 있고, 컴포넌트 기반으로 개발하는 것과 가장 어울리는 방식이라고 생각합니다.

---

## 📝 참고 문서

[[ReactJS] 4. styled-components](https://nykim.work/107)
[웹 컴포넌트 스타일링 관리: CSS-in-JS vs CSS-in-CSS](https://s-core.co.kr/insight/view/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EA%B4%80%EB%A6%AC-css-in-js-vs-css-in-css/#:~:text=%EB%8B%A8%EC%A0%90%EC%9C%BC%EB%A1%9C%EB%8A%94%20%EB%9F%AC%EB%8B%9D%20%EC%BB%A4%EB%B8%8C,CSS%20%EB%AC%B8%EB%B2%95%EC%97%90%20%EC%B9%9C%ED%99%94%EC%A0%81%EC%9D%B4%EB%8B%A4).
