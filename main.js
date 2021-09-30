let play = document.querySelector('#play');
let dice = document.querySelector('#guti')
let diceNum = document.getElementById('diceNum');
let point = document.getElementById('point');
let clickAudio = new Audio('audio/click2.wav');
let successAudio = new Audio('audio/addp.wav');
let warning = new Audio('audio/warning.wav');
let btn = document.querySelectorAll('.btn-grp button');
let reload = document.querySelector('.reload i')
let count = 0;
let user;
alert('To start game ,please Select a Number')

for(let i=0 ; i<btn.length ; i++){
    btn[i].addEventListener('click', function(){
        for(let x=0 ; x<btn.length; x++){
            btn[x].classList.remove('select-btn')
            btn[i].classList.add('select-btn')
        }
        user = i+1;
    })
}

play.addEventListener('click', function(){
    
    count++
    clickAudio.play()
    let diceImg = ['ludo/1.png','ludo/2.png', 'ludo/3.png', 'ludo/4.png', 'ludo/5.png','ludo/6.png']
    dice.classList.add('anni');
    let random = Math.random()*6;
    random = Math.floor(random);
    
    setTimeout(()=>{
        dice.classList.remove('anni')
        for(let x=0 ; x<btn.length; x++){
            btn[x].classList.remove('select-btn')
        }
        point.innerText = count
    },1000)

    setTimeout(()=>{
        for(let x=0; x<6; x++){
            if(random == x){
                dice.src = diceImg[x]
            }
        }
        diceNum.value = random + 1;
    },500)
    
    
    if(user == random+1){
        setTimeout(()=>{
            successAudio.play()
        },500)
        count++;
    }
    else{
        setTimeout(()=>{
            warning.play()
        },1000)
        count = count-1
    }
    
})
reload.addEventListener('click', function(){
    reload.classList.add('reload-class')
    point.innerText = 0
    setTimeout(()=> {
        reload.classList.remove('reload-class')
    },1000)
})




