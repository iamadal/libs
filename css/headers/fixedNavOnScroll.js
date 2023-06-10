const navbar = document.querySelector(".navbar")

window.onscroll = fixedDiv;

function fixedDiv(){
    if( window.scrollY > navbar.offsetTop ){
    navbar.classList.add("fixedTop")
} else {
    navbar.classList.remove("fixedTop")
}

}


