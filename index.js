$("#family").blur(function () {
    if ($("#family").val() != '') {
        $("#family").css({ "border": "0.5px solid #FF0000;" });
    }
});