$(function(){
    $('#main').fullpage({
        navigation:true,
        navigationPosition:'right',
        navigationTooltips:['accueil','presentation','photos:ambiance','couleurs','photos:studio','caracteristiques','contact'],
        showActiveTooltip:false,
        step:function(){
            //$(document).on('mousewheel',function(e){
            //    var ee= e.originalEvent.deltaY;
            //    if(ee=0){
            //     /*   $('.one').css({
            //            background:'url(../imgs/'+n+'.jpg)';
            //    })*/
            //    }
            //}
        }
    });


})