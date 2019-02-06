$(function() {
    "use strict";

    // Тестируем, что js-скрипты попали в сборку.
    const logger = (word = "Hi,") => {
        console.log(word, "🤨!!!", "\nThank you for using this template!😎");
    };
    logger();

    // Метод переключающий текст в блоках.
    $.fn.extend({
        toggleText: function(a, b){
            return this.text(this.text() == b ? a : b);
        }
    });

    // Функция меняющая текст и его цвет, в заголовке упаковки.
    function change_text(target) {
        if($(target).hasClass("funbox__item_active") && !~$(target).text().indexOf('Котэ не одобряет?')) {
            $(target).find(".funbox__heading1").addClass("funbox__heading1_active");
            $(target).find(".funbox__heading1").text("Котэ не одобряет?");
        }
    }

    // Делаем упаковки активными, при клике на нее(них).
    $(".funbox__item").on({
        mousedown: function () {
            let parent = $(this).closest(".funbox__item-main");

            $(this).toggleClass("funbox__item_active");
            /*$(".funbox__item").on("mouseenter",function(){
             $(this).toggleClass("funbox__item_active");
             });*/
            $(this).find(".funbox__weight").toggleClass("funbox__weight_active");

            $(parent).find(".funbox__text-first").toggleClass("funbox__text_hide");
            $(parent).find(".funbox__text-two").toggleClass("funbox__text_hide");

            $(this).find(".funbox__heading1").removeClass("funbox__heading1_active").text("Сказочное заморское яство");

        },
        mouseup: function () {
            //$(".funbox__item").off("mouseenter");
        }
    });

    // Делаем упаковки активными, при клике по ссылке "Купи".
    $(".funbox__link").on( "click", function(event) {
        event.preventDefault();

        let parent = $(this).closest(".funbox__item-main");

        $(parent).find(".funbox__item").toggleClass("funbox__item_active");
        $(parent).find(".funbox__weight").toggleClass("funbox__weight_active");

        $(parent).find(".funbox__text-first").toggleClass("funbox__text_hide");
        $(parent).find(".funbox__text-two").toggleClass("funbox__text_hide");

        $(parent).find(".funbox__heading1").removeClass("funbox__heading1_active").text("Сказочное заморское яство");
        $(this).find(".funbox__heading1").removeClass("funbox__heading1_active");

    });


    // При отведении мышки от выбранной упаковки, меняем текст в заголовке. И цвет данного текста.
    $( ".funbox__item" ).on({
        mouseleave: function(){
            let _self = this;
            setTimeout(function(){
                change_text(_self);
            }, 100);
        }
    });

    // При клике по ссылке "Но можно проверить" под третьей упаковкой убираем ее неактивность. И удаляем указанную ссылку.
    $(".funbox__link-switch").on( "click", function(event) {
        event.preventDefault();

        let parent = $(this).closest(".funbox__item-main");

        $(parent).find(".funbox__item").removeClass("funbox__item_disabled");
        $(parent).find(".funbox__item-inner").removeClass("funbox__item-inner_disabled");
        $(parent).find(".funbox__heading1").removeClass("funbox__heading1_disabled");
        $(parent).find(".funbox__heading2").removeClass("funbox__heading2_disabled");
        $(parent).find(".funbox__heading3").removeClass("funbox__heading3_disabled");
        $(parent).find(".funbox__description").removeClass("funbox__description_disabled");
        $(parent).find(".funbox__weight").removeClass("funbox__weight-disabled");

        $(parent).find(".funbox__text-disabled").detach();
        $(parent).find(".funbox__text-first").removeClass("funbox__text_hide");

        $(parent).find(".funbox__heading1").removeClass("funbox__heading1_active").text("Сказочное заморское яство");
        $(this).find(".funbox__heading1").removeClass("funbox__heading1_active");

        $(this).detach();
    });

});