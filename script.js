
const editor = document.getElementById("editorId");
const btnBold = document.getElementById("btnBold");
const btnItalic = document.getElementById("btnItalic");
const btnUnderline = document.getElementById("btnUnderline");
const selector = document.getElementById("selector")
const color = document.getElementById("color");
const font = document.getElementById("font");
const fontSize = document.getElementById("sizeFont");

let sizeFont = new Array(10);
let fontList =[
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive"
] 


function init()
{

    let index = 0;
    for(let i = 1; i<10; i++ )
    {
        sizeFont[index] = i;
        index++;
    }
    fontList.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        font.appendChild(option);
    });

  

    sizeFont.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontSize.appendChild(option);
    });
}


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
font.addEventListener("change", function(){
    document.execCommand("fontName",false, this.value);
})

fontSize.addEventListener("change", function(){
    document.execCommand("fontSize",false, this.value);
})

function formatText(command, value)
{
    document.execCommand(command, false, value);
    
}

init();