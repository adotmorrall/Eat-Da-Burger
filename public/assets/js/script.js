$(document).ready(function () {
    $('.devoour-form').on('submit', function (event) {
        event.preventdefault();
        var burger_id = $(this).children('.burger_id').val();
        $.ajax({
            method: 'PUT',
            url: '/burgers/' + burger_id
        }).then(function (data) {
            location.reload()
        });
    })

    $('#text-center-button').click(function (event) {
        event.preventdefault();

        var burger_name = $('#enter_text').val();

        $.ajax({
            method: 'POST',
            url: '/burgers/create',
            data: { burger_name }
        }).then(function (data) {
            location.reload();
        });
    });
});