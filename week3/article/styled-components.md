# ๐ย styled-components

styled-components๋ React ์ปดํฌ๋ํธ ์์ ์ฝ๊ฒ css๋ฅผ ๋ด์ฅํ  ์ ์๋๋ก ๋์์ฃผ๋ CSS-in-JS ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.

> \***\*CSS-in-JS\*\***
> CSS-in-JS๋ ์คํ์ผ ์ ์๋ฅผ css๋ scss ํ์ผ์ด ์๋ JavaScript๋ก ์์ฑ๋ ์ปดํฌ๋ํธ์ ๋ฐ๋ก ์ฝ์ํ๋ ์คํ์ผ ๊ธฐ๋ฒ์๋๋ค. ๋ํ์ ์ผ๋ก๋ styled-components, emotion ๋ฑ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ์์ผ๋ฉฐ, ์ด๊ฒ์ importํ์ฌ ํ์ฉํฉ๋๋ค.

ํ๋์ ์น์ โ์ปดํฌ๋ํธโ ๋จ์๋ก ์ ์์ด ๋์์ง๋ง ์ด์ ๊น์ง์ CSS๋ ์ปดํฌ๋ํธ ๊ธฐ๋ฐ ๋ฐฉ์์ผ๋ก ์ ์๋์ด์ง ์ ์ด ํ๋ฒ๋ ์์์ต๋๋ค. ๊ทธ๋ฌํ ์ ์ ํด๊ฒฐํด์ฃผ๋ CSS-in-JS ๋ฐฉ์์ CSS๋ ์ปดํฌ๋ํธ์ฒ๋ผ ์๊ฐํ๊ณ  ๋ชจ๋ํ ํ  ์ ์๋๋ก ํ์๊ธฐ ๋๋ฌธ์, CSS๋ฅผ ๋์ฑ ์ ์ธ์ ์ด๊ณ  ์ ์ง๋ณด์๊ฐ ์์ํฉ๋๋ค. ๋ํ ์ค์  CSS๋ฅผ DOM์ ์์ฑํ๋ ๋์๋ฐฉ์ ๋๋ถ์ ๋ชจ๋  CSS๋ฅผ ์์ ์์ฌ๋ก JS์์ ์ฌ์ฉํ  ์ ์์ต๋๋ค.

-   **์ฌ์ฉ ๋ฐฉ๋ฒ**

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
            <Button>๋๋ ๋ฒํผ!</Button>
        </div>
    );
}

