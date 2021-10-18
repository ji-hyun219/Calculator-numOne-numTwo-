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
    if (numOne) {    // numOne �� ����
        operator += op;
        $operator.value = op;
    }
    else {           // numOne �� ����x ----> ����
        alert('please typing number');
    }
}


/* = ��ư Ŭ��
 * 1. numTwo �� �������� �ʴ´�
 * 2. ���â�� ǥ��
 * 3. numTwo �� �����Ѵ�
 * 4. ����Ѵ�
 * ���� if�� ��� �ϳ�
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




document.querySelector('#num-0').addEventListener('click', onClickNumber('0'));  // �� ���ڷ� �����ϴ°�
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
document.querySelector('#calculate').addEventListener('click', onClickEqual);    // ������ �����ϴ� ������ ����?
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    numTwo = '';
    operator = '';
    $result.value = '';
    $operator.value = '';
});