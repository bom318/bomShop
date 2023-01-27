'use strict'

// color 선택시 갯수와 가격 표시
const color = document.querySelector('#color');
const priceDiv = document.querySelector('.price-color');
const infoTitle = document.querySelector('.info_title');
const itemPrice = document.querySelector('.itemPrice');


color.addEventListener('change', () => {
    if(color.value !== '*' && color.value !== '**') {
        // html 그리기
        const choice = document.createElement('div');
        choice.classList.add('choice');
        priceDiv.appendChild(choice);
        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        choice.appendChild(itemName);
        const choiceName = document.createElement('span');
        choiceName.classList.add('choice_name');
        choiceName.innerText = infoTitle.innerText;
        itemName.appendChild(choiceName)
        const choiceColor = document.createElement('span');
        choiceColor.classList.add('choice_color');
        choiceColor.innerText = `- ${color.value}`;
        itemName.appendChild(choiceColor);
        const choiceRight = document.createElement('div');
        choiceRight.classList.add('choice_right');
        choice.appendChild(choiceRight);
        const choiceCnt = document.createElement('div');
        choiceCnt.classList.add('choice_cnt');
        choiceRight.appendChild(choiceCnt);
        const numDown = document.createElement('button');
        numDown.classList.add('num-down');
        numDown.innerText = '-';
        numDown.setAttribute('onclick', 'decrease()');
        choiceCnt.appendChild(numDown);
        const input = document.createElement('input');
        input.classList.add('quantity');
        input.type = 'text';
        input.value = '1';
        choiceCnt.appendChild(input);
        const numUp = document.createElement('button');
        numUp.classList.add('num-up');
        numUp.innerText = '+';
        numUp.setAttribute('onclick', 'increase()');
        choiceCnt.appendChild(numUp);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'x';
        choiceCnt.appendChild(deleteBtn);
        const choicePrice = document.createElement('div');
        choicePrice.classList.add('choice_price');
        choiceRight.appendChild(choicePrice);
        const span = document.createElement('span');
        span.innerText = itemPrice.innerText + ' won';
        choicePrice.appendChild(span);
    }
})

// 상품 수량 변경
function decrease() {
    const quantity = document.querySelector('.quantity');
    if(quantity.value > 1) {
        quantity.value--;
    }

}
function increase() {
    const quantity = document.querySelector('.quantity');
    quantity.value++;
}

// 선택상품 여러개일때 각자 수량 조절되도록
// 선택상품 삭제
// 수량input 숫자만 가능하도록
// total 가격 바꾸기
// detail menu 클릭시 해당 위치로 이동
// review 댓글 클릭시 내용 보이기
// q&a 제목 클릭시 내용 보이기


