// Business Logic

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

// User interface

$(".button-collapse").sideNav();

$(".navLink").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});