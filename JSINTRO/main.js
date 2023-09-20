
//Assignment: create two boxes that take in 2 numbers and on press of buttom output the 
//sum and product of the two numbersProduct of the Square roots of each number

const firstNum = 0;
const secNum = 0;

const form = document.querySelector('#my-form');
const FirstNumInput = document.querySelector('#FirstInput');
const SecNumInput = document.querySelector('#SecInput');
const msg = document.querySelector('.msg');
const sumBox = document.getElementById('textboxSum');
const productBox = document.getElementById('textboxProduct');

form.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(FirstNumInput.value === '' || SecNumInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'input number in all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const sumNum = Number(FirstNumInput.value) + Number(SecNumInput.value);
        const outPut = `sum of ${FirstNumInput.value} + ${SecNumInput.value} is ${sumNum}`;
        const squareRoot = Math.sqrt(FirstNumInput.value * SecNumInput.value);
        //console.log(outPut);
        sumBox.value = sumNum;
        productBox.value = squareRoot;
        //console.log(`product of the swaure root of each number is ${squareRoot}`)
    }
}
