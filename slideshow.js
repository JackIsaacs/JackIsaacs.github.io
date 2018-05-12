var slideIndex = 0;

var slides = ["slideshow0", "slideshow1", "slideshow2"];

var fadetime = 1000;
var slidetime = 8000;

InvokeSlideShow();

function InvokeSlideShow()
{
    setTimeout(showSlides, slidetime);     
}

function showSlides() 
{
    $("#fader").fadeIn(fadetime);
    setTimeout(LoadNextImage, fadetime);
    
    setTimeout(showSlides, slidetime); 
}

function LoadNextImage()
{
    document.getElementById(slides[slideIndex]).style.display = "none";
    slideIndex++;
    if (slideIndex == slides.length) slideIndex = 0;
    document.getElementById(slides[slideIndex]).style.display = "block";

    $("#fader").fadeOut(fadetime);
}