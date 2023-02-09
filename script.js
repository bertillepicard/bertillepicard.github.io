var darkMode;

function toggledark(){
	if(window.location.href.includes("html")){
	if(location.search.substring(1).split("&").includes("dark-mode=true")){
	window.location.href = window.location.href.replace(".html?dark-mode=true", ".html")
	}else{
		if(location.search.substring(1).split("&")!=""){
		window.location.href = window.location.href.replace(".html?" + location.search.substring(1).split("&"), ".html?dark-mode=" + "true")
		}else{
		window.location.href = window.location.href.replace(".html", ".html?dark-mode=" + "true")
}
}
}else{
	if(location.search.substring(1).split("&").includes("dark-mode=true")){
		window.location.href = window.location.href.replace("?dark-mode=true", "")
	}else{
		if(location.search.substring(1).split("&")!=""){
			window.location.href = window.location.href.replace(location.search, "") + "?dark-mode=true"
			}else{	
		window.location.href = window.location.href + "?dark-mode=true"
	}
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

function callToTeachingVisualsProbability (){
	if(darkMode){
	window.location.href = "teaching_visuals.html?dark-mode=true#probability";
	}else{
	window.location.href = "teaching_visuals.html#probability";
	}
}


function callToTeachingVisualsEconometrics (){
	if(darkMode){
	window.location.href = "teaching_visuals.html?dark-mode=true#econometrics";
	}else{
	window.location.href = "teaching_visuals.html#econometrics";
	}
}

function callToTeachingVisualsMathematics (){
	if(darkMode){
	window.location.href = "teaching_visuals.html?dark-mode=true#mathematics";
	}else{
	window.location.href = "teaching_visuals.html#mathematics";
	}
}
