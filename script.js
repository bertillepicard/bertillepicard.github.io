var darkMode;

function toggledark(){
	if(location.search.substring(1).split("&").includes("dark-mode=true")){
	window.location.href = window.location.href.replace(".html?dark-mode=true", ".html")
	}else{
		if(location.search.substring(1).split("&")!=""){
		window.location.href = window.location.href.replace(".html?" + location.search.substring(1).split("&"), ".html?dark-mode=" + "true")
		}else{
		window.location.href = window.location.href.replace(".html", ".html?dark-mode=" + "true")
}
}
}

function callToCV (){
	if(darkMode){
	window.location.href = "cv.html?dark-mode=true";
	}else{
	window.location.href = "cv.html";
	}
}

function callToIndex (){
	if(darkMode){
	window.location.href = "index.html?dark-mode=true";
	}else{
	window.location.href = "index.html";
	}
}

function callToResearch (){
	if(darkMode){
	window.location.href = "research.html?dark-mode=true";
	}else{
	window.location.href = "research.html";
	}
}

function callToTeaching (){
	if(darkMode){
	window.location.href = "teaching.html?dark-mode=true";
	}else{
	window.location.href = "teaching.html";
	}
}

