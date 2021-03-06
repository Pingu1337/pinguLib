function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function CopyClipboard(x) {
    if(x==1){
        var copyText = document.getElementById("pingu-clip");
        var copyButton = document.querySelector(".copy-btn1");
    }
    if(x==2){
        var copyText = document.getElementById("pingu-clip-1");
        var copyButton = document.querySelector(".copy-btn2");
    }
    if(x==3){
      var copyText = document.getElementById("css-clip");
      var copyButton = document.querySelector(".copy-btn-css");
    }

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    copyButton.classList.add("copied");
    copyButton.innerHTML = "<i class=\"fas fa-clipboard-check\" style=\"margin-right:25px;\"></i>Copied!"
    await sleep(3000);
    copyButton.classList.add("copiedback-pink");
    copyButton.classList.remove("copied");
    copyButton.innerHTML = "Copy To Clipboard"
    await sleep(1000);
    copyButton.classList.remove("copiedback-pink")
  }