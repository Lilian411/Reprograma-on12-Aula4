const livros = require('./database' )

const paginas = livros.sort((a,b) =>{
   return a.paginas - b.paginas
}) 
 console.table (paginas)

const entrada = require('readline-sync')

const  LivrosPorCategoria = entrada.question("voce deseja encontrar livros por categoria ?(S/N)")
if  (LivrosPorCategoria.toLocaleUpperCase() == "S"){ 
 console.table("Essas são as opções disponiveis: ")
 console.table ("autoajuda, espiritualismo,romance,aventura, programação")
 
 const qualLivro =  entrada.question ( " Qual livro voce escolhe ?")
 const categoria = livros.filter( Livro => Livro.categoria == qualLivro)
 console.table (categoria)
}
const livrosJaLidos = entrada.question("Deseja encontrar livros recomendados? (S/N)")

if(livrosJaLidos.toLocaleUpperCase() == "S"){


    const qualJaLido = entrada.question("Esses sao os livros:")
    const recomenda = livros.filter(recomendacao => recomendacao.recomenda == true)

    console.table(recomenda)
    
}
const NaoLidos = entrada.question("Deseja encontrar livros na lista? (S/N)")

if(NaoLidos.toLocaleUpperCase() == "S"){


    const naoLido = entrada.question("lista de desejos")
    const leu = livros.filter( naoLeu => naoLeu.leu == false)

    console.table(leu)


} else{
    console.log(" Esses são todos os livros")
    
    console.table(livros)
}
