const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn");
function scroll_to_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if (window.pageYOffset > 50) { 
        const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn");
        scroll_to_top_btn.style.opacity = "1";
    }
    else if (window.pageYOffset < 50) { 
        const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn");
        scroll_to_top_btn.style.opacity = "0" ;
    }
};


const newImgList = [
    "images/slide_imgone.png",
    "images/slide_imgtwo.png"
];
function slide_time() {
    let num = Math.floor(Math.random() * newImgList.length)
    const slideImg = document.getElementById("slide-img")
    slideImg.setAttribute("src", newImgList[num])
}
setInterval(slide_time, 4200)
