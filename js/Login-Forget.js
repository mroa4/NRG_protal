

var cta = $("button");
var containerFront = $(".card--front");
var containerBack = $(".card--back");
var hideFront = "hide-front";
var showBack = "show-back";

cta.click(() => {
    if (containerFront.hasClass(hideFront)) {
        containerFront.removeClass(hideFront);
        containerBack.removeClass(showBack);
    } else {
        containerFront.addClass(hideFront);
        containerBack.addClass(showBack);
    }
});