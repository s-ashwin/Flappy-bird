let space = document.querySelector('.space')
let bird =  document.querySelector('.bird')
let bars =  document.querySelector('.bars')
let star = document.querySelector('.start')
let logo = document.querySelector('.logo')
let pts = document.querySelector('.score')
let jumping = 0;
let score =0;
let change;

let startg = function(){  

    logo.style.display = "none"
    document.querySelector('#st').style.display= "none"
    bird.style.display = "block"
    bars.style.display = "block"
    bars.classList.add("animate")
    let down = setInterval(dow,10)
     change = setInterval(()=>{
        space.style.top = Math.floor(Math.random() * 351)+"px"; 
        score++
        pts.innerHTML = "Score :" + score
    },1500)
}

let endg = function(){
    window.location.reload()
}

let dow = function(){
    var btop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
   if(btop<450 && jumping==0){
      bird.style.top = (btop + 3) + "px"; 
   }
}



const jump = function(){
    let count=0;
    jumping=1
    let jumpstart = setInterval(()=>{
        var btop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if(btop>6 && count<15){
            bird.style.top = (btop - 5) + "px"; 
        }
        if(count>20){
            clearInterval(jumpstart)
            jumping=0
            count = 0
        }
        count++
    },10)
   
        
}
document.addEventListener('keydown', event =>{
    if(event.code=='Space'){
        jump();
    }
})

var check = setInterval(() => {
    
    var stop = parseInt(window.getComputedStyle(space).getPropertyValue("top"));
    var val = (stop+150)- 50
    var btop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    var bleft = parseInt(window.getComputedStyle(bars).getPropertyValue("left")); 
            if(bleft>=0 && bleft<=45){             
                    if(btop<stop-10 || btop>val+10){
                        console.log("fail")
                        bars.classList.remove("animate")
                        bird.style.display = "none"
                        bars.style.display = "none"
                        logo.style.display = "block"
                        logo.innerHTML = "OOPS!"
                        clearInterval(change)
                        document.querySelector('#en').style.display= "block"
                    }
                }
            else{
            
            }
},10)