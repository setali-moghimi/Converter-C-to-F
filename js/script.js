let ti= document.querySelector(".title2")
let input=document.querySelector('#in')
let b1=document.querySelector('#c')
let b2= document.querySelector('#r')
let b3 =document.querySelector('#ch')
let div = document.querySelector('.daraje')
let clego=document.querySelector('.C')
let flego=document.querySelector('.F')
let flag =0
function ch(){
    if (flag ==0 ){
        ti.innerHTML='°F to °C'
        clego.innerHTML='°F'
        flego.innerHTML='°C'
        flag=1
        input.setAttribute('placeholder','°F')
    }else{
        ti.innerHTML='°C to °F'
        flego.innerHTML='°F'
        clego.innerHTML='°C'
        flag=0
        input.setAttribute('placeholder','°C')

    }
    
}
function r (){
    div.innerHTML=''
    input.value=''
}
function c(){
    let val=input.value
    if (flag==0){
        let natije=val*(9/5)+32
        div.innerHTML='c to f:'+natije

    }else{
        let natije=(val-32)*(5/9)
        div.innerHTML='f to c:'+natije

    }
    div.style.color='yellow'
    if (val==''||isNaN(val)){
        div.innerHTML="wrong"
        div.style.color='red'
    }
    console.log(val)
}