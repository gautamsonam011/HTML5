function Myfuction(){
    var letters="87587usdjkdsf";
    var color="#"
    for (var i=0; i<6; i++){
        color+=letters[Math.floor(math.random()*16)];
    }
    return color;
}
document.body.style.background=getRandomColor();