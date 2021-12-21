window.addEventListener("DOMContentLoaded", (e) => {
	e.preventDefault();
	function ibg() {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector("img")) {
				ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
			}
		}
	}

	ibg();

	// Аккордион для секции "Онлайн запись"
	let acc = document.getElementsByClassName("appointment-accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function (e) {
			e.preventDefault();
			this.classList.add("active");
			let panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
				this.classList.remove("active");
			} else {
				panel.style.display = "block";
			}

			let options = document.getElementsByClassName("option");

			for (let o = 0; o < options.length; o++) {
				options[o].addEventListener("click", function () {
					panel.style.display = "none";
					this.parentElement.previousElementSibling.innerHTML = this.dataset.value;
					this.parentElement.previousElementSibling.classList.remove("active");
					this.parentElement.previousElementSibling.classList.remove("appointment-accordion_before");
					this.parentElement.previousElementSibling.classList.add("appointment-accordion_l");
				});
			}
		});
	}

	// Скрипт для работы календаря
	let date = document.querySelector(".date");
	let arrows = document.querySelectorAll(".form__input.date");

	date.addEventListener("click", (e) => {
		arrows.forEach((arrow) => {
			if (e.target == date) {
				arrow.style.background = "rgba(206, 130, 114, 0.07)";
				arrow.style.transition = "background 0.35s ease-in";
				arrow.style.paddingLeft = "23px";
			}
		});
	});

	// Модальное окно

	const triggerBtn = document.querySelectorAll("[data-modal]");
	const modal = document.querySelector(".modal");
	const modalCloseBtn = document.querySelector(".modal__close");

	// Прослушка событий
	triggerBtn.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			openModal();
		});
	});
	modal.addEventListener("click", (e) => {
		if (e.target == modal || e.target == modalCloseBtn) {
			closeModal();
		}
	});
	document.addEventListener("keydown", (e) => {
		if (e.key == "Escape") {
			closeModal();
		}
	});

	function openModal() {
		modal.classList.remove("hide");
		modal.classList.add("show");
		document.body.style.overflow = "hidden";
	}

	function closeModal() {
		modal.classList.add("hide");
		modal.classList.remove("show");
		document.body.style.overflow = "";
	}
});
