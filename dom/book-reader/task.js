const fontSize = Array.from(document. querySelectorAll('.font-size'));

fontSize.forEach((elem) => {
	elem.addEventListener('click', function(e){
		e.preventDefault();
		document.querySelector('.font-size_active').classList.remove('font-size_active');
		
		this.classList.add('font-size_active');
		this.closest('.book').classList.remove("book_fs-big");
		this.closest('.book').classList.remove("book_fs-small");

		if(elem.classList.contains("font-size_small")){
			this.closest('.book').classList.add("book_fs-small");
		}

		if(elem.classList.contains("font-size_big")){
			this.closest('.book').classList.add("book_fs-big");
		}
	})
});