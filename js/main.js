const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
	modal.classList.toggle("is-open");
}

// day 1

const buttonAuth = document.querySelector('.button-auth'),
	modalAuth = document.querySelector('.modal-auth'),
	closeAuth = document.querySelector('.close-auth'),
	logInForm = document.querySelector('#logInForm'),
	loginInput = document.querySelector('#login'),
	passInput = document.querySelector('#password'),
	alertLogin = document.querySelector('#alertLogin'),
	alertPass = document.querySelector('#alertPass'),
	userName = document.querySelector('.user-name'),
	buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('Delivery');

const toggleModalAuth = () => {
	modalAuth.classList.toggle('is-open');
};

buttonAuth.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);

const authorized = () => {
	const logOut = () => {
		login = '';
		localStorage.removeItem('Delivery')
		buttonAuth.style.display = '';
		buttonOut.style.display = '';
		userName.style.display = '';
		loginInput.classList.remove('not-value');
		alertLogin.textContent = 'Логин';
		alertLogin.style.color = '';
		passInput.classList.remove('not-value');
		alertPass.textContent = 'Пароль';
		alertPass.style.color = '';
		buttonOut.removeEventListener('click', logOut);
		checkAuth();
	}
	console.log('Авторизован');
	userName.textContent = login;

	buttonAuth.style.display = "none";
	buttonOut.style.display = 'flex';
	userName.style.display = 'flex';

	buttonOut.addEventListener('click', logOut);
};

const notAuthorized = () => {
	console.log('Не авторизован');

	const logIn = (e) => {
		e.preventDefault();	
		if (!loginInput.value) {
			loginInput.classList.add('not-value');
			alertLogin.textContent = 'Введите логин';
			alertLogin.style.color = 'red';
		} if (!passInput.value) {
			passInput.classList.add('not-value');
			alertPass.textContent = 'Введите пароль';
			alertPass.style.color = 'red';
		} else {
			login = loginInput.value;
			localStorage.setItem('Delivery', login)
			toggleModalAuth();
			buttonAuth.removeEventListener('click', toggleModalAuth);
			closeAuth.removeEventListener('click', toggleModalAuth);
			logInForm.removeEventListener('submit', logIn);
			logInForm.reset();
			checkAuth();
		}
	};

	buttonAuth.addEventListener('click', toggleModalAuth);
	closeAuth.addEventListener('click', toggleModalAuth);
	logInForm.addEventListener('submit', logIn);
};

const checkAuth = () => {
	if (login) {
		authorized();
	} else {
		notAuthorized();
	}
};

checkAuth();

