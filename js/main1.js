var btn1 = document.getElementsByClassName("btn1");
var slide = document.getElementById("slide");

btn1[0].onclick = function() {
	slide.style.transform = "translatex('0px')";

}

btn1[1].onclick = function() {
	slide.style.transform = "translatex('-800px')";
	 
}

btn1[2].onclick = function() {
	slide.style.transform = "translatex('-1600px')";
	 
}
