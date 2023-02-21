# module.css, useState, useEffect 공부
Your app is ready to be deplo
Your app is ready to be deployed!

## module.css 
Button.module.css 와 App.module.css 파일을 만들어 js 에서 객체형태로 import 한다.
(import styles from "./App.module.css"

js 파일 안에서 tag 에 className={styles.클래스명} 으로 줄 수 있고, 고유한 className 이 생성되어 클래스명의 충돌 문제를 해결한다.
실제 Button.module.css 와 App.module.css 에는 동일하게 .Btn 이 있지만 다른 스타일을 적용할 수 있게 된다.

## useState
button 을 누를 때마다 counter 가 증가하도록 하도록,
input 에 값을 입력할 때마다 keyword 를 저장하도록 사용하였다.

## useEffect
처음 렌더링될 때 실행되도록 dependency 를 [] 로 주는 것과
counter button 이 눌릴 때 실행되도록 [counter],
input 태그에서 값이 수정될 때마다 keyword 변수에 저장하도록 하고, useEffect 를 통해 dependency 를 [keyword] 로 주어 입력값이 변할 때마다 실행되도록 하였다.

