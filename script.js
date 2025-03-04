
const editor = document.getElementById("editorId");
const btnBold = document.getElementById("btnBold");
const btnItalic = document.getElementById("btnItalic");
const btnUnderline = document.getElementById("btnUnderline");

btnBold.addEventListener("click", function(){
    if(editor.style.fontWeight!="bold"){
        
            editor.style.fontWeight = "bold";
    }else{
        editor.style.fontWeight = "";
    }
});

btnItalic.addEventListener("click", function(){
    if( editor.style.fontStyle != "italic"){
        editor.style.fontStyle = "italic";
    }else{
         editor.style.fontStyle = ""
    }
});
btnUnderline.addEventListener("click", function() {
    if(editor.style.textDecoration != "underline"){
        editor.style.textDecoration = "underline";
    }else{
        editor.style.textDecoration = "";
    }
});



function formatText(command)
{
    editor.style.fontWeight=command;
    
}