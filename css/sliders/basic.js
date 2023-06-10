let counter = 0;
let data = ["img1.jpg","img2.jpg","img3.jpg"]

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function slideNext(){
    if(counter < data.length){
       document.slide.src = data[counter];   
       counter += 1;
    } else {
        counter = 0;
    }
}




function slidePrev(){
    if(counter === 0){
       counter += data.length;
       counter--;
       document.slide.src = data[counter];   
    } else {
        counter--;
    }
}





prev.addEventListener("click",function(){
  counter--;
  slidePrev();
});

next.addEventListener("click",slideNext);

