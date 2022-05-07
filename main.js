var index = 0;
show_image (index);

function show_image(i){
    index += i;

    var images = document.getElementsByClassName('number_3');
    var dots = document.getElementsByClassName('dot');
 for ( i = 0; i < images.length; i++) 
     images[i].style.display = "none";

     for( i=0; i < dots.length; i++)
     dots[i].className = dots[i].className.replace("active", " ");

     if (index > images.length -1) 
        index = 0;

     if (index < 0)
     index = images.length -1;

     images[index].style.display = "block";
     dots [index].className += "active";

}

 var text = document.querySelector(".fency");
 var strText = text.textContent;
 var splitText = strText.split("");
 text.textContent = "";
 for (let i = 0; i < splitText.length; i++) {
 text.innerHTML += "<span>"  + splitText[i] + "</span>";

 }

 var char = 0;
 var timer = setInterval(onTick , 50);

 function onTick() {
    var span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
       complete();
       return;
       
    }
 }
 function complete() {
    clearInterval(timer);
    timer = null;

 }
function test(){
   document.location.href ="https://myeldesign.com/pages/create-your-personalized-ring";

}
function test(){
   document.location.href ="https://myeldesign.com/collections/all-necklaces";

}
function test(){
   document.location.href ="https://myeldesign.com/collections/all-earrings";

}
