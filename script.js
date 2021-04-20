(function () {
    var arrow = document.getElementById("information-link");
    arrow.addEventListener("click", clickHandler);

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        console.log(href)
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
})();