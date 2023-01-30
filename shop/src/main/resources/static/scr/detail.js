'use strict'

// color 선택시 갯수와 가격 표시
const color = document.querySelector('#color');
const priceDiv = document.querySelector('.price-color');
const infoTitle = document.querySelector('.info_title');
let itemPrice = document.querySelector('.itemPrice').innerText;
let totalPrice = parseInt(document.querySelector('.total_price').innerText);
// let total = parseInt(document.querySelector('.total_price').innerText);


color.addEventListener('change', () => {
    if (color.value !== '*' && color.value !== '**') {
        if (document.querySelector(`.choice_${color.value}`) !== null) {
            alert('아래 리스트에서 이미 선택된 옵션을 삭제 후 다시 선택해 주세요.');
        } else {
            // html 그리기
            const choice = document.createElement('div');
            choice.classList.add(`choice_${color.value}`);
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
            numDown.setAttribute('onclick', `decrease('${color.value}')`);
            choiceCnt.appendChild(numDown);
            const input = document.createElement('input');
            input.classList.add(`${color.value}_quantity`);
            input.type = 'text';
            input.value = '1';
            input.setAttribute('oninput', `this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');`)
            choiceCnt.appendChild(input);
            const numUp = document.createElement('button');
            numUp.classList.add('num-up');
            numUp.innerText = '+';
            numUp.setAttribute('onclick', `increase('${color.value}')`);
            choiceCnt.appendChild(numUp);
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.innerText = 'x';
            deleteBtn.setAttribute('onclick', `deleteOption('${color.value}')`);
            choiceCnt.appendChild(deleteBtn);
            const choicePrice = document.createElement('div');
            choicePrice.classList.add(`choice_price_${color.value}`);
            choicePrice.classList.add('choice_price');
            choiceRight.appendChild(choicePrice);
            const span = document.createElement('span');
            span.innerText = itemPrice + ' won';
            choicePrice.appendChild(span);
            //total 가격 바꾸기
            changeTotal();
        }

    }
})

// 상품 수량 변경
function decrease(color) {
    const quantity = document.querySelector(`.${color}_quantity`);
    if (quantity.value > 1) {
        quantity.value--;
        //choice 가격 바꾸기
        let price = parseInt(document.querySelector(`.choice_price_${color}`).innerText.replace(",", ""));
        price -= parseInt(itemPrice.replace(",", ""));
        let choicePrice = document.querySelector(`.choice_price_${color}`);
        choicePrice.innerText = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' won';
        //total 가격 바꾸기
        changeTotal();
    }

}
function increase(color) {
    const quantity = document.querySelector(`.${color}_quantity`);
    quantity.value++;
    //choice 가격 바꾸기
    let price = parseInt(document.querySelector(`.choice_price_${color}`).innerText.replace(",", ""));
    price += parseInt(itemPrice.replace(",", ""));
    let choicePrice = document.querySelector(`.choice_price_${color}`);
    choicePrice.innerText = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' won';
    //total 가격 바꾸기
    changeTotal();
}

// 선택상품 삭제
function deleteOption(color) {
    document.querySelector(`.choice_${color}`).remove();
    //total 가격 바꾸기
    changeTotal();
}
//total 값 변경
function changeTotal() {
    let priceArr = document.querySelectorAll('.choice_price');
    let total = 0;
    if (priceArr.length == 0) {
        document.querySelector('.total_price').innerText = 0;
    }
    for (let i = 0; i < priceArr.length; i++) {

        total += parseInt(priceArr[i].innerText.replace(",", ""));
        document.querySelector('.total_price').innerText = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}


// detail menu 클릭시 해당 위치로 이동
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
};
const detail = document.querySelectorAll('.menu_detail');
const review = document.querySelectorAll('.menu_review');
const qna = document.querySelectorAll('.menu_qna');

detail.forEach(e => {
    e.addEventListener('click', () => {
        scrollIntoView('.prd-detail');
    })
})
review.forEach(e => {
    e.addEventListener('click', () => {
        scrollIntoView('.prd_review');
    })
})
qna.forEach(e => {
    e.addEventListener('click', () => {
        scrollIntoView('.prd_question');
    })
})

// review 댓글 클릭시 내용 보이기
const showRe = document.querySelector('.show_re');
const down = document.querySelector('.fa-chevron-down');
const up = document.querySelector('.fa-chevron-up');
const reForm = document.querySelector('.formDiv');
showRe.addEventListener('click', () => {
    down.classList.toggle('none');
    up.classList.toggle('none');
    reForm.classList.toggle('none');
    if (down.classList.contains('none')) {
        //비동기 데이터 가져와야함
        const reviewRe = document.createElement('div');
        reviewRe.classList.add('review_re');
        const reDiv = document.querySelector('.reDiv');
        reDiv.appendChild(reviewRe);
        const reWriter = document.createElement('span');
        reWriter.classList.add('re_writer');
        reviewRe.appendChild(reWriter);
        reWriter.innerText = '봄봄';//reWriter
        const reContent = document.createElement('pre');
        reContent.classList.add('re_content');
        reviewRe.appendChild(reContent);
        reContent.innerText = '안녕하세요 고객님! 소중한 후기 남겨주셔서 감사드립니다 :D';

    } else {
        let review = document.querySelectorAll('.review_re');
        review.forEach(e => {
            e.remove();
        })
    }

})
// q&a 제목 클릭시 내용 보이기
const qTitle = document.querySelectorAll('.q_tit-con');
qTitle.forEach(title => {
    title.children[0].addEventListener('click', () => {
        if (title.children[1] == null) {
            //비동기 데이터 가져와야함
            const qContent = document.createElement('div');
            qContent.classList.add('q_content');
            title.appendChild(qContent);
            qContent.innerText = '사이즈가 어떻게 되나여'//q_content
        }else {
            title.children[1].remove();
        }

    })
})

