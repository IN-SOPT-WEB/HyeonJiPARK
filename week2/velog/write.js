const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const input = $('.tag__input');
const tag= $('.tag__item');
const tagAll= $$('.tag__item');
const tagList = $('.tag__lists');
const tags = []; // 태그를 저장할 배열

// 태그 추가
input.addEventListener("keydown", function (e) {
    if ( (e.keyCode == 13) && (input.value !== "") ) {
        // 중복 태그 검사
        if (tags.includes(input.value)) {
            alert("중복된 태그입니다.");
            input.value= "";
            return;
        }
        // li 태그 생성
        const item = document.createElement('li'); 
        // 클래스 지정
        item.classList.add("tag__item");
        // 입력값 넣기
        item.innerHTML = `${input.value}`;
        // ul 자식 요소로 넣기
        tagList.appendChild(item);
        // 삭제 클릭이벤트 부착
        item.addEventListener('click', deleteTag );
        // 배열에 넣기
        tags.push(input.value);
        // 인풋창 초기화
        input.value= "";
    }
});

// 태그 삭제
function deleteTag(e) {
    // 배열에서 해당 태그 제거
    const tagNum = tags.indexOf(e.target.innerHTML);
    tags.splice(tagNum, 1);

    // 해당 태그 요소 삭제
    tagList.removeChild(e.target);
}
tagAll.forEach((item)=>{
    item.addEventListener('click', deleteTag);
});