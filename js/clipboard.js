function CopyClipboard(x) {
    /* Get the text field */
    if(x==1){
        var copyText = document.getElementById("pingu-clip");
    }
    if(x==2){
        var copyText = document.getElementById("pingu-clip-1");
    }
    
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }