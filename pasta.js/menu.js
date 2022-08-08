

let button_menu=document.querySelector(".fa-bars")
let items_menu=document.querySelector("#items")
let option_menu=document.querySelectorAll(".item")


button_menu.addEventListener("click",chamar_menu)

function chamar_menu(){
    items_menu.style.transform="translateX(0%)"
    remove_carrinho()
    setTimeout(() => {
        button_menu.classList.remove("fa-bars")
        button_menu.classList.add("fa-times")
    }, 100);
    button_menu.removeEventListener("click",chamar_menu)
    button_menu.addEventListener("click",remove_menu)
  
}

function remove_menu(){
    items_menu.style.transform="translateX(-150%)"
    setTimeout(() => {
        button_menu.classList.add("fa-bars")
        button_menu.classList.remove("fa-times")
    }, 100);
    button_menu.addEventListener("click",chamar_menu)
    button_menu.removeEventListener("click",remove_menu)
}



for (let index = 0; index < option_menu.length; index++) {
    option_menu[index].addEventListener("click",()=>{
        
        if(window.screen.width <=850){
            remove_menu()
         }
      
    })
    
}