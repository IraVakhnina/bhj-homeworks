const interest = document.querySelectorAll('.interest__check');
let parent;
let child;

interest.forEach((interests) => {
	interests.addEventListener('change', e => {
		parent = e.target.closest('.interest');
		child = parent.querySelectorAll('.interest__check');
		child.forEach(elem => elem.checked = e.target.checked);
	})
});

