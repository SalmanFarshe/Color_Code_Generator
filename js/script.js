var button = document.querySelector(".button");
function generatingRandomHexaColorCode() {
	const body = document.querySelector("body");
	const hexzlColorCode = "#" + Math.floor(Math.random() * 10000000).toString(16);
	const h1 = document.querySelector(".h1");
    body.style.backgroundColor = `${hexzlColorCode}`;
    button.innerHTML = `Change Background <br> ${hexzlColorCode}`
    button.style.backgroundColor = `${hexzlColorCode}`
    h1.style.color =  `${hexzlColorCode}`
}

button.addEventListener("click", generatingRandomHexaColorCode);
