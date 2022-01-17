function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


RenderPage();

const scriptSources = 
['https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/prism.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/plugins/autoloader/prism-autoloader.min.js'];

window.addEventListener('hashchange', async function(){
await RenderPage();
});


refreshJS = (src) => {
            let newSrc = src + '?version=' 
                        + new Date().getMilliseconds();
            return newSrc;
}


async function GetScripts(){
    
    for(i = 0; i < scriptSources.length; i++){
        const oldScript = document.querySelector(`script[src*="${scriptSources[i]}"]`);
        oldScript.remove();
        oldScript.re
        LoadScript(scriptSources[i]);
        };
    LoadSliders();
    LoadToggleSwitches();
};

var fourofour;

fetch('jshtml/pages/404.jshtm')
.then(response => response.text())
.then((data_404) =>{ fourofour = data_404});
  

function RenderPage(){
    var path = document.location.href;

    if(path.includes('#')){
        path = path.split('#');
    
        currPage = path[1];
    }
    else{
        currPage = 'index'
    }

    if(currPage == ''){
        currPage = 'index';
    }
    //log
    //console.log(currPage);
    //
    var jshtmlData;
    fetch('jshtml/pages/'+currPage+'.jshtm')
    .then(response => response.text())
    .then((data) => { 
        if(data.includes('<title>404 Not Found</title>')){
            jshtmlData = fourofour;
        }
        else{
            jshtmlData = data;
        }
    
    var element = document.createElement('div');
    element.setAttribute("id", "jsMain-content")
    element.innerHTML = jshtmlData;
    var Parent = document.getElementById('jsMain-content');
    var Child = document.getElementById('jsRenderRoot-Child');
    
    Parent.replaceWith(element, Child);
    Parent.onload = GetScripts();
    }); 
};

async function LoadScript(src){
    var script = document.createElement('script');
    script.onload = function () {
    //do stuff with the script
    };
script.src = src;
document.head.appendChild(script);
}


var menuBtn = document.querySelectorAll('.pl-nav-link')
var isToggled = false;
if(menuBtn){
    menuBtn.forEach((a) => {
        a.addEventListener("click", (e) => {
            menuBtn.forEach((el) => el.classList.remove("pl-nav-active"));
            a.classList.add("pl-nav-active");
        });
    });
};

var vSection = document.querySelector('.pingu-section');
var vNav = document.querySelector('.pingu-nav-vertical');
var vNavToggle = document.querySelector('.pingu-nav-vertical-toggle')
if(vNavToggle){


    vNavToggle.addEventListener('mouseenter', async function(){
        if(vSection){
            if(vNav){
                vSection.classList.add('pingu-vertical-show');
                vNav.classList.add('pingu-vertical-show');
                vNavToggle.classList.add('pingu-vertical-hide')
                await sleep(100);
                isToggled = true;

            }
        }
    });
    vNavToggle.addEventListener('touchend', async function(){
        if(vSection){
            if(vNav){
                vSection.classList.add('pingu-vertical-show');
                vNav.classList.add('pingu-vertical-show');
                vNavToggle.classList.add('pingu-vertical-hide')
                await sleep(200);
                isToggled = true;
            }
        }
    });
}
if(vSection){
    if(vNav){
        vSection.addEventListener('mouseenter', function(){
            if(vNavToggle){
                vNavToggle.classList.add('pingu-vertical-hide')
            }
        });
        vSection.addEventListener('mouseleave', function(){
            if(vNavToggle){
                vNavToggle.classList.remove('pingu-vertical-hide')
                vSection.classList.remove('pingu-vertical-show');
                vNav.classList.remove('pingu-vertical-show');
                
            }
        });
            window.addEventListener('click', function(){
                if(isToggled){
                    vNavToggle.classList.remove('pingu-vertical-hide')
                    vSection.classList.remove('pingu-vertical-show');
                    vNav.classList.remove('pingu-vertical-show');
                    isToggled = false;
                };
            });
    };
};

function CloseVertNav(){
    vNavToggle.classList.remove('pingu-vertical-hide')
    vSection.classList.remove('pingu-vertical-show');
    vNav.classList.remove('pingu-vertical-show');
    isToggled = false;
};


document.querySelector('.pl-nav-link').addEventListener("click", function() {
    CloseVertNav();
});




async function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.boxShadow = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tab-active";
    await sleep(10);
    var media600 = window.matchMedia("(max-width: 600px)");
    if(!media600.matches){
    if(tabName == 'GotJS'){
        document.getElementById(tabName).style.boxShadow = "inset .2rem -.2rem .2rem #e0e0e0";
    } else{
        document.getElementById(tabName).style.boxShadow = "inset -.2rem -.2rem .2rem #e0e0e0";
    }
}
};
