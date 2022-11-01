const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ------------------- 드롭다운 -----------------------
const body = $(".body");
const dropdown = $('.nav__dropdown');
const toggle = $('.dropdown__toggle');
const options = $$(".dropdown__option");
const menu = $('.dropdown__content');

// 드롭다운 열기
dropdown.addEventListener('click', function() {
    menu.classList.toggle('show');
});

// 다른 곳을 클릭했을 때 드롭다운 닫힘
body.addEventListener('click', function(e) {
    if(e.target.parentNode != e.currentTarget.querySelector(".nav__dropdown")){
        menu.classList.remove('show');
    }
});

// 드롭다운 옵션 선택
options.forEach(function(option) {
    option.addEventListener('click', function(e) {
        // 다른 옵션의 seledted 제거
        options.forEach(function(option) {
            option.classList.remove('selected');
        })
        // 드롭다운 라벨에 표시
        toggle.textContent = e.currentTarget.textContent;
        toggle.classList.add('selected');

        // 드롭다운 목록에 표시
        e.currentTarget.classList.add('selected');
    })
})

// ------------------- 모달 -----------------------
const cardSection = $('.body');
const cards = $$('.card');
const card = $('.card')

// 모달창 생성
function openModal(item) {
    // 모달창 배경 생성
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add('modal__wrapper');
    cardSection.style.overflow = "hidden";
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

// 다른 곳을 클릭했을 때 모달창 닫힘
body.addEventListener('click', function(e) {
    if(e.target == e.currentTarget.querySelector(".modal__wrapper")){
        body.removeChild(e.target);
        cardSection.style.overflow = "unset";
    }
});

// 모달창 삭제
function closeModal(e) {
    body.removeChild(e.target.parentNode);
    cardSection.style.overflow = "unset";
}

// ------------------- 슬라이더 -----------------------
const sliderSection = $('.section-silder');
const sliderCard = sliderSection.querySelector('.card-wrapper');
const sliderCards = sliderSection.querySelectorAll('.card');

const prevBtn = $(".slider__prev-button");
const nextBtn = $(".slider__next-button");

const maxSlide = sliderCards.length;
let slideWidth = sliderCards[0].clientWidth;
let currentSlide = 1;

// 다음 슬라이드로 넘기기
nextBtn.addEventListener("click", () => {
    if (currentSlide >= maxSlide - 2) return;
    currentSlide++;
    sliderCard.style.transform = `translateX(${-slideWidth*(currentSlide-1)-30*(currentSlide-1)}px)`;
});

// 이전 슬라이드로 넘기기
prevBtn.addEventListener("click", () => {
    if (currentSlide <= 1) return;
    currentSlide--;
    sliderCard.style.transform = `translateX(${-slideWidth*(currentSlide-1)-30*(currentSlide-1)}px)`;
});