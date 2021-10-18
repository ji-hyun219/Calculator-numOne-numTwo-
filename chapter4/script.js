let numOne = '';
let numTwo = '';
let operator = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');



const onClickNumber= (number)=>()=>{
    if (!operator) {
        numOne += number;
    }
    else {
        $result.value = '';
        numTwo += number;
    }
    $result.value += number;
}

const onClickOperator = (op) => () => {
    if (numOne) {    // numOne 이 존재
        operator += op;
        $operator.value = op;
    }
    else {           // numOne 이 존재x ----> 에러
        alert('please typing number');
    }
}


/* = 버튼 클릭
 * 1. numTwo 가 존재하지 않는다
 * 2. 경고창을 표시
 * 3. numTwo 가 존재한다
 * 4. 계산한다
 * 이중 if문 써야 하나
 * */



const onClickEqual = () => {
    if (!numTwo) {
        alert('no numTwo');
    }
    else {
        switch (operator) {
            case '+':
                $result.value = parseInt(numOne) + parseInt(numTwo);
                break;                         
            case '-':                          
                $result.value = parseInt(numOne) - parseInt(numTwo);
                break;                         
            case 'x':                          
                $result.value = parseInt(numOne) * parseInt(numTwo);
                break;                         
            case '/':                          
                $result.value = parseInt(numOne) / parseInt(numTwo);
                break;
            default:
                alert('please typing operator');
        }
    }
}




document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));  // 왜 문자로 저장하는가
document.querySelector('#num-1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num-2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num-3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num-4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num-5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num-6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num-7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num-8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num-9').addEventListener('click', onClickNumber('9'));
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('x'));
document.querySelector('#calculate').addEventListener('click', onClickEqual);    // 변수에 저장하는 이유가 뭔가?
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    $result.value = '';
    $operator.value = '';
});