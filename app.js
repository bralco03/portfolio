const Form = document.querySelector('#form1');

Form.addEventListener('submit', e => {
    onbeforeunload = function() {
        return false;
    };
    setInterval(function() {
        alert("Your mail has been sent!");
        
    }, 2000);
    
});