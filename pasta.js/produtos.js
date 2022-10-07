
let div_produto=document.querySelector("#produtos")
let div_erro=document.querySelector("#div_erro")


let produtos=[]


async function init(){
  try {

    produtos = await listaProdutos()
       geraProduto()
      
       

  } catch (erro) {
     showErro(erro)
  }
   
     
} 

init()






  
function geraProduto(){
  produtos.map(pro=>{
     let div_item=document.createElement("div")
     let img_item=document.createElement("li")
     let div_buttons=document.createElement("div")
     let desc_item=document.createElement("h3")
     let preco_item=document.createElement("p")
    


     

     div_item.classList.add("div_item")
     img_item.classList.add("img_item")
     desc_item.classList.add("desc_item")
     preco_item.classList.add("preco_item")
     div_buttons.classList.add("div_buttons")

     div_buttons.innerHTML=`  
                  <p><i class="fa fa-shopping-cart" aria-hidden="true" id="carrinho_produto"></i></p>
                  <p><i class="fa fa-heart" aria-hidden="true"></i></p>
                  <p><i class="fa fa-eye" aria-hidden="true"></i></p>
                 `
                            
   

     img_item.style.backgroundImage =`url(${pro.img})`
     desc_item.textContent=pro.desc
     preco_item.textContent=pro.preço

     img_item.appendChild(div_buttons)
     div_item.appendChild(img_item)
     div_item.appendChild(desc_item)
     div_item.appendChild(preco_item)
     div_produto.appendChild(div_item)

    if(window.screen.width >= 600){
      div_item.addEventListener("mouseover",()=>{

        div_buttons.style.transform="translateX(0px)"  
          
     })

     div_item.addEventListener("mouseleave",()=>{

       div_buttons.style.transform="translateX(60px)"  
      
     })
    }
          

  })


}

function showErro(){
  div_erro.innerHTML= `<h3>Erro ao carregar os dados...
  </h3><i class="fa fa-refresh fa-spin  fa-1x" aria-hidden="true"></i> `
}


