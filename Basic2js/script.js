// https://source.roboflow.com/8HsBLZLdmcdKKwgqJIGTTeSHit42/cRzroDbsKzbATSWQl3GD/original.jpg
var main=document.getElementById("main");
var a="";
for(let i=0;i<=43;i++){
    let t=Math.floor(Math.random() * 5);
    if(t==0||t==5)
    a+='<div class="card"><img src="https://source.roboflow.com/8HsBLZLdmcdKKwgqJIGTTeSHit42/cRzroDbsKzbATSWQl3GD/original.jpg"></div>';
    else if(t==1||t==6){
        a+='<div class="card"><img src="https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjM4NjA1NDQwNjQ2/cutest-pokemon-of-all-time.png"></div>';
    }
    else if(t==3||t==7){
        a+='<div class="card"><img src="https://th.bing.com/th/id/OIP.rLSeIWmGPX9ctoj9kWqK_AHaIF?w=900&h=982&rs=1&pid=ImgDetMain"></div>';
    }
    else if(t==4||t==8){
        a+='<div class="card"><img src="https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjM4NjA1NTA2MTgy/cutest-pokemon-of-all-time.png"></div>';
    }
    else if(t==2||t==9){
        a+='<div class="card"><img src="https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjM4NjA0MDY0Mzkw/cutest-pokemon-of-all-time.png"></div>';
    }
}
main.innerHTML=a;
 