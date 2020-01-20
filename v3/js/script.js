jQuery(document).ready(function($){
    $('body img').on('click',function(){              
        var imgSrc = $(this).attr('src');             
        $("html").append("<div class='overlay'><div><img src='"+imgSrc+"'></div></div>");
    });
    $(document).on('click', '.overlay', function () {
        $('div.overlay').remove();
    });
});

$(document).ready(function() {
    $("img").load(function() {
        var height = $(this).height(),
            width = $(this).width();
        if (height < width) {
            $(this).addClass('l');
        }else {
            $(this).addClass('p');
        }
    });
});