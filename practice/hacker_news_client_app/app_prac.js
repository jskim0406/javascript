/*
let과 const의 차이
let : 선언한 변수에 다른 값 재할당 가능
const : 재할당 불가. 변경 불가한 일종의 '상수'
*/

//ajax : 해커뉴스 데이터를 넣을 공간
//XMLHttpRequest : https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest
//XMLHttpRequest : 서버와의 상호작용을 도와주는 API. URL을 통해 데이터를 받아오게 한다.
const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
ajax.send(); // ajax.send : open으로 연 곳에서 데이터를 가져오기

// console.log(ajax.response);
const newsFeed = JSON.parse(ajax.response);

//console.log를 하지 않으면, 웹브라우저 콘솔 창에 뜨지 않는다. 당연히도.
console.log(newsFeed);
