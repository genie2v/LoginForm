// 코드 구현
let id = document.getElementById('id');
let pw = document.getElementById('pw');
const info = document.getElementById('pw-info');
const loginBtn = document.getElementById('login-btn');

pw.addEventListener('input', checkPw);

function checkPw() {
  if (!/^[a-zA-Z0-9]{8,20}$/.test(pw.value)) {
    info.style.visibility = 'visible';
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = '';
  } else {
    info.style.visibility = 'hidden';
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = 'lavender';
  }
}

loginBtn.addEventListener('click', loginSuccess);

function loginSuccess() {
  alert(`${id.value}님 어서오세요`);
}
