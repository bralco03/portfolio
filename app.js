const Form = document.querySelector('#form1');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const submitSuccess = document.querySelector('.success');
const navlinks = document.querySelectorAll('.navigation li');


Form.addEventListener('submit', e => {
    setInterval(function(){
        document.getElementById("form1").reset();
        submitSuccess.innerText= "Message Sent"
    }, 3000);
});
const navSlide = () => {
    const burguer = document.querySelector('.hamburguer');
    const nav = document.querySelector('.navigation');
     
        burguer.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
         navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 1}s`;
            }
         });
         burguer.classList.toggle('toggle');
        });

    
};
navSlide();




