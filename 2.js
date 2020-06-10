let c=0;
let timer_is_on = 0;
let remove=[39,78,41,80,121,160,199,119,158,201,240,279,318,281,320,238];
let flag=true;
$(document).ready(function(){
	
	for(i=0;i<180;i++){
		$(".main").append("<div class='track'></div>")
	}
	$(".track").append("<div class='border'></div><div class='tarmak'></div><div class='border'></div>");
	
	for(i=0;i<179;i++){
		$(".tarmak").eq(i).text(i+1)
	}
	for(i=0;i<360;i++){
		$(".border").eq(i).addClass("b"+i)
	}
	for(i=0;i<remove.length;i++){
		$(".border").eq(remove[i]).css({"visibility":"hidden"});
	}
		for(i=0;i<179;i++){
		if(flag){
			$(".tarmak").eq(i).text(i+1).css("background-color","inherit").addClass("t"+i);
			$(".tarmak").eq(i).css("font-size","22px");
			if((i+1)%20===0){
				flag=false;
				continue;
			}
			j=i+21;
		}
		if(!flag){
			$(".tarmak").eq(j).text(i+1).css("background-color","inherit").addClass("t"+i);
			$(".tarmak").eq(i).css("font-size","22px");
			j--
			if((i+1)%20===0){
				flag=true;
				continue;
			}
		}

	}
	for(i=0;i<8;i++){
		if(i%4===0 || i%4===1){
			$(".tarmak").eq(179).append("<div class='black'></div>");
			$(".tarmak").eq(179).append("<div class='white'></div>");
		}
		if(i%4===2 || i%4===3){
			$(".tarmak").eq(179).append("<div class='white'></div>");
			$(".tarmak").eq(179).append("<div class='black'></div>");
		}
		
	}

	changeColor();

	
})
function changeColor(){
	if(c%2===0){
		for(i=0;i<369;i++){
			if(i%4===0 || i%4===1){
				$(".border").eq(i).removeClass("blue").addClass("red");
			}
			if(i%4===2 || i%4===3){
				$(".border").eq(i).removeClass("red").addClass("blue");
			}
		
		}
	}
	if(c%2===1){
		for(i=0;i<360;i++){
			if(i%4===0 || i%4===1){

				$(".border").eq(i).removeClass("red").addClass("blue");
			}
			if(i%4===2 || i%4===3){
				$(".border").eq(i).removeClass("blue").addClass("red");
			}
		
		}
	}
	c++

	setTimeout(changeColor,600);
}


