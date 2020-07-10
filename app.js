// varibales
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const introItems = document.querySelectorAll(".task-text-items .item");

introItems.forEach((item) => {
	item.addEventListener("click", function (e) {
		// each click on item

		// remove active from everyone
		// apply this active
		introItems.forEach((item) => {
			if (item.classList.contains("activeItem")) {
				item.classList.remove("activeItem");
			}
		});

		// changing the class
		item.classList.add("activeItem");
		//seeting the correct img
		const attrImg = item.getAttribute("data-img");

		const currentImg = document.querySelector(".images img");
		currentImg.src = `images/${attrImg}`;
		currentImg.style.animation = "";

		if (!document.querySelector(".images").style.animation) {
			document.querySelector(".images").style.animation =
				"opacityImg 0.2s ease-in-out 0.3s normal backwards  ";
			document
				.querySelector(".images")
				.addEventListener("animationend", function () {
					document.querySelector(".images").style.animation = "";
				});
		}

		//if were clickin on anything beside grid
		if (item.querySelector("p").innerHTML != "Grid") {
			document.querySelectorAll(".images img")[1].style.display = "none";
		} else {
			document.querySelectorAll(".images img")[1].style.display = "block";
		}
	});
});

// eventListners
menu.addEventListener("click", function (e) {
	if (!navLinks.classList.contains("active")) {
		menu.querySelector("a").textContent = "X";
		menu.style.zIndex = "2";
		document.querySelector(".logo").style.pointerEvents = "none";
		navLinks.classList.add("active");
		navLinks.style.opacity = "1";
		gsap.to(menu.querySelector("a"), 0.5, {
			color: "white",
			borderColor: "white",
		});
		document.body.style.overflowY = "hidden";
		gsap.fromTo(navLinks, 1, { translateX: "100%" }, { translateX: "0%" });
		navLinks.style.pointerEvenets = "all";
	} else {
		document.querySelector(".logo").style.pointerEvents = "All";
		navLinks.classList.remove("active");
		document.body.style.overflowY = "scroll";
		gsap.to(navLinks, 1, { translateX: "100%", onComplete: myfunc });
		navLinks.style.pointerEvenets = "none";
	}
});

// functions
function myfunc() {
	menu.querySelector("a").textContent = "Menu";
	gsap.to(menu.querySelector("a"), {
		color: "#f82b60",
		borderColor: "#f82b60",
	});
	navLinks.style = "";
}
