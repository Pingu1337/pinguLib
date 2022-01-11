
function ToggleShow(x){
    if(x==1){
        var btn1 = document.querySelector("#b1");
        var btn2 = document.querySelector("#b2");
    }
    if(x==2){
        var btn1 = document.querySelector("#b2");
        var btn2 = document.querySelector("#b1");
    }

    btn1.classList.add("toggle-show");
    btn2.classList.remove("toggle-show");
}