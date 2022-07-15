
let current = 0; //li 위치를 나타내는 변수
showSlides(); //기본 첫 번째 li를 보여줌

function showSlides(){
    let slides = document.querySelectorAll(".slideText > p");
    for (let i = 0; i < slides.length; i++){
        slides[i].style.opacity = "0"; //모든 li 감춤
    }
    current++; //다음 li로 이동
    if(current > slides.length) //마지막 li라면
        current = 1;//첫번째로 이동
        slides[current - 1].style.opacity = "1";//현재 위치 li표시
        setTimeout(showSlides, 1500) //0.8초마다 showSlides()함수를 반복 실행

}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onload = function(){
    const elm = document.querySelectorAll('section');
    //모든 section태그를 가져온다
    const elmCount = elm.length;
    //elmCount에 section태그 개수를 할당
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }