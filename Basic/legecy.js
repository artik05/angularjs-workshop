var ele = document.getElementById("title");

if(ele){    
    var html = "";
    for(var i = 0; i< 5 ; i++){
        html = html + "<br /><span>" + i + "-Arti</span>"
    }

    ele.innerHTML = html;
}

function updateTitle(){
    var textEl = document.getElementById("sampleTitle"); /// reading data on keyup

    if(textEl){
        ele.innerHTML = textEl.value; // setting title
    }
}