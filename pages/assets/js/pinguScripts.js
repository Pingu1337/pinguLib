// |_______________________PINGUSCRIPTS.JS - pinguLib - [https://pingu.onl]___________________| //
// |__________________________________________________________________________________________| //
// |______pinguScripts.js is a part of pinguLib, a free to use css/js component library.______| //
// |__________________________________________________________________________________________| //
// |___________________GitHub repo:[https://github.com/Pingu1337/pinguLib]____________________| //
// |__________________________________________________________________________________________| //
// |_____________________website:[https://pingu1337.github.io/pinguLib/]______________________| //
// |__________________________________________________________________________________________| //
// |__________________________________________________________________________________________| //
// |__________________________________________________________________________________________| //
// |__________________________________________________________________________________________| //
// |__________________________________________________________________________________________| //
// |__________________________________________________________________________________________| //
// |__________________________________________________________________________________________| //

// |__________________________________________________________________________________________| //
// | Sleep function used to create delays in asynchronous functions.__________________________| //
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
// |__________________________________________________________________________________________| //
// | Loading function that loads the page and its content before displaying it to the client  | //

var skeletonExists = document.querySelector('.skeleton');
if(skeletonExists){
document.addEventListener('DOMContentLoaded', async function() {
    await sleep(500);
    document.body.classList.add('skeleton-fade-out');
    await sleep(300);
    document.body.classList.remove('skeleton');
    document.body.classList.remove('skeleton-fade-out');
    document.body.classList.add('body-fade-in');
    await sleep(300);
    document.body.classList.remove('body-fade-in');
 }, false);
}

// |__________________________________________________________________________________________| //
// | When the screen width is less than 600px the asynchronous function 'GetNavHeight()' gets | //
// | called. This is done with async because the collapsed nav bar have to be loaded in order | //
// | for the full height to be registered - default wait time is set to 100ms but if this     | //
// | needs to be a higher value depending on client/browser needs further testing.            | //
let resized = false;
let media600 = window.matchMedia("(max-width: 600px)");
window.addEventListener('resize', function(){
    if (media600.matches && !resized){
        resized = true;
        GetNavHeight();
    } else if(media600.matches){
        if(document.getElementById('pingu-nav').classList.contains('nav-collapse')){
            document.getElementById('pingu-nav').classList.add('nav-hide');
        }
    }
});
media600.matches = GetNavHeight();

// |__________________________________________________________________________________________| //
// | The 'GetNavHeight()' function also adds the class 'nav-hide' to the navbar which sets    | //
// | the opacity to 0. This is done to prevent the navbar to show and flicker when the page   | //
// | is loaded.                                                                               | //
async function GetNavHeight(){
    var navExists = document.getElementById('pingu-nav');
    if(navExists){
        if(document.getElementById('pingu-nav').classList.contains('nav-collapse')){
            document.getElementById('pingu-nav').classList.add('nav-hide');
        }
        for(i = 0; i < 10; i++){
            await sleep(100);
            var navheight = document.getElementById("pingu-nav").offsetHeight + 'px';
            document.documentElement.style.setProperty('--pl-nav-height', navheight);
        };
    };
}

// |__________________________________________________________________________________________| //
// | This function calculates the amount of pixels the body will get pushed down when navbar  | //
// | is toggled and then sets the variable '--nav-height' to be equal to the total height of  | //
// | the navbar.                                                                              | //
var navToggleExists = document.getElementById('navtoggler');
if(navToggleExists){
    document.getElementById("navtoggler").addEventListener('click', async function(){   
        var navheight = document.getElementById("pingu-nav").offsetHeight + 'px';
        document.documentElement.style.setProperty('--pl-nav-height', navheight);
        console.log(navheight);
        document.body.classList.toggle('pushed');
        document.getElementById('pingu-nav').classList.toggle('nav-collapse');
        document.getElementById('pingu-nav').classList.toggle('nav-show');
        document.getElementById('pingu-nav').classList.remove('nav-hide');
        //adding animation to nav-toggle
        document.getElementById('navtoggle').classList.toggle('nav-toggle-open');
        // hiding overflow-Y to prevent flickering when nav goes back up 
        if(document.getElementById('pingu-nav').classList.contains('nav-show')){
            document.body.style.overflowY = 'hidden';
        } else{
            document.body.style.overflowY = 'auto';
        }
    });
}

