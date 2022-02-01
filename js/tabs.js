const tablist = document.querySelector('[role="tablist"]');
const tabs = tablist.querySelectorAll('[role="tab"]');

tablist.addEventListener('keydown', changeTabFocus);

let tabFocus = 0;

function changeTabFocus(e) {
	const keydownLeft = 37;
	const keydownRigth = 39;

	if (e.keyCode === keydownLeft || e.keyCode === keydownRigth) {
		tabs[tabFocus].setAttribute('tabindex', -1);
	}

	if (e.keyCode === keydownRigth) {
		tabFocus++;
		if (tabFocus >= tabs.length) {
			tabFocus = 0;
		}
	}

	if (e.keyCode === keydownLeft) {
		tabFocus--;
		if (tabFocus < 0) {
			tabFocus = tabs.length - 1;
		}
	}

	tabs[tabFocus].setAttribute('tabindex', 0);
	tabs[tabFocus].focus();
}
