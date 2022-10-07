let img_animais=document.querySelector("#img_animais")
let imgs=document.querySelectorAll("#img_animais img")
let bolinhas=document.querySelectorAll("#bolinha_animais hr")

let button_esquerda=document.querySelector("#button_esquerda")
let button_direita=document.querySelector("#button_direita")

let img_funcionario=document.querySelectorAll(".img_funcionario")
let redes=document.querySelectorAll(".redes")
let i_redes=document.querySelectorAll(".redes section")


function buttons_animais(){
   let int=0
   bolinhas[0].style.background="orange" 
   bolinhas[0].style.transform="scale(1.5)"

    button_esquerda.addEventListener("click",()=>{
        img_animais.scrollBy(-300,0)
        int--
        if (int<0) {
            int=0
        }
        for (let index = 0; index < bolinhas.length; index++) {
            if(index==int){
             bolinhas[index].style.background="orange"
             bolinhas[index].style.transform="scale(1.5)"
            }else{
             bolinhas[index].style.background=""
             bolinhas[index].style.transform="scale(1)"
            }
         
        }
        
      
    })

    button_direita.addEventListener("click",()=>{
        img_animais.scrollBy(300,0)
       
        int++
        if (int>4) {
            int=4
        }

        for (let index = 0; index < bolinhas.length; index++) {
            if(index==int){
                bolinhas[index].style.background="orange"
                bolinhas[index].style.transform="scale(1.5)"
            }else{
                bolinhas[index].style.background=""
                bolinhas[index].style.transform="scale(1)"
            }
            
        }
      
    })

}

buttons_animais()

 

function efeito_redes(){

    for (let index = 0; index < img_funcionario.length; index++) {
    if(window.screen.width >= 600){
        img_funcionario[index].addEventListener("mouseover",()=>{
            redes[index].style.transform="translateY(0px)"
             
          })
  
          img_funcionario[index].addEventListener("mouseleave",()=>{
              redes[index].style.transform="translateY(60px)"      
          })
    }
       
        
    }

}

efeito_redes()