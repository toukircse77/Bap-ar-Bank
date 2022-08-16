

const submitBtn = document.getElementById('login-btn');
submitBtn.addEventListener('click',function(){
    const inputMail = document.getElementById('input-email');
   const inputValue = inputMail.value;

    const inputPassword = document.getElementById('input-password');
   const PassValue = inputPassword.value;
    if( inputValue === 'admin@gmail.com' && PassValue === 'admin'){
        window.location.href = 'bank.html';
    }
    else {
        alert('tui password vule gesos .toke ami tajjo sontan ghosona korlam');
    }
})