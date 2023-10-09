var leftArr = document.querySelector("#carousel-controls #left-arrow");
var rightArr = document.querySelector("#carousel-controls #right-arrow");
var menuMobile = document.querySelector("#mobile-menu");
var closeMobile = document.querySelector("#mobile-close");


function moveSlide(event){
    var imgSlides = document.querySelectorAll("#carousel > div");
    var copySlides = document.querySelectorAll("#right-section .slide");

    for(var i=0; i < imgSlides.length; i++ ){
        var classAttr = imgSlides[i].getAttribute("class");
        
        if (classAttr.includes("active")) {
            if (event.target.id === "right-arrow" && (i+1)<imgSlides.length)
            {

                imgSlides[i].classList.remove("active");
                imgSlides[i].classList.add("disabled");
                imgSlides[i+1].classList.remove("disabled");
                imgSlides[i+1].classList.add("active");
                copySlides[i].classList.remove("active");
                copySlides[i].classList.add("disabled");
                copySlides[i+1].classList.remove("disabled");
                copySlides[i+1].classList.add("active");
                break;
            }else if (event.target.id === "right-arrow" && (i+1)===imgSlides.length){
                imgSlides[i].classList.remove("active");
                imgSlides[i].classList.add("disabled");
                imgSlides[0].classList.remove("disabled");
                imgSlides[0].classList.add("active");
                copySlides[i].classList.remove("active");
                copySlides[i].classList.add("disabled");
                copySlides[0].classList.remove("disabled");
                copySlides[0].classList.add("active");
                break;
            }else if (event.target.id === "left-arrow" && (i-1)>=0){
                imgSlides[i].classList.remove("active");
                imgSlides[i].classList.add("disabled");
                imgSlides[i-1].classList.remove("disabled");
                imgSlides[i-1].classList.add("active");
                copySlides[i].classList.remove("active");
                copySlides[i].classList.add("disabled");
                copySlides[i-1].classList.remove("disabled");
                copySlides[i-1].classList.add("active");
                break
            }else if (event.target.id === "left-arrow" && (i-1)<0){
                imgSlides[i].classList.remove("active");
                imgSlides[i].classList.add("disabled");
                imgSlides[2].classList.remove("disabled");
                imgSlides[2].classList.add("active");
                copySlides[i].classList.remove("active");
                copySlides[i].classList.add("disabled");
                copySlides[2].classList.remove("disabled");
                copySlides[2].classList.add("active");
                break;
            }
        }
    }
}

function triggerMoveSLide(event){
    const eventEnter = new KeyboardEvent('keydown', {
        key: 'Enter',
        code: 'Enter',
        which: 13,
        keyCode: 13,
      });

    if (event.key === "Enter"){
        moveSlide(event);
    } else if (event.key === "ArrowLeft"){
        leftArr.focus(); 
          // dispatch the event on some DOM element
        leftArr.dispatchEvent(eventEnter);
    } else if (event.key === "ArrowRight"){
        rightArr.focus(); 
          // dispatch the event on some DOM element
        rightArr.dispatchEvent(eventEnter);
    }
}

function openMenuMobile(){
    var navigation = document.querySelector("nav");
    navigation.style.backgroundColor = "hsl(0, 0%, 100%)";
    navigation.style.zIndex = "2";
    document.querySelector("nav > #nav-brand").classList.add("hide");
    document.querySelector("nav > #menu").classList.add("show")
    document.querySelector("#mobile-overlay").classList.add("layer")
}

function closeMenuMobile(){
    var navigation = document.querySelector("nav");
    navigation.style.backgroundColor = "unset";
    navigation.style.zIndex = "1";
    document.querySelector("nav > #nav-brand").classList.remove("hide");
    document.querySelector("nav > #menu").classList.remove("show");
    document.querySelector("#mobile-overlay").classList.remove("layer")
}


leftArr.addEventListener("onmousedown", moveSlide);
rightArr.addEventListener("onmousedown", moveSlide);
leftArr.addEventListener("onkeydown", triggerMoveSLide);
rightArr.addEventListener("onkeydown", triggerMoveSLide);

menuMobile.addEventListener("click", openMenuMobile)
closeMobile.addEventListener("click", closeMenuMobile)