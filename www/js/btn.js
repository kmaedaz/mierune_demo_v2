// ボタンハイライト設定JS

function setBtnAnim() {
	// ボタンタップ開始時、終了時にアニメーションクラスを与える
	$('.btn_tap_anim' ).bind('touchstart mousedown',	function() { $(this).addClass('btn_tap_anim_on');
            	console.log("setBtnAnim");
    });

    $('.btn_tap_anim').bind('touchmove touchend mouseup mouseout',	function() {
        $(this).removeClass('btn_tap_anim_on');
                console.log("btn_tap_anim_on");

        });


}




function buttonAnim(v) {
$(v).addClass('btn_tap_anim_on');
   console.log("buttonAnim"+v);
    $(v).css("transform: scale(0.95)");
    setTimeout(	function (){
    $(v).css("transform: scale(1.0)");
    } , 3000);

}
