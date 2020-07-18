
const MENU_OPT_NAME = 0;
const MENU_OPT_URL = 1;

var optionsArray = new Array();
optionsArray[MENU_OPT_NAME] = new Array();
optionsArray[MENU_OPT_URL] = new Array();
optionsCount = 0;

function addOption(name, url) {
	optionsArray[MENU_OPT_NAME][optionsCount] = name;
	optionsArray[MENU_OPT_URL][optionsCount] = url;
	optionsCount++;
}
	
function writeMobileMenu() {
	let content = '<select><option selected disabled hidden>---</option>';
	
	for(let i = 0; i < optionsArray[MENU_OPT_NAME].length; i++) {
		let url = "'" + optionsArray[MENU_OPT_URL][i] + "'";
		content += '<option onClick="gotoURL(' + url + ')">';
		content += optionsArray[MENU_OPT_NAME][i];
		content += '</option>';
	}
	
	document.write(content + '</select>');
}

function writeLargeMenu() {
	let content = '<ul class = "menu guide-menu">';
	
	for(let i = 0; i < optionsArray[MENU_OPT_NAME].length; i++) {
		content += '<li><a href="' + optionsArray[MENU_OPT_URL][i] + '">';
		content += optionsArray[MENU_OPT_NAME][i];
		content += '</a></li>';
	}
	
	document.write(content + '</ul>');
}