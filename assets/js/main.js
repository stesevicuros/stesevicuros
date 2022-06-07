/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

setTimeout(() => document.querySelector('body').classList.remove('is-preload'), 100);

function copyEmail(text, event) {
	var dummy = document.createElement('input');
	document.body.appendChild(dummy);

	dummy.setAttribute('id', 'dummy_id');
	document.getElementById('dummy_id').value = text;
	dummy.select();
	document.execCommand('copy');
	document.body.removeChild(dummy);
	event.getElementsByClassName('tooltiptext')[0].innerHTML = 'Copied!';
}

function resetTooltip(event) {
	event.getElementsByClassName('tooltiptext')[0].innerHTML = 'Copy';
}

const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', e => {
	console.log('LMAO');
	e.preventDefault();

	const button = document.getElementById('sendButton');
	const successMessage = document.getElementById('successMessage');

	button.className += ' button-loading';

	const request = new XMLHttpRequest();
	request.open('post', 'https://formspree.io/xeqpoowe');
	request.setRequestHeader('Accept', 'application/json');
	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			if (request.status === 200) {
				successMessage.classList.remove('hide-message');
				document.getElementById('message').value = '';
				document.getElementById('name').value = '';
				document.getElementById('email').value = '';
			} else {
				alert('Message not sent. There was an unexpected error.');
			}
			button.classList.remove('button-loading');
		}
	};
	request.send(new FormData(emailForm));
});

function closeSuccessMessage() {
	document.getElementById('successMessage').classList += ' hide-message';
}

// emailForm.addEventListener('submit', e => {
// 	e.preventDefault();

// 	const button = document.getElementById('sendButton');
// 	const successMessage = document.getElementById('successMessage');

// 	button.className += ' button-loading';

// 	setTimeout(() => {
// 		button.classList.remove('button-loading');
// 		successMessage.classList.remove('hide-message');
// 	}, 1000);
// });
