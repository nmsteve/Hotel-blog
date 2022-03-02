$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

$('#logIn-modal').click(function(){
$('#loginModal').modal('show');

});

$('.cancel-modal').click(function(){
$('#loginModal').modal('hide');

});

$('#reserve-modal').click(function(){
$('#ReserveModal').modal('show');

});

$('.cancel-modal').click(function(){
$('#ReserveModal').modal('hide');

});


