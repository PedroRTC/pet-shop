function fetchJson(url, options){
    return fetch(url, options).then((r)=>{
      if(r.ok){
        return r.json()
      }else{
        new Error(r.statusText)
      }
     
    })
  }

  function listaProdutos(){
    return fetchJson("produto.json")
  }

  



  