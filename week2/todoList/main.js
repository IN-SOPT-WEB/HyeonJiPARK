const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const today = $('.today'); // 오늘만 보기 버튼
const tomorrow = $('.tomorrow'); // 내일만 보기 버튼
const all = $('.all'); // 함께 보기 버튼

const todayPlan = $('.todolist__today'); // 오늘 투두리스트창
const tomorrowPlan = $('.todolist__tomorrow'); // 내일 투두리스트창

//today
const todayLists = $('.todayLists'); // 투두리스트 목록
const todayInput = $('.todayInput');  // 투두리스트 임력
const todayAddBtn = $('.todayAddBtn'); // 추가 버튼

//tomorrow
const tomorrowLists = $('.tomorrowLists'); // 투두리스트 목록
const tomorrowInput = $('.tomorrowInput');  // 투두리스트 임력
const tomorrowAddBtn = $('.tomorrowAddBtn'); // 추가 버튼

const deleteBtn = $$('.todolist__delete-button'); // 삭제 버튼

// 오늘, 내일, 함께 보기
today.addEventListener('click', function(e) {
    tomorrowPlan.classList.add("hidden");
    todayPlan.classList.remove("hidden");
    today.classList.add("clicked");
    tomorrow.classList.remove("clicked");
    all.classList.remove("clicked");  
});
tomorrow.addEventListener('click', function(e) {
    todayPlan.classList.add("hidden");
    tomorrowPlan.classList.remove("hidden");
    tomorrow.classList.add("clicked");
    today.classList.remove("clicked");
    all.classList.remove("clicked");  
});
all.addEventListener('click', function(e) {
    todayPlan.classList.remove("hidden");
    tomorrowPlan.classList.remove("hidden");
    all.classList.add("clicked");
    today.classList.remove("clicked");
    tomorrow.classList.remove("clicked");  
});

// 투두리스트 삭제 함수
function deleteToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// 오늘 투두리스트 추가
todayAddBtn.addEventListener('click', function(e) {
    if(!todayInput.value) {
        alert('할일을 입력해 주세요!');    
    }
    else {
        const todo = document.createElement('li');
        todo.classList.add("todolist__item");
        todo.innerHTML = `${todayInput.value}<button class="todolist__delete-button" type="button">-</button>`;
        todayLists.appendChild(todo);
        todo.addEventListener('click',deleteToDo );
        todayInput.value= "";
    }
});

// 내일 투두리스트 추가
tomorrowAddBtn.addEventListener('click', function(e) {
    if(!tomorrowInput.value) {
        alert('할일을 입력해 주세요!');    
    }
    else {
        const todo = document.createElement('li');
        todo.classList.add("todolist__item");
        todo.innerHTML = `${tomorrowInput.value}<button class="todolist__delete-button" type="button">-</button>`;
        tomorrowLists.appendChild(todo);
        todo.addEventListener('click',deleteToDo );
        tomorrowInput.value= "";
    }
});


deleteBtn.forEach((item)=>{
    item.addEventListener('click', deleteToDo);
});


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

