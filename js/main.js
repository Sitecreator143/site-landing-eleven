window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs__item"),
        playBtn = document.querySelector("#playVideo"),
        video = document.querySelector("#video");
    playBtn.addEventListener('click', function() {
        video.play();
        video.setAttribute('controls', 'controls');
        playBtn.style.display = "none";
    });
    video.addEventListener('ended', function() {
        this.src = this.src;
        playBtn.style.display = "block";
        video.removeAttribute('controls');
    })
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            tabs.forEach(otherItem => {
                if (otherItem.classList.contains("tabs__item__active")) {
                    otherItem.classList.remove("tabs__item__active");
                }
            })
            elem.classList.add("tabs__item__active")
        });
    });
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="slider__arrow slider__prev"><i class="fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider__arrow slider__next"><i class="fas fa-chevron-right"></i></div>',
    });
    /*     Скрипт замены стиля для попап: */
    $('#buyNowBtn').on('click', popupOpen);
    $('#tryForFreeBtn').on('click', popupOpen);
    $('.popup__close').on('click', () => {
        $('.popup').removeClass('popup__active');
        $('body').css('overflow', 'visible');
    })
    function popupOpen() {
        $('.popup').addClass('popup__active');
        $('.popup__done').hide();
        $('.popup__wrap').show();
        $('body').css('overflow', 'hidden');
    }
    /*     Скрипт плавной прокрутки: https://smartlanding.biz/skript-plavnoj-prokrutki.html */
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
    /*     Форма */
    $('.form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "form.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('form').trigger('reset');
            $('.popup').addClass('popup__active');
            $('.popup__wrap').hide();
            $('.popup__done').show();
        });
        return false;
    });
});

