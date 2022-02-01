const tablist = document.querySelector('[role="tablist"]');
const tabs = tablist.querySelectorAll('[role="tab"]');

tablist.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
	tab.addEventListener('click', changeTabPanel);
});

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

function changeTabPanel(e) {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute('aria-controls');
	const targetImage = targetTab.getAttribute('data-image');

	const tabContainer = targetTab.parentNode;
	const mainContainer = tabContainer.parentNode;
	mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) => panel.setAttribute('hidden', true));
	mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

	mainContainer.querySelectorAll('picture').forEach((picture) => picture.setAttribute('hidden', true));
	mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

	tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
	targetTab.setAttribute('aria-selected', true);
}
