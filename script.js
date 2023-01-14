var rotation = 0;
function rotateimage(){
    rotation += 180;
    if(rotation === 360){
        rotation = 0;
    }
    document.querySelector("#arrowup").style.transform = `rotate(${rotation}deg)`;
}


var rotation = 0;
function rotateimageone(){
    rotation +=180;
    if(rotation === 360){
        rotation = 0;
    }
    document.getElementById("arrowupone").style.transform =`rotate(${rotation}deg)`;
}



var rotation = 0;
function rotateimagetwo(){
    rotation += 180;
    if(rotation === 360){
        rotation = 0;
    }
    document.getElementById("arrowuptwo").style.transform = `rotate(${rotation}deg)`;
}


var rotation = 0;
function rotateimagethree(){
    rotation += 180;
    if(rotation === 360){
        rotation = 0;
    }
    document.getElementById("arrowupthree").style.transform = `rotate(${rotation}deg)`;
}


var rotation = 0;
function rotateimagefour(){
    rotation += 180;
    if(rotation === 360){
        rotation = 0;
    }
    document.getElementById("arrowupfour").style.transform = `rotate(${rotation}deg)`;
}

var rotation = 0;
function rotateimagefive(){
    rotation += 180;
    if(rotation === 360){
        rotation = 0;
    }
    document.getElementById("arrowupfive").style.transform = `rotate(${rotation}deg)`;
}

function show(){
    var x = document.getElementById("hidden");
    if(x.style.display === "block"){
        x.style.display = "none"
    }else{
        x.style.display = "block";
    }
}

function showone(){
    var x = document.getElementById("mob-hidden");
    if(x.style.display === "block"){
        x.style.display = "none"
    }else{
        x.style.display = "block";
    }
}




// mobile 
function abc(){
  document.getElementById("show").classList.toggle("show-bar")
  document.getElementById("lines").style.display= "none";
}
function xyz(){
    document.getElementById("show").classList.toggle("show-bar")
    document.getElementById("lines").style.display= "block"
}