export default App;
```

1. ์ปดํฌ๋ํธ ์ด๋ฆ์ ๋๋ฌธ์๋ก ์์ํฉ๋๋ค.

2. styled ๋ค์ ์ฌ์ฉํด์ผ ํ  HTML ํ๊ทธ๋ช์ ์๋ ฅํฉ๋๋ค.

3. ๋ฐฑํฑ(``)์ผ๋ก ๊ฐ์ธ์ ์คํ์ผ์ํธ๋ฅผ ์์ฑํฉ๋๋ค.

---

## ๐ย styled-components์ ์ฅ/๋จ์ 

### ๐๐ปย ์ฅ์ 

-   ์์ ๋ก์ด CSS ์ปค์คํ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค ์ ์์
-   ์คํ์ผ๋ง์ ์ํ ์ฝ๋ ์ฌ์ฉ๋์ด ์ค์ด๋ค์
-   CSS ๋ฌธ๋ฒ์ ์นํ์ ์
-   ์คํ์ผ์ ๋ํ ๊ณ ์  ํด๋์ค๋ช์ ์์ฑํจ
    -   ํด๋์ค๋ช์ ์ค๋ณต์ด๋ ์คํ๋ก ์ธํ ๋ฒ๊ทธ๋ฅผ ์ค์ฌ์ค
-   ๋์  ์คํ์ผ๋ง์ ํธ๋ฆฌํ๊ฒ ํ  ์ ์์
    -   ์ปดํฌ๋ํธ์ props๋ฅผ ์ฐธ์กฐํ  ์ ์์ผ๋ฉฐ, props์ ๊ฐ์ ๋ฐ๋ผ ์คํ์ผ์ ๋ค๋ฅด๊ฒ ์ฝ๋ฉ ํ  ์ ์์

### ๐๐ปย ๋จ์ 

-   ๋ฌ๋ ์ปค๋ธ
-   ์๋ก์ด ์์กด์ฑ ๋ฐ์
-   ๋ณ๋์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น์ ๋ฐ๋ฅธ ๋ฒ๋ค ํฌ๊ธฐ ์ฆ๋
-   CSS-in-CSS์ ๋นํด ๋๋ฆฐ ์๋

---

## ๐ย ๋์ฒดํ  ์ ์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ์๋๊ฐ?

![css-in-js](https://user-images.githubusercontent.com/73213437/199598779-bd463256-c7c9-47f4-985f-1edc22269775.png)

CSS-in-JS ๋ฐฉ์์ ์ฌ์ฉํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋ย styled-components ์ด์ธ์ emotion, styled-jsx, JSS, stitchesย ๋ฑ์ด ์์ต๋๋ค.

### 1. emotion

-   className์ด ์๋์ผ๋ก ๋ถ์ฌ
-   props, ์กฐ๊ฑด ๋ฑ์ ๋ฐ๋ผ ์คํ์ผ ์ง์  ๊ฐ๋ฅ
-   styled component ์ฌ์ฉ๋ฐฉ์๊ณผ css prop ๊ธฐ๋ฅ์ ์ง์ํ์ฌ ํ์ฅ์ ์ฉ์ด
-   styled component๋ณด๋ค ํ์ผ ์ฌ์ด์ฆ๊ฐ ์๊ณ , SSR(์๋ฒ ์ฌ์ด๋ ๋ ๋๋ง)์ ์๋ฒ ์์์ด ํ์์์

-   **์ฌ์ฉ ๋ฐฉ๋ฒ**

    > ๊ฐ์ฒดํ ์คํ์ผ

    ```jsx
    import { css } from "@emotion/react";

    function MyComponent() {
        return (
            <div
                css={css({
                    backgroundColor: "yellow",
                })}
            >
                ๋ธ๋์ ์์ญ
            </div>
        );
    }
    ```

    > ๋ฌธ์ํ ์คํ์ผ

    ```jsx
    import { css } from "@emotion/react";

    function MyComponent() {
        return (
            <div
                css={css`
                    background-color: yellow;
                `}
            >
                ๋ธ๋์ ์์ญ
            </div>
        );
    }
    ```

### 2. JSS

-   ์ปดํฌ๋ํธ์ ์ํ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก css๋ฅผ ๋์ ์ผ๋ก ์์ฑํ  ์ ์์
-   ํ๋ ์์ํฌ์ ๊ตฌ์ ๋ฐ์ง ์์
-   ๋ธ๋ผ์ฐ์ , ์๋ฒ ๋๋ Node.js๋ฅผ ์ฌ์ฉํ์ฌ ๋น๋ ์ ์ปดํ์ผํ  ์ ์์

-   **์ฌ์ฉ ๋ฐฉ๋ฒ**

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

-   SSR ํ๊ฒฝ์์๋ ์ ๋์์ด ๋๋๋ก ์ธํ๋์ด ์์
-   runtime overhead์ zero-runtime์ ์ ์ฝ์ ํด๊ฒฐํ์ฌ ๋น ๋ฆ
-   React ๋ฐ Vue, Svelte, Vanilla HTML์๋ ์ฌ์ฉ ๊ฐ๋ฅ
-   Variant, ํ๋ง, ์ค๋งํธ ํ ํฐ, ์ปค์คํ CSS ์์ฑ ๋ฑ ์ง์

-   **์ฌ์ฉ ๋ฐฉ๋ฒ**

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

## ๐ย ๋ ์ด๋ค ์คํ์ผ๋ง ๋ผ์ด๋ธ๋ฌ๋ฆฌ๊ฐ ๊ฐ์ฅ ๋ง์์ ๋๋๊ฐ?

์ปดํฌ๋ํธ ๊ธฐ๋ฐ์ ๊ฐ๋ฐ์ธ React๋ฅผ ๊ณต๋ถํ๋ฉฐ, ํด๋น ์ปดํฌ๋ํธ์์ ๋ฐ๋ก ์ ์ฉ๋ ์คํ์ผ์ ํ์ธํ  ์ ์๋ styled-component๊ฐ ์ ๋ง ํธ๋ฆฌํ๋ค๊ณ  ์๊ฐํ์ต๋๋ค.

CSSํ์ผ์ ๋ฐ๋ก ๋ง๋ค์ด์ importํด์ className์ ์ ์ธํ๋ ๊ฐ๋ฐ ๋ฐฉ๋ฒ์ ๋นํด css-in-js ๋ฐฉ์์ธ styled-component๋ className์ ๊ณ ๋ฏผํ  ํ์๋ ์๊ณ , ์ปค์คํฐ๋ง์ด์ง ํ๊ธฐ๋ ์ฌ์ ์ต๋๋ค.

styled-component๋ ์ปค๋ฎค๋ํฐ๋ ๋งค์ฐ ์ปค์ง๊ณ  ์๊ณ , ์ปดํฌ๋ํธ ๊ธฐ๋ฐ์ผ๋ก ๊ฐ๋ฐํ๋ ๊ฒ๊ณผ ๊ฐ์ฅ ์ด์ธ๋ฆฌ๋ ๋ฐฉ์์ด๋ผ๊ณ  ์๊ฐํฉ๋๋ค.

---

## ๐ย ์ฐธ๊ณ  ๋ฌธ์

[[ReactJS] 4. styled-components](https://nykim.work/107)
[์น ์ปดํฌ๋ํธ ์คํ์ผ๋ง ๊ด๋ฆฌ: CSS-in-JS vs CSS-in-CSS](https://s-core.co.kr/insight/view/%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EA%B4%80%EB%A6%AC-css-in-js-vs-css-in-css/#:~:text=%EB%8B%A8%EC%A0%90%EC%9C%BC%EB%A1%9C%EB%8A%94%20%EB%9F%AC%EB%8B%9D%20%EC%BB%A4%EB%B8%8C,CSS%20%EB%AC%B8%EB%B2%95%EC%97%90%20%EC%B9%9C%ED%99%94%EC%A0%81%EC%9D%B4%EB%8B%A4).
