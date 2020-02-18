const Form = document.querySelector('#form1');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const submitSuccess = document.querySelector('.success');

Form.addEventListener('submit', e => {
    setInterval(function(){
        document.getElementById("form1").reset();
        submitSuccess.innerText= "Message Sent"
    }, 3000);
});
