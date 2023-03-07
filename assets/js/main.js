


window.onscroll =function(e){
    var scroll =window.pageYOffset;
    if(scroll>50){
        document.getElementById("navigation").style.setProperty("background","black","important");
    }
    else{
        document.getElementById("navigation").style.setProperty("background","rgba(0,0 ,0 ,0)","important");
    }
}