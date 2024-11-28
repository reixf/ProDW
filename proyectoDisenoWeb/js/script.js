var sliders = document.querySelectorAll('.slider');


sliders.forEach(function(slider) {
var sliderImages = slider.querySelector('.slider-images');
var images = slider.querySelectorAll('.slider-images img');
var prevButton = slider.querySelector('.prev');
var nextButton = slider.querySelector('.next');
var currentIndex = 0;

var totalImages = images.length;
sliderImages.style.width = totalImages * 300 + 'px';


function updateSlider() {
	sliderImages.style.marginLeft = '-' + currentIndex * 300 + 'px';
}


prevButton.onclick = function() {
	currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
	updateSlider();
	resetAutoSlide();
};


nextButton.onclick = function() {
	currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
	updateSlider();
	resetAutoSlide();
};


function autoSlide() {
	currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
	updateSlider();
}


var autoSlideInterval = setInterval(autoSlide, 3000);


function resetAutoSlide() {
	clearInterval(autoSlideInterval);
	autoSlideInterval = setInterval(autoSlide, 3000);
}

updateSlider();
});