






var mybtnll = document.getElementById("cl"),
    myulll = document.getElementById("ul");
    mybtnll.onclick = function() {
        if(myulll.style.display == "inline-block"){
            myulll.style.display = "none";
        }else{
            myulll.style.display = "inline-block";  
        }
    };
    var mybtnkk = document.getElementById("fhg"),
    myulkk = document.getElementById("model");
    mybtnkk.onclick = function() {
        if(myulkk.style.display == "inline-block")
        {
            myulkk.style.display = "none";
        }else{
            myulkk.style.display = "inline-block";
        }
    };

var close = document.getElementById("close")
    close.onclick = function(){
        model.style.display = "none";
    };

window.addEventListener("scroll" , function() {
    if(window.scrollY > 150){
        document.querySelector(".header").style.opacity = 0.7 ;
    }else{
        document.querySelector(".header").style.opacity = 1 ; 
    }
});

var i = 0;
var autoSlider= document.getElementsByClassName('slider')

function autoSlider() {

}
