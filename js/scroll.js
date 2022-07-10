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