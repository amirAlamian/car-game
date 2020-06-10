let i;
let persons=[];
let states=[];
let j;
flag=true;
let player=[];
let pace;
let x=document.getElementById('music');
let y=document.getElementById("music2");
let  a=0
let color=["purple","green","brown","gold","pink","orange","yellow","red","blue","lightgreen","gray","lightblue"];
$(document).ready(function(){
	alert(" این بازی دارای موسیقی و افکت صوتی است .")
	let count=prompt("how many persons are you?");
	for(i=0;i<count;i++){
		persons.push(prompt("enter a name"));
		player.push({});
		states.push();
	}
	y.play();
	function game(name){
		this.player=name;
		this.position=0;
		this.move=function move(){
			pace=Math.floor(Math.random()*10)+1;
			this.position+=pace;}
		this.result=function result(){
			return(this.position)
	}


	}
	for(i=0;i<count;i++){
		player[i]=new game(persons[i]);
	}
	function play(){
		for(i=0;i<179;i++){
			if(flag){
				$(".tarmak").eq(i).text(i+1).css("background-color","inherit");
				$(".tarmak").eq(i).css("font-size","22px");
				if((i+1)%20===0){
					flag=false;
					continue;
				}
				j=i+21;
			}
			if(!flag){
				$(".tarmak").eq(j).text(i+1).css("background-color","inherit");
				$(".tarmak").eq(i).css("font-size","22px");
				j--
				if((i+1)%20===0){
					flag=true;
					continue;
				}
			}

		}
		for(i=0;i<count;i++){
			player[i].move();
			for(j=0;j<count;j++){
				if(j===i){
						continue;
					}	
				if(player[i].result()===player[j].result()){
						player[j]["position"]=0;
				}
			}
			if(player[i].result()>=179){
				$("h1").text("~Player "+player[i].player+" wins~").css("color",color[i])
				$(".end").css("display","flex");
				y.pause();
				x.play();
				celebration();
				return(0)
			}
			$(".t"+player[i].result()).text(player[i].player).css("background-color",color[i]);
			if(player[i].player.length>=5 ){
				$(".t"+player[i].result()).css("font-size",24-player[i].player.length+"px");
			}
		}

		setTimeout(play,1000);

	}
	play();
	$(document).on("click","#mute",function(){
		if(a%2===0){
			x.pause();
			$(this).text("unmute music");
		}
		if(a%2===1){
			x.play();
			$(this).text("mute music");
		}
		a++;
	})	
	function celebration(){
		

		$(".bar").eq(0).animate({height:"120px"},600,function(){
			$(".bar").eq(0).animate({height:"0"},600)
		})
		$(".bar").eq(1).animate({height:"120px"},500,function(){
			$(".bar").eq(1).animate({height:"0"},500)
		})
		$(".bar").eq(2).animate({height:"120px"},700,function(){
			$(".bar").eq(2).animate({height:"0"},700)
		})
		$(".bar").eq(3).animate({height:"120px"},650,function(){
			$(".bar").eq(3).animate({height:"0"},650)
		})
		$(".bar").eq(4).animate({height:"120px"},800,function(){
			$(".bar").eq(4).animate({height:"0"},800)
		})
		$(".bar").eq(5).animate({height:"120px"},600,function(){
			$(".bar").eq(5).animate({height:"0"},600)
		})
		$(".bar").eq(6).animate({height:"120px"},700,function(){
			$(".bar").eq(6).animate({height:"0"},700)
		})
		$(".bar").eq(7).animate({height:"120px"},400,function(){
			$(".bar").eq(7).animate({height:"0"},400)
		})
		$(".bar").eq(8).animate({height:"120px"},450,function(){
			$(".bar").eq(8).animate({height:"0"},450)
		})
		$(".bar").eq(9).animate({height:"120px"},800,function(){
			$(".bar").eq(9).animate({height:"0"},800)
		})
		
		setTimeout(celebration,500);
	
	}
	function end(){
			window.location.href=window.location.href;
	}
})