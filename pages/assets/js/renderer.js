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
    // vNavToggle.addEventListener('mouseleave', function(){
    //     if(vSection){
    //         if(vNav){
    //             vSection.classList.remove('pingu-vertical-show');
    //             vNav.classList.remove('pingu-vertical-show');
    //         }
    //     }
    // });
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

