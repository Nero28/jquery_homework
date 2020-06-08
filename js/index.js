$(document).ready(function () {
    $('.main_btna').on('click', function () {
        $('.overlay').fadeToggle('slow'),
            $('.modal').slideToggle('slow');
    });

    $('.main_btn').on('click', function () {
        $('.overlay').fadeToggle('slow'),
            $('.modal').slideToggle('slow');
    });

    $('.main_nav:first').on('click', function () {
        $('.overlay').fadeToggle('slow'),
            $('.modal').slideToggle('slow');
    });
    $('.close').on('click', function () {
        $('.overlay').fadeToggle('slow'),
            $('.modal').slideToggle('slow');
    });

});