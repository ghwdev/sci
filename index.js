$(".introducao").click(function () { 
    $(".po").addClass("animate__animated animate__backOutUp");
    $(".explicacao").addClass("animate__animated animate__backInUp");
    $(".explicacao").css("display", "block");
});

$(".ex").click(function () { 
    $(".explicacao").removeClass("animate__animated animate__backinUp");
    $(".explicacao").addClass("animate__animated animate__backOutUp");
    $(".amostra").addClass("animate__animated animate__backInUp");
    $(".amostra").css("display", "block");
});
$(".cont").click(function(){
    $(".amostra").removeClass("animate__animated animate__backInUp");
    $(".amostra").addClass("animate__animated animate__backOutUp");
    $(".elements").addClass("animate__animated animate__backInUp")
    $(".elements").css("display", "block");
})
$("button").click(function(){
    var o = $("input").val()
    if(o == "0413"){
        $(".sen").addClass("pos")
    $(".po").removeClass("pos")}
})
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
});