const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form .button");
const logoutButton = document.querySelector(".greeting .button");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector(".greeting");
const link = document.querySelector(".greeting .greetings");
logoutButton.addEventListener("click",handleLogout);
loginButton.addEventListener("click",handleLogin);
function handleLogin(event){
    value=loginInput.value;
    if (value==""){
        alert("입력값을 주세요.");
        return;
    }
    if (value.length>=8){
        alert("name은 7자 이하로 해주세요.");
        return;
    }
    
    window.localStorage.setItem("username",value);
    loginForm.style.display="none";
    greeting.style.display="flex";
    loginInput.value="";
    link.innerText=value+"님 반갑습니다.";
    
}
function handleLogout(event){
    loginForm.style.display="flex";
    greeting.style.display="none";
    window.localStorage.removeItem("username");
    
    
}
if (window.localStorage.getItem("username")!=null){
    link.textContent=window.localStorage.getItem("username")+"님 반갑습니다.";
    loginForm.style.display="none";
}
else{
    greeting.style.display="none";
}


// 