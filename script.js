const lista = document.querySelector('ul')
const btnMostrarTudo = document.querySelector('.MostrarTudo')
const btnDesconto = document.querySelector('.ButtonDesconto')

function MostrarTudo() {
 let novaLista = ''
  listaProdutos.forEach((produto => {

    novaLista = novaLista +

      `<li>
                 <img src=${produto.src}>
                <p>${produto.nome}</p>
                 <p>R$ ${produto.preco}</p>
            </li>
  
  `

  }))

  lista.innerHTML = novaLista

}





function ButtonDesconto() {
let novaLista = ''
  const newPreco = listaProdutos.map((produtos) => ({

    ... produtos,

    preco : produtos.preco * 0.9,


  }))

    newPreco.forEach((produto => {

    novaLista = novaLista +

      `     <li>
                 <img src=${produto.src}>
                <p>${produto.nome}</p>
                 <p>R$ ${produto.preco}</p>
            </li>
   
      `

  }))

  lista.innerHTML = novaLista

console.log(newPreco)

  }

  


btnMostrarTudo.addEventListener('click', MostrarTudo)
btnDesconto.addEventListener('click', ButtonDesconto)


