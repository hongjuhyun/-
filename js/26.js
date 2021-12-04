const boxEls = document.querySelectorAll('.box');

boxEls.forEach(function (boxEl, index){
    boxEl.classList.add(`order-${index + 1}`); //백틱
    console.log(index, boxEl);
});