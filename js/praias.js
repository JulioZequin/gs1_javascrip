let conta = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000);

function nextImage(){
    conta++;

    if(conta > 4){
        conta = 1;
    }

    document.getElementById("radio" + conta).checked = true;
}