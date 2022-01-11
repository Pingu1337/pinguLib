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
    if(document.getElementById('pingu-nav').classList.contains('nav-collapse')){
        document.getElementById('pingu-nav').classList.add('nav-hide');
    }
    await sleep(100);
    var navheight = document.getElementById("pingu-nav").offsetHeight + 'px';
    document.documentElement.style.setProperty('--nav-height', navheight);
    console.log('init:'+navheight);
    }

// |__________________________________________________________________________________________| //
// | This function calculates the amount of pixels the body will get pushed down when navbar  | //
// | is toggled and then sets the variable '--nav-height' to be equal to the total height of  | //
// | the navbar.                                                                              | //
document.getElementById("navtoggler").addEventListener('click', async function(){   
    var navheight = document.getElementById("pingu-nav").offsetHeight + 'px';
    document.documentElement.style.setProperty('--nav-height', navheight);
    console.log(navheight);
    document.body.classList.toggle('pushed');
    document.getElementById('pingu-nav').classList.toggle('nav-collapse');
    document.getElementById('pingu-nav').classList.toggle('nav-show');
    document.getElementById('pingu-nav').classList.remove('nav-hide');    
    // hiding overflow-Y to prevent flickering when nav goes back up 
    if(document.getElementById('pingu-nav').classList.contains('nav-show')){
        document.body.style.overflowY = 'hidden';
    } else{
        document.body.style.overflowY = 'auto';
    }
});

// |__________________________________________________________________________________________| //
// | This function is called when the client uses a phone or other touch devide and swipes    | //
// | down within the 'pingu-swipe-area'. The function opens the nav-bar when screen width is  | //
// | less than 600px.                                                                         | //
async function SwipeDownNav(){
    // calculating the amount of pixels content will be pushed
    var navheight = document.getElementById("pingu-nav").offsetHeight + 'px';
    document.documentElement.style.setProperty('--nav-height', navheight);
    // adding the pushed class
    document.body.classList.add('pushed');
    // adding the 'nav-show' class
    // since a down swipe only should open the menu 'classlist.add' is used here
    document.getElementById('pingu-nav').classList.remove('nav-collapse');
    document.getElementById('pingu-nav').classList.add('nav-show');
    document.getElementById('pingu-nav').classList.remove('nav-hide');
    // hiding overflow-Y to prevent flickering when nav goes back up 
    document.body.style.overflowY = 'hidden';
}

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
    await sleep(100);
    // waiting for nav to start going up and then re enabling overflow-Y 
    document.body.style.overflowY = 'auto';
}

// |__________________________________________________________________________________________| //
// | This section is where the touch events are registered from the 'pingu-swipe-area' class  | //
// | and the functions for each swipe is called.                                              | //

 document.querySelectorAll('.pingu-swipe-area').forEach(swipearea => {
     swipearea.addEventListener('touchstart', handleTouchStart, false);
     swipearea.addEventListener('touchmove', handleTouchMove, false);
 })

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
            console.log('swiped left!')
        } else {
            /* right swipe */
            console.log('swiped right!')
        }
    } else{
        if ( yDiff > 0 ) {
            SwipeUpNav();
            console.log('up swide detected! - yDiff:' + yDiff)
        } else {
            if(yDiff <= -10){
                SwipeDownNav();
            }
            console.log('down swide detected! - yDiff:' + yDiff)
        }
    }

    xDown = null;
    yDown = null;
};
