darkMode = location.search.substring(1).split("&").includes("dark-mode=true")

if(darkMode){
	document.body.classList.value = "dark";
}