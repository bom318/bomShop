'use strict'

const numDown = document.querySelector('.num-down');
const numUp = document.querySelector('.num-up');
const quantity = document.querySelector('.item_quantity');
const allChk = document.querySelector('.allChk');

//어디에 저장할지 결정해야해 비회원->메모리 / 회원->디비

//수량 변경
numDown.addEventListener('click', () => {
    if(quantity.value > 1) {
        quantity.value--;
    }
})
numUp.addEventListener('click', () => {
    quantity.value++;
})
//변경 버튼 눌렀을 때 상품구매금액/총상품금액/결제예정금액 변경, 저장
//옵션변경 모달
//삭제(총상품금액/결제예정금액 같이 변경)
//체크박스 전체선택
allChk.addEventListener('click', () => {
    let chks = document.querySelectorAll('.chk');
    if(allChk.checked) {
        chks.forEach((chk) => {
            chk.checked = true;
        })
    } else {
        chks.forEach((chk) => {
            chk.checked = false;
        })
    }
    
})
//체크박스 선택 삭제(총상품금액/결제예정금액 같이 변경)
//전체삭제(총상품금액/결제예정금액 같이 변경)