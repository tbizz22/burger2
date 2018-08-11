// burg.js

$("#bSubmit").on("click", function (event) {
    event.preventDefault();

    var newBurg = {
        burger: $("#newBurger").val().trim(),
        eaten: 0
    };

    $.ajax("/api/burger", {
        type: "POST",
        data: newBurg
    }).then(
        function () {
            console.log("Burger Added")
            location.reload();
        }
    );
});


$(".burgerButton").on("click", function (event) {
    event.preventDefault();


    var id = $(this).data("id");
    var prop = {
        eaten: 1
    };

    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: prop
    }).then(
        function () {
            console.log("burger " + id + "eaten");
            location.reload();
        }
    );
});