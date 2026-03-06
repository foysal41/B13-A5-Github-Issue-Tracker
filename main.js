// Login System JS Here
document.getElementById("login-btn").addEventListener("click", function(){
    const userInput = document.getElementById('userInput');
    const userInputValue = userInput.value;

    
    const userPassWord = document.getElementById("userPassword")
    const userPin = userPassWord.value;

    if(userInputValue === 'admin' && userPin ==='admin123'){
        window.location.replace('./issues.html');
    }else{
        alert("Login Failed");
        return;
    }
})




