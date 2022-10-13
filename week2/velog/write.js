const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const input = $('.tag__input');
const tag= $('.tag__item');
const tagAll= $$('.tag__item');
const tags = $('.tag__lists');

// 태그 추가
input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        if (input.value !== "") {
            // li 태그 생성
            const item = document.createElement('li'); 
            // 클래스 지정
            item.classList.add("tag__item");
            // 입력값 넣기
            item.innerHTML = `${input.value}`;
            // ul 자식 요소로 넣기
            tags.appendChild(item);
            // 삭제 클릭이벤트 부착
            item.addEventListener('click', deleteTag );
            // 인풋창 초기화
            input.value= "";
        }
    }
});

// 태그 삭제
function deleteTag(e) {
    tags.removeChild(e.target);
}
tagAll.forEach((item)=>{
    item.addEventListener('click', deleteTag);
});