// |__________________________________________________________________________________________| //
// | This function is called when the client uses a phone or other touch devide and swipes    | //
// | down within the 'pingu-swipe-area'. The function opens the nav-bar when screen width is  | //
// | less than 600px.                                                                         | //
var navExists = document.getElementById('pingu-nav');
if(navExists){
    async function SwipeDownNav(){
        // calculating the amount of pixels content will be pushed
        var navheight = document.getElementById("pingu-nav").offsetHeight + 'px';
        document.documentElement.style.setProperty('--pl-nav-height', navheight);
        // adding the pushed class
        document.body.classList.add('pushed');
        // adding the 'nav-show' class
        // since a down swipe only should open the menu 'classlist.add' is used here
        document.getElementById('pingu-nav').classList.remove('nav-collapse');
        document.getElementById('pingu-nav').classList.add('nav-show');
        document.getElementById('pingu-nav').classList.remove('nav-hide');
        //adding animation to nav-toggle
        document.getElementById('navtoggle').classList.add('nav-toggle-open');
        // hiding overflow-Y to prevent flickering when nav goes back up 
        document.body.style.overflowY = 'hidden';
    };

// |__________________________________________________________________________________________| //
// | This function is called when the client uses a phone or other touch devide and swipes    | //
// | up within the 'pingu-swipe-area'. The function closes the nav-bar when screen width is   | //
// | less than 600px.                                                                         | //
    async function SwipeUpNav(){

        // removing the 'nav-show' class
        // since a up swipe only should close the menu 'classlist.remove' is used here
        document.getElementById('pingu-nav').classList.remove('nav-show');
        // removing the pushed class
        document.body.classList.remove('pushed');
        document.getElementById('pingu-nav').classList.add('nav-collapse');
        //removing animation from nav-toggle
        document.getElementById('navtoggle').classList.remove('nav-toggle-open');
        await sleep(100);
        // waiting for nav to start going up and then re enabling overflow-Y 
        document.body.style.overflowY = 'auto';
    };
};

// |__________________________________________________________________________________________| //
// | This section is where the touch events are registered from the 'pingu-swipe-area' class  | //
// | and the functions for each swipe is called.                                              | //
var swipeAreaExists = document.querySelector('.pingu-swipe-area');
if(swipeAreaExists){
    document.querySelectorAll('.pingu-swipe-area').forEach(swipearea => {
        swipearea.addEventListener('touchstart', handleTouchStart, false);
        swipearea.addEventListener('touchmove', handleTouchMove, false);
    });
}

var xDown = null;
var yDown = null;

function getTouches(evt){
    return evt.touches; /* ||             // browser API
           evt.originalEvent.touches;  // jQuery */
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if (xDiff > 0 ) {
            /* left swipe */
        } else {
            /* right swipe */
        }
    } else{
        if ( yDiff > 0 ) {
            /*up swipe*/
            SwipeUpNav();
        } else {
            if(yDiff < 0){
                /*down swipe*/
                SwipeDownNav();
            }
        }
    }

    xDown = null;
    yDown = null;
};
// |__________________________________________________________________________________________| //
// |                               Slider Gradient section                                    | //
// |__________________________________________________________________________________________| //
var sliderExists = document.querySelector('.pingu-slider');
if(sliderExists){
    var slider = document.querySelectorAll('.pingu-slider').forEach(s => {
        var value = (s.value-s.min)/(s.max-s.min)*100
        s.style.background = 'linear-gradient(to right, #e9a0a0 0%, #e9a0a0 ' + value + '%, #fce0e0 ' + value + '%, #fce0e0 100%)';
        // Slider Label Value
        if(s.previousElementSibling.nodeName == 'LABEL'){
            if(s.previousElementSibling.childNodes[1].id == 'pingu-slider-value'){
                s.previousElementSibling.childNodes[1].innerHTML = s.value;
            };
        };
        s.addEventListener('input', UpdateSlider);
    });
    // Function to update slider gradient dynamically
    function UpdateSlider() {
        var value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #e9a0a0 0%, #e9a0a0 ' + value + '%, #fce0e0 ' + value + '%, #fce0e0 100%)';
        // Update Slider Label Value
        if(this.previousElementSibling.nodeName == 'LABEL'){
            if(this.previousElementSibling.childNodes[1].id == 'pingu-slider-value'){
                this.previousElementSibling.childNodes[1].innerHTML = this.value;
            };
        };
    };
}