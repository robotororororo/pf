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
        }
    })
})