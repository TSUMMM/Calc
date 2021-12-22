let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let add = document.querySelector('#plus');
let subtract = document.querySelector('#minus');
let multiply = document.querySelector('#times');
let divide = document.querySelector('#divide');
let exponent = document.querySelector('#exponent');
let remainder = document.querySelector('#remainders');
let sqrt = document.querySelector('#sqrt');
let hy = document.querySelector('#hy');
let re = document.querySelector('#re');
let hi = document.querySelector('#hi');
let sum = 0;
let a = parseInt(num1.value);
let b = parseInt(num2.value);
add.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = a + b;
    hi.innerHTML=sum + "&nbsp;";
})
subtract.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = a - b;
    hi.innerHTML=sum + "&nbsp;";
})
multiply.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = a * b;
    hi.innerHTML=sum + "&nbsp;";
})
divide.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = a / b;
    hi.innerHTML=sum + "&nbsp;";
})
exponent.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = a ** b;
    hi.innerHTML=sum + "&nbsp;";
})
sqrt.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = Math.sqrt(a);
    hi.innerHTML=sum + "&nbsp;";
})
function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
}
hy.addEventListener('click', function() {
    a = parseInt(num1.value);
    b = parseInt(num2.value);
    sum = calcHypotenuse(a, b);
    hi.innerHTML = sum + "&nbsp;";
})
re.addEventListener('click', function() {
    num1.value = 0;
    num2.value = 0;
    hi.innerHTML = "0&nbsp;";
})