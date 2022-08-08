 
 
 let button_carrinho=document.querySelector("#button_carrinho")
 let div_carrinho=document.querySelector("#div_carrinho")

 button_carrinho.addEventListener("click", chamar_carrinho)

 function chamar_carrinho(){
   if(window.screen.width <=850){
      remove_menu()
   }
 
    div_carrinho.style.transform="translateX(0%)"
    button_carrinho.removeEventListener("click", chamar_carrinho)
    button_carrinho.addEventListener("click", remove_carrinho)
 }


 function remove_carrinho(){
    div_carrinho.style.transform="translateX(-150%)"
    button_carrinho.addEventListener("click", chamar_carrinho)
    button_carrinho.removeEventListener("click", remove_carrinho)
 }