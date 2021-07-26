$(".change").on("click", function() {
    if ($("body").hasClass("dark-vertion")) {
        $("body").removeClass("dark-vertion");
        $(".change").text("OFF");

        $("body").addClass("white-vertion");
    } else {
        $("body").addClass("dark-vertion");

        $("body").removeClass("white-vertion");
        $(".change").text("ON");
    }
});