var darkMode;

function toggledark(){
	if(location.search.substring(1).split("&").includes("dark-mode=true")){
	window.location.href = window.location.href.replace(".html?dark-mode=true", ".html")
	}else{
	window.location.href = window.location.href.replace(".html", ".html?dark-mode=" + "true")
	}		
}

function callToCV (){
	if(darkMode){
	window.location.href = "CV.html?dark-mode=true";
	}else{
	window.location.href = "CV.html";
	}
}

function callToIndex (){
	if(darkMode){
	window.location.href = "home.html?dark-mode=true";
	}else{
	window.location.href = "home.html";
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

