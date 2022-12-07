//add theme buttons to html
let themeButtonTemplate = document.getElementById("theme-button-template");
let themeButtonsParent = document.getElementById("theme-buttons");
let themeNames = ["style","style2"];
const THEME_PATH = "src/out/themes/";
const CSS_LINK = 0;
function addThemeButton(themeFilePath,themeName)
{
    let themeButton = (<DocumentFragment>(<HTMLTemplateElement>themeButtonTemplate).content.cloneNode(true)).children[0];
	console.log("button Added");
    themeButton.innerHTML = themeName;
    themeButton.setAttribute("data-theme-name",themeFilePath);
    themeButton.addEventListener("click",()=>{
        changeCSS(themeFilePath)
        console.log("theme applied: " + themeFilePath);
    });
    themeButtonsParent.appendChild(themeButton);
}
for(let theme of themeNames)
{
    addThemeButton(THEME_PATH + theme + ".css",theme);
}

function changeCSS(cssFile) {

    var oldlink = document.getElementsByTagName("link").item(CSS_LINK);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(CSS_LINK).replaceChild(newlink, oldlink);
}