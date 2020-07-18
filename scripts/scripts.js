const LARGE_WIDTH = 992;
const TABLET_WIDTH = 600;

let mobileMenuVisible = false;
let menuItems = 0;

function gotoURL(url){
	window.location = url;
};

function getWidth() {
	let devicePixelRatio = window.devicePixelRatio || 1;
	return screen.width * devicePixelRatio;
}

function isMobile() {
	if(getWidth() < LARGE_WIDTH)
		return true;
	return false;
}

function getFirstByClass(className) {
	return document.getElementsByClassName(className)[0];
}

function showMenu() {
	if(mobileMenuVisible) {
		document.getElementById("main-menu").style.height = 0;
		mobileMenuVisible = false;
	} else {
		document.getElementById("main-menu").style.height = (menuItems * 45) + "px";
		mobileMenuVisible = true;
	}
}

function slide(element, height) {
	element.style.height = height;
}