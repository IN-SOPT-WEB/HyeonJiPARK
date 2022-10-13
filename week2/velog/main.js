const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const dropdown = $(".nav__dropdown");
const toggle = $('.dropdown__toggle');
const options = $$(".dropdown__option");
const menu = $('.dropdown__content');

// 드롭다운 열기
dropdown.addEventListener('click', function() {
    menu.classList.toggle('show');
});

// 다른 곳을 클릭했을 때 드롭다운 닫힘
dropdown.addEventListener('blur', function() {
    menu.classList.remove('show');
});

// 드롭다운 옵션 선택
options.forEach(function(option) {
    option.addEventListener('click', function(e) {
        // 다른 옵션의 seledted 제거
        options.forEach(function(option) {
            option.classList.remove('selected');
        })
        // 드롭다운 라벨에 표시
        const dropdownLabel = e.currentTarget.textContent;
        toggle.textContent = dropdownLabel;
        toggle.classList.add('selected');

        // 드롭다운 목록에 표시
        const dropdownSelected = e.currentTarget;
        dropdownSelected.classList.add('selected');
    })
}) 