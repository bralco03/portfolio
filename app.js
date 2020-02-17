const Form = document.querySelector('#form1');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const formSub = document.querySelector('#sub');

Form.addEventListener('submit', e => {
    setInterval(function(){
        document.getElementById("form1").reset();
        formSub.value = "MESSAGE SENT";
    }, 3000);
});
