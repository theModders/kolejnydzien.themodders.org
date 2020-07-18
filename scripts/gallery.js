
const WRAPPER_CLASS_PREFIX = "wrapper_";
const IMG_CLASS_PREFIX = "img_";
const CLASS_ACTIVE = "active";

const DISPLAY_HTML_PRE = '<div class="display-wrapper col s-100 m-100 l-66 xl-60"><div class="display"><div class="display-img-wrapper">';
const DISPLAY_HTML_POST = '</div></div></div>';

let currentImage = 0;
let imagesCount = 0;
let imgArray = new Array();

function activateElement(id) {
	document.getElementById(id).classList.add(CLASS_ACTIVE);
}

function deactivateElement(id) {
	document.getElementById(id).classList.remove(CLASS_ACTIVE);
}

function addImage(url) {
	imgArray[imagesCount] = url;
	imagesCount++;
}

function writeLarge() {
	let pre;
	let post = '</a></div></div>';
	for(let i = 0; i < imagesCount; i++) {
		pre = '<div id="' + WRAPPER_CLASS_PREFIX + i + '" class="gallery-item-wrapper col s-100 m-100 l-33 xl-25"><div class="gallery-item">';
		pre += '<a onClick="showImage(' + i + ')">';
		document.write(pre + '<img src="' + imgArray[i] + '"/>' + post);
	}
	document.getElementById(WRAPPER_CLASS_PREFIX + currentImage).classList.add(CLASS_ACTIVE);
}

function writeMobile() {
	let pre = '<div class="gallery-item-wrapper col s-100 m-100"><div class="gallery-item">';
	let post = '</div></div>';
	for(let i = 0; i < imagesCount; i++) {
		document.write(pre + '<img src="' + imgArray[i] + '"/>' + post);
	}
}

function writeDisplay() {
	document.write(DISPLAY_HTML_PRE);
	for(let i = 0; i < imagesCount; i++)
		document.write('<a href="' + imgArray[i] + '" target="_blank" ><img id="' + IMG_CLASS_PREFIX + i + '" src="' + imgArray[i] + '"/></a>');
	document.getElementById(IMG_CLASS_PREFIX + currentImage).classList.add(CLASS_ACTIVE);
	document.write(DISPLAY_HTML_POST);
}

function initGallery(isMobile) {
	if(isMobile)
		writeMobile();
	else
		writeLarge();
}

function showImage(n) {
	if(n != currentImage) {
		deactivateElement(WRAPPER_CLASS_PREFIX + currentImage);
		deactivateElement(IMG_CLASS_PREFIX + currentImage);
		activateElement(WRAPPER_CLASS_PREFIX + n);
		activateElement(IMG_CLASS_PREFIX + n);
		currentImage = n;
	}
}