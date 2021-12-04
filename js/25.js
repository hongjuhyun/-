// HTML 요소(Element) 1개의 검색/찾기
const boxEl = document.querySelector('.box');
console.log(boxEl);


boxEl.addEventListener('click', function(){
    console.log('Click~!!');
    boxEl.classList.add('active'); 
    //여기까지 입력하고 콘솔창 확인

    //box를 클릭해서 active추가된지 확인하기
    console.log(boxEl.classList.contains('active'));
    //콘솔창에서 active가 포함되어 있는지 체크하여 true반환

    boxEl.classList.remove('active');
    
    console.log(
        boxEl.classList.contains('active');
    );
    //콘솔창에서 active가 포함되어 있는지 체크하여 false반환    
});