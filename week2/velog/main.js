const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ------------------- 드롭다운 -----------------------
const dropdown = $('.nav__dropdown');
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

// ------------------- 모달 -----------------------
const cardSection = $('.section-card');
const cards = $$('.card');
const card = $('.card')

// 모달창 생성
function openModal(item) {
    // 모달창 배경 생성
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add('modal__wrapper');
    cardSection.appendChild(modalWrapper);
    
    // 모달 내용 생성
    const newModal = item.cloneNode(true);
    newModal.classList.add('modal');
    modalWrapper.appendChild(newModal);

    // 삭제 버튼 생성
    const closeBtn = document.createElement("button");
    closeBtn.classList.add('modal__delete-button');
    closeBtn.innerHTML = `X`;
    closeBtn.addEventListener("click", closeModal);
    modalWrapper.appendChild(closeBtn);
}
cards.forEach((item)=>{
    item.addEventListener('click', () => {
        openModal(item)
    });
});

// 모달창 삭제
function closeModal(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// ------------------- 슬라이더 -----------------------

const prevBtn = document.querySelector(".slider__prev-button");
const nextBtn = document.querySelector(".slider__next-button");

const sliderSection = $('.section-silder');
const sliderCard = $('.card-wrapper');
const sliderCards = $$('.sliderCard');

const maxSlide = sliderCards.length;
let currSlide = 0;

// 슬라이드 전체 크기(width 구하기)
let slideWidth = sliderSection.offsetWidth;

// 다음 슬라이드로 넘기기
nextBtn.addEventListener("click", () => {
    currSlide += 1;
    if (currSlide < maxSlide-1) {
        const offset = slideWidth * (currSlide-1);
        sliderCards.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
    }
    console.log(currSlide);
});

// 이전 슬라이드로 넘기기
prevBtn.addEventListener("click", () => {
    currSlide -= 1;
    if (currSlide > 0) {
        const offset = slideWidth * (currSlide-1);
        sliderCards.forEach((i) => {
            sliderCard.style.transform = `translateX(${-offset}px)`;
        });
    }
    console.log(currSlide);
});