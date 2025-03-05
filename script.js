
const editor = document.getElementById("editorId");
const btnBold = document.getElementById("btnBold");
const btnItalic = document.getElementById("btnItalic");
const btnUnderline = document.getElementById("btnUnderline");
const selector = document.getElementById("selector")
const color = document.getElementById("color");

btnBold.addEventListener("click", function(){
    if(editor.style.fontWeight!="bold"){
        
         formatText("bold");
    }else{
        editor.style.fontWeight = "";
    }
});

btnItalic.addEventListener("click", function(){
    if( editor.style.fontStyle != "italic"){
         formatText("italic");
    }else{
         editor.style.fontStyle = ""
    }
});
btnUnderline.addEventListener("click", function() {
    if(editor.style.textDecoration != "underline"){
         formatText("underline");
    }else{
        editor.style.textDecoration = "";
    }
});
color.addEventListener("input", function(){
    document.execCommand("foreColor", false, this.value);
})
selector.addEventListener("change", function(){
    document.execCommand("formatBlock", false, this.value);
})


function formatText(command, value)
{
    document.execCommand(command, false, value);
    
}