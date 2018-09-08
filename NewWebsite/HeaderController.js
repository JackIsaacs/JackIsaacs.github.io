
const MinSize = 50;
const ScrollSpeed = 500;

var StartingFontSize = 0;
var StartingSize = 500;

function Start() {
    if ($("#JS_HEADER").css("height") == "0px") {

        StartingSize = window.innerHeight;

        $("#JS_HEADER").css({ "height": StartingSize.toString() + "px" });
        console.log($("#JS_HEADER").css("height"));

        $("#ContentPadding").css({ "padding-top": StartingSize.toString() + "px" })
    }
}

function GetHeaderSize() {
    const CurrentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    return clamp((StartingSize - CurrentScrollY), MinSize, StartingSize);
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
};

function ResizeOnScroll() {

    if (StartingFontSize == 0) {
        StartingFontSize = $("#JS_HEADER_NAME").css("fontSize");
    }
    if (StartingSize == 0) {
        StartingSize = $("#JS_HEADER").css("height");
    }

    console.log(StartingSize);

    const CurrentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    /** Grab elements */
    var headerElement = document.getElementById('JS_HEADER');
    var nameElement = document.getElementById('JS_HEADER_NAME');
    var iconElement = document.getElementById('JS_HEADER_ICON');

    /** Scale elements */
    var HeaderSize = GetHeaderSize();
    headerElement.style.height = HeaderSize;

    nameElement.style.fontSize = StartingFontSize - (CurrentScrollY / 4.0);

    /** Set opacitys */
    nameElement.style.opacity = 1.0 - (CurrentScrollY / 400.0);
    iconElement.style.opacity = (CurrentScrollY / 400.0);
}


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, ScrollSpeed, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

window.addEventListener('scroll', ResizeOnScroll);
