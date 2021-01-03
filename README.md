# vanilla-calendar

![vanillacalendar1](https://user-images.githubusercontent.com/67991851/103455330-75cb6e00-4d2f-11eb-9137-c247224f5fe8.PNG)

> vanilla-calendar는 순수 Javascript DOM API 와 Typescript 를 사용해서 만든 달력입니다.
> <br/>
>
> ### 주요 특성
>
> - 해당 월 표시 & 오늘 날짜 표시
> - 버튼을 통한 월 조작 및 오늘 날짜 바로가기
> - css flex를 통한 반응형 설계
>   <br/>

# 실시간 예제

> [실시간 예제 보기](https://stackblitz.com/edit/vanillacalendar?file=index.js)

<br/>

# 설치 방법

#### 웹팩 또는 이외의 모듈 번들러와 사용시

npm 을 통한 패키지를 제공합니다.

```console
$ npm install vanilla-calendar
```

<br/>

```javascript
import VanillaCalendar from 'vanilla-calendar';
import 'vanilla-calendar/dist/vanilla-calendar.min.css';

const root = document.getElementById('root');
const calendar = new VanillaCalendar(root);
```
