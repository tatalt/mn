const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const loginBox = document.getElementById('login-box');
const userBox = document.getElementById('user-box');
const displayName = document.getElementById('display-name');
const logoutBtn = document.getElementById('logout-btn');

// Хуудас ачаалагдахад өмнө нь хадгалсан нэр байгаа эсэхийг шалгах
const savedUser = localStorage.getItem('loggedUser');
if (savedUser) {
    showUserHome(savedUser);
}

// Форм илгээх үед
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    
    // Хэрэглэгчийн нэрийг хөтөчийн localStorage-д хадгалах
    localStorage.setItem('loggedUser', username);
    showUserHome(username);
});

// Нэвтэрсэн төлөвийг дэлгэцэнд харуулах функц
function showUserHome(name) {
    displayName.textContent = name;
    loginBox.style.display = 'none';
    userBox.style.display = 'block';
}

// Гарах товч ажиллах
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    loginBox.style.display = 'block';
    userBox.style.display = 'none';
});