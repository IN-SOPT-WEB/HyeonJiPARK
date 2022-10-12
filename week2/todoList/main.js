const $ = (selector) => document.querySelector(selector);

const today = $('.today'); // 오늘만 보기
const tomorrow = $('.tomorrow'); // 내일만 보기
const all = $('.all'); // 함께 보기


const toDoList = $('.box'); // 투두리스트창
const lists = $('.todolist__lists'); // 투두리스트 목록
const input = $('.todolist__input');  // 투두리스트 임력
const addBtn = $('.todolist__add-button'); // 추가 버튼
const deleteBtn = $('.todolist__delete-button'); // 삭제 버튼
const check = $('.todolist__ckeck'); // 투두리스트 체크


    
addBtn.addEventListener('click', function(e) {
    if(!input.value) {
        alert('할일을 입력해 주세요!');    
    }
    else {
        // list를 출력할 <div> 요소생성
        const todo = document.createElement('li');
        todo.classList.add("todolist__item");
        todo.innerHTML = `${input.value}<button class="todolist__delete-button" type="button">-</button>`;
        lists.appendChild(todo);
        input.value= ""
    }
})


deleteBtn.addEventListener('click', function(e) {
    // if (e.target.classList.contains('todolist__delete-button')) {
    //     const removeLi = e.target.parentNode;
    //     removeLi.remove();
    // }

    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
})


    // deleteBtn.addEventListener('click', function(e) {
        
    // })


// addToDo.addEventListener('click', () => {    // 버튼에 클릭 이벤트가 발생하면
//     const todo = document.createElement('li');     // html 'li' 태그 만들기
//     if (!inputToDo.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
//         alert('할일을 입력해 주세요!');
//     else
//     {
//         todo.innerText = inputToDo.value;  // <li>입력된 할 일</li>
//         todo.classList.add("todo");       // 할 일 리스트창에 자식으로 붙이기
//         inputToDo.value= "";               // 할 일 입력창 초기화
//     }

//     check.addEventListener('click', function(){      // 만들어진 todo에 클릭 이벤트가 발생하면 줄 긋기
//         todo.style.textDecoration = "line-through";
//     })
// });


// deleteToDo.addEventListener('click', function(){   // todo에 클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
//     toDoList.removeChild(todo);
// })


// 인풋에 엔터 or 버튼을 눌렀을 때
// >> 이벤트 핸들러
// 리스트를 추가한다
// li 태그를 만들어 그 안에 삭제 버튼을 넣기
// li 태그를 ul 태그에 넣기

