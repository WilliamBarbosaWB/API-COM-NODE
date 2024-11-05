import express from 'express' //o express no auxilia na parte do servidor.

const server = express() //estou guardando a instalação do node em uma variável para usar onde eu quiser. 

//primeiras rotas do projeto.

server.get('/usuarios', (req,res) => { // um é a requisção o outro é a resposta
    res.send("Esse é o canal dos usuários")
}) //rota do tipo get, é a mais utilizada

server.get('/duvidas', (req,res) => { // um é a requisção o outro é a resposta
    res.send("Esse é o portal de dúvidas")
})












//colocando o servidor para rodar na porta padrão 3000 do nosso computador. 
server.listen(3000)