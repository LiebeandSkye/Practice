//when you press the lock icon it lets you view your password and changes icon to unlock and when you click it again it changes back to normal password

const passwordInput = document.getElementById('password');
const lockIcon = document.querySelector('.lock');
const unlockIcon = document.querySelector('.unlock');

passwordInput.addEventListener('click', () => {
    if (passwordInput.value) {
        lockIcon.classList.add('d-none');
        unlockIcon.classList.remove('d-none');
    } else {
        lockIcon.classList.remove('d-none');
        unlockIcon.classList.add('d-none');
    }
});