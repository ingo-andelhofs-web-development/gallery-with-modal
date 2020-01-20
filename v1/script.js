jQuery(document).ready(function($){
    $('body img').on('click',function(){              
        var imgSrc = $(this).attr('src');             
        $("html").append("<div class='overlay'><div><img src='"+imgSrc+"'></div></div>");
    });
    $(document).on('click', '.overlay', function () {
        $('div.overlay').remove();
    });
});