//responsive
/*const responsive = [
    { breakPoint: { width: 0, item: 1 } },
    { breakPoint: { width: 991, item: 2 } }
]

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            itemPerSlide = responsive[i].breakPoint.item;
        }
        console.log(itemPerSlide)
    }
}
window.onload = load();*/

//header
window.onscroll = function() {
    console.log(document.documentElement.scrollTop);
    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

//navbar

const navbar = document.querySelector(".navbar");
a = navbar.querySelector("a");
a.foreach(function(element) {
    element.addEventListener("click", function() {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active")
    })
})