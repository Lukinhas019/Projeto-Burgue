const lista = document.querySelector('ul')
const btnMostrarTudo = document.querySelector('.MostrarTudo')
const btnDesconto = document.querySelector('.ButtonDesconto')
const btnSomar = document.querySelector('.SomarTudo')
const btnFiltrar = document.querySelector('.Filter')

function MostrarTudo(ArreyMT) {
  let novaLista = ''
  ArreyMT.forEach((produto => {

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

    ...produtos,
    
    preco: produtos.preco * 0.9,

  }))

  MostrarTudo(newPreco)

}


function SomarTudo() {
  const somaTotal = listaProdutos.reduce((acc, somas) => acc + somas.preco, 0)
  lista.innerHTML =
`
  <p>O valor total dos produtos é R$ ${somaTotal.toFixed(2)}</p>

`
}

function Filter() {

  const veganFilter = listaProdutos.filter((produtos) => produtos.vegan === true  )

  MostrarTudo(veganFilter)

  }

btnMostrarTudo.addEventListener('click', () => MostrarTudo(listaProdutos))
btnDesconto.addEventListener('click', ButtonDesconto)
btnSomar.addEventListener('click', SomarTudo)
btnFiltrar.addEventListener('click', Filter) 


