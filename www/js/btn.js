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

    $('a' ).bind('touchstart mousedown',	function() { $(this).addClass('btn_tap_anim_on');
            	console.log("setBtnAnim");
    });

    $('a').bind('touchmove touchend mouseup mouseout',	function() {
        $(this).removeClass('btn_tap_anim_on');
                console.log("btn_tap_anim_on");

        });




}

