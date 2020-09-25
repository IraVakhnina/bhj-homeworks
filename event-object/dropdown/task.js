  
const item = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdown = Array.from(document.querySelectorAll(".dropdown"));


item.forEach((elem) =>  {
	elem.addEventListener('click', function(e) {
		this.closest(".dropdown").childNodes[1].textContent = elem.textContent;
	}); 
});

dropdown.forEach((elem) => {
    elem.addEventListener('click', function(e) {
    	e.preventDefault();
    	if(this.childNodes[3].classList.contains('dropdown__list_active')){
    		this.childNodes[3].classList.remove('dropdown__list_active');
    	}else{
    		this.childNodes[3].classList.add('dropdown__list_active');
    	}
    })
})
