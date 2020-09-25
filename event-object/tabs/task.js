const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((elem) => {
	elem.addEventListener('click', function(e) {
		let current = document.querySelector(".tab_active");
		current.classList.remove("tab_active");
		this.classList.add('tab_active'); 
		let indexOfTab = tabs.indexOf(document.querySelector(".tab_active"));
		document.querySelector(".tab__content_active").classList.remove("tab__content_active");
		content[indexOfTab].classList.add("tab__content_active");
	})
})