class OverlayData {
    constructor(Title, Video, Body) {
        this.Title = Title;
        this.Video = Video;
        this.Body = Body;
    }

    Title;
    Video;
    Body;
}

var dissertation = new OverlayData(
    "Seed - Final Major Project",
    "https://www.youtube-nocookie.com/embed/7u6kWGtEO5k",
    "Seed is a tool developed for my Final Major Project at University. It is a tool that aims to help developers create procedural trees for use in their own game engine or applications.<br><br>Additionally, the tool supports saving and loading of a custom file format, as well as .FBX exporting functionality.<br><br>It was built using a standard win32 app, with a DirectX 11 viewport."
);

var thelastsamurai = new OverlayData(
    "The Last Samurai - PS4",
    "https://www.youtube-nocookie.com/embed/NRnfQkQQZ-4",
    "This is a PS4 implementation of a Japanese themed fighting game which features a lone Samurai warrior fighting off hordes of enemy Ninjas trying to take your life.<br><br>The game includes basic features such as image rendering, platform collision, sound and animation. The framework for the game is developed in C++ around a Unity-style entity component system."
);

var pitfall = new OverlayData(
    "Pitfall - DirectX 11",
    "https://www.youtube-nocookie.com/embed/gTUd-tWiqMk",
    "This is a DirectX 11 University project designed to test our skills in 3D maths, matrices and the like. All while creating an experience for the player.<br><br>The brief instructed us to add features to our game, along with additional features for more marks, these included 3D direct sound, particles, and quick-switching inputs between keyboard and controller.<br><br>Features basic physics, AABB collision detection, directional and point lighting, multiple light sources, text rendering, skyboxes, level loading, non player entities.<br><br>"
);

var muggermansion = new OverlayData(
    "Mugger Mansion - SDL2",
    "https://www.youtube-nocookie.com/embed/f1F6g4DxefU",
    "The focus of this assignment was to create a basic 2D game within SDL using C++.<br><br>My implentation of the assignment included: Player input, pickups, AABB collision, a basic particle system, enemy AI and configurable patrol paths, configurable levels, line of sight detection, saving and loading"
);

var voxzombies = new OverlayData(
    "Vox Zombies",
    "https://www.youtube-nocookie.com/embed/H4o1cwwtbrY",
    "A small project that was just for fun. The characters were created using MagicaVoxel and animated using Unity. The main vision I had for this project was to focus on aesthetic within flying body parts and cool particle effects!<br><br>Along with these features, I also added full graphical settings and key rebinding support."
)

var overlays = { dissertation, thelastsamurai, pitfall, muggermansion, voxzombies };



function ShowOverlay(key) {
    document.getElementById("TestOverlay").style.opacity = "1";
    document.getElementById("TestOverlay").style.visibility = "visible";

    var d = overlays[key];

    $('#OverlayTitle').html(d.Title);
    $('#OverlayVideo').attr('src', d.Video);
    $('#OverlayBody').html(d.Body);

    //disableScroll();
}

function HideOverlay() {
    document.getElementById("TestOverlay").style.opacity = "0";
    document.getElementById("TestOverlay").style.visibility = "hidden";

    setTimeout(ClearOverlay, 500)
    //enableScroll();
}

function ClearOverlay() {
    $('#OverlayTitle').html("");
    $('#OverlayVideo').attr('src', "");
    $('#OverlayBody').html("");
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}