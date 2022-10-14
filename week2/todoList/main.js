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

// 투두리스트 삭제
function deleteToDo(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}
deleteBtn.forEach((item)=>{
    item.addEventListener('click', deleteToDo);
});


// 오늘 투두리스트 추가 (버튼 클릭)
todayAddBtn.addEventListener('click', function(e) {
    if(!todayInput.value) {
        alert('할일을 입력해 주세요!');    
    }
    else {
        const todo = document.createElement('li');
        todo.classList.add("todolist__item");
        todo.innerHTML = `${todayInput.value}`;

		const delBtn = document.createElement("button");
        delBtn.classList.add("todolist__delete-button");
		delBtn.innerHTML = `X`;
		delBtn.addEventListener("click", deleteToDo);

        todayLists.appendChild(todo);
        todo.appendChild(delBtn);
        
        todayInput.value= "";
    }
});
// 오늘 투두리스트 추가 (엔터)
todayInput.addEventListener('keydown', function(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        todayAddBtn.click();
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
        todo.innerHTML = `${tomorrowInput.value}`;

		const delBtn = document.createElement("button");
        delBtn.classList.add("todolist__delete-button");
		delBtn.innerHTML = `-`;
		delBtn.addEventListener("click", deleteToDo);

        tomorrowLists.appendChild(todo);
        todo.appendChild(delBtn);
        
        tomorrowInput.value= "";
    }
});
// 내일 투두리스트 추가 (엔터)
tomorrowInput.addEventListener('keydown', function(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        tomorrowAddBtn.click();
    }
});