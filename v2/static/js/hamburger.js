elem = document.getElementsByClassName("my_trigger")[0]
elem.addEventListener("click", (event) => {
    if (document.getElementsByClassName("hamburger")[0].classList.contains('is-active')) {
        document.getElementsByClassName("hamburger")[0].classList.remove("hamburger--collapse-r");
        document.getElementsByClassName("hamburger")[0].classList.remove("is-active");
        document.getElementsByClassName("leftpart")[0].classList.remove("active");
    } else {
        document.getElementsByClassName("hamburger")[0].classList.add("hamburger--collapse-r");
        document.getElementsByClassName("hamburger")[0].classList.add("is-active");
        document.getElementsByClassName("leftpart")[0].classList.add("active");
    }

});