const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// const navigationDots = document.querySelector(".navigation-dots");

//set up the slider




var sliderMain = document.getElementById('slider-main');
var item = sliderMain.getElementsByClassName('item');

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

function next(){
	sliderMain.append(item[0]);
}

function prev(){
	sliderMain.prepend(item[item.length-1]);
}

function init(){
	/*
	
	slideImage[0] = 0;
	slideImage[1] = 100%;
	slideImage[2] = 200%;

	*/

	slideImage.forEach((img,i)=>{
		img.style.left = i * 100 + "%";
	});

	slideImage[0].classList.add("active");

	createNavigationDots();
}

init();

//crate navigation dots

function createNavigationDots() {
	for( let i = 0;i < numberOfImages; i++){
		const dot = document.createElement("div");
		dot.classList.add("single-dots");

		dot.addEventListener("click",()=> {
			goToSlide(i);
		});
	}

	// navigationDots.children[0].classList.add('active');

}

//next button 
nextBtn.addEventListener("click",()=>{
	if (currentSlide >= numberOfImages -1) {
		goToSlide(0);
		// currentSlide = 0;
		return;
	}
	currentSlide++;
	goToSlide(currentSlide);
});

//next button 
prevBtn.addEventListener("click",()=>{
	if (currentSlide <= 0) {
		goToSlide(numberOfImages - 1);
		// currentSlide = numberOfImages - 1;
		return;
	}
	currentSlide--;
	goToSlide(currentSlide);
});

//got to slide
function goToSlide(slideNumber) {
		slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

		currentSlide = slideNumber;
		setActiveClass();
}

//set active class
function setActiveClass(){
	//set active class for slide Image

	let currentActive = document.querySelector(".slide-image.active");
	currentActive.classList.remove("active");
	slideImage[currentSlide].classList.add("active");

	//set active class for navigation dots
	// let currentDot = document.querySelector(".single-dots.active");
	// currentDot.classList.remove("active");
	// navigationDots.children[currentSlide].classList.add("active");
}

//video play button js

var myvideo = document.getElementById("myvideo");

function playVideo() {
	// alert("hello");
	myvideo.play();

}





