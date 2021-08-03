/*
let과 const의 차이
let : 선언한 변수에 다른 값 재할당 가능
const : 재할당 불가. 변경 불가한 일종의 '상수'
*/

//ajax : 해커뉴스 데이터를 넣을 공간
//XMLHttpRequest : https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest
//XMLHttpRequest : 서버와의 상호작용을 도와주는 API. URL을 통해 데이터를 받아오게 한다.
const ajax=new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'

ajax.open('GET', NEWS_URL, false);
ajax.send();

//JSON -> 객체
const newsFeed = JSON.parse(ajax.response);

//document : HTML 조작하는 데 필요한 도구들을 제공하는 객체
const ul = document.createElement('ul'); // ul 태그 생성

for(let i=0; i<10; i++){
    const li = document.createElement('li'); // li 태그 생성

    li.innerHTML = newsFeed[i].title;

    ul.appendChild(li); // ul 태그의 chlid로 li태그를 추가해줌
}

//생성된 ul, li태그들을 넣어줌
document.getElementById('root').appendChild(ul);
