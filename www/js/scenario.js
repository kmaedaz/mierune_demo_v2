// This is a JavaScript file

// シナリオ実行
function scenario_play(scenario_arr){
    console.log(scenario_arr);
    if(!scenario_arr){
		return false;	
	}

    var com_tmp = scenario_arr.shift();
	var next_arr =scenario_arr;
    console.log("next"+next_arr);
    var n=10;
	var caommand =com_tmp.split(":");
	if(!caommand){
		return false;	
	}

	var key = caommand[1];
	var val = caommand[2];
    console.log(key);
    console.log(val);

        if(key=="WAIT")
        {
	        n = val;    
	        console.log("wait:"+n);
            setTimeout( function (){
                scenario_play(next_arr);
            } , n*1000);
        } else if(key=="HIDE") {
            console.log("HIDE"+val);
			$(key).hide();			
            setTimeout(    function (){
                scenario_play(next_arr);
            } , n);
        } else if(key=="SHOW") {
            console.log("SHOW"+val);
			$(val).show();			
            setTimeout(    function (){
            scenario_play(next_arr);
            } , n);
        } else if(key="IR_COMMAND"){
            console.log("COMMAND"+val);
            sendIRkit_command(val);
            setTimeout(    function (){
             scenario_play(next_arr);
            } , n);
        } else{
            console.error("err"+key);

        }


	return ;
}




// シナリオ実行
function scenario_exec(val){
	const max_command =40;
    var tmp= localStorage.getItem(val);
    var param;
    var param1;
    console.log(tmp);
    try {
        param=  JSON.parse(tmp);
        } catch (e) {
        console.error("erro");
            return false;
        }
        console.error(param);


	console.log(param.PARAM);
	var result1 = param.PARAM.split(",");
	console.log(result1);
    scenario_play(result1);
/*
	var scenario_arr={};
	for (var i = 0, len = result1.length; i < len; i++) {
		var result2 = result1[i].split(":");
		console.log(result2[1]);
		console.log(result2[2]);
		var hashItems = [];
		var hashItems = new Array();
		hashItems[result2[1]] =result2[2] ;
		scenario_arr[i]= hashItems;
	}
    console.log(scenario_arr);
*/
///    scenario_play(scenario_arr);
	return true;

}
