$(function(){

    $('#wrap #right .contbox > *').click(function(){
        $('.contactmepage').hide()
        $('.glitch-wrapper').hide()

        let idx = $(this).index()
        $('.video > *').hide()
        $('.video > *').eq(idx).fadeIn()
        $('.description > *').eq(idx).fadeIn().siblings().fadeOut()

        if(idx == 3 || idx == 4){
            $('.description > *').hide()

            if($(window).width() <426) {
                $('.video').css({
                    height : '430px'
                })
                $('#wrap').css({
                    height : 'auto'
                    // height : '100vh'
                })
            }
        }else {
            $('.video').css({
                height : '100%'
            })
            $('#wrap').css({
                height : '100vh'
            })
        }

    })
})