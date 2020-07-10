// varibales
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const introItems = document.querySelectorAll(".task-text-items .item");

let timoutTime = 7500;
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

		// if the users click on the div we want to give more time to the setTimeOut

		// changing the class
		item.classList.add("activeItem");
		item.style.backgroundColor = item.getAttribute("data-color");
		//seeting the correct img
		const attrImg = item.getAttribute("data-img");

		const currentImg = document.querySelector(".images img");
		currentImg.src = `images/${attrImg}`;
		currentImg.style.animation = "";

		// chage the background main img

		const attrBgimage = item.getAttribute("data-backgorund");

		document.querySelector(
			".tasks"
		).style.backgroundImage = `url("images/${attrBgimage}")`;

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

		introItems.forEach((item) => {
			if (!item.classList.contains("activeItem")) {
				item.style.backgroundColor = "transparent";
			}
		});
	});
});

// eventListners
menu.addEventListener("click", function (e) {
	const closeBtn = menu.querySelector("a");
	closeBtn.textContent = "X";
	closeBtn.classList.add("closeMenu");
	if (!navLinks.classList.contains("active")) {
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
		navLinks.style.pointerEvents = "all";
	} else {
		closeBtn.classList.remove("closeMenu");
		document.querySelector(".logo").style.pointerEvents = "All";
		navLinks.classList.remove("active");
		document.body.style.overflowY = "scroll";
		closeBtn.textContent = "";
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

// setInterval to change to backgrounds

setInterval(function () {
	//preform a click event on the next tdiv

	// get the currentDiv
	console.log(timoutTime);
	let nextIndex;
	let items = Array.from(introItems);

	for (i in items) {
		if (items[i].classList.contains("activeItem")) {
			i = parseInt(i);
			nextIndex = i + 1;

			if (nextIndex >= items.length) {
				nextIndex = 0;
			}
		}
	}

	const nextItem = items[nextIndex];
	nextItem.click();
}, timoutTime);
