var button = document.querySelector(".button");
function generatingRandomHexaColorCode() {
	const hexzlColorCode = "#" + Math.floor(Math.random() * 10000000).toString(16);
	const body = document.querySelector("body");
	const colorCode = document.querySelector(".colorCode");
	const h1 = document.querySelector(".h1");
	body.style.backgroundColor = `${hexzlColorCode}`;
	colorCode.innerHTML = `<br>${hexzlColorCode}`;
	button.style.backgroundColor = `${hexzlColorCode}`;
	h1.style.color = `${hexzlColorCode}`;
	// copy color code
	const inputele = document.createElement("input");
	inputele.value = `${hexzlColorCode}`;
	document.body.appendChild(inputele);
	inputele.select();
	document.execCommand("copy");
	document.body.removeChild(inputele);

	var alerrt = document.querySelector(".alerrt");
	alerrt.style.display = "block";
    setTimeout(() => {
        alerrt.style.display = "none"
    }, 1500);
}
button.addEventListener("click", generatingRandomHexaColorCode);
