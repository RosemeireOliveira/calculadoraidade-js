//algoritmo
// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)

// 3. Gerar a faixa etária
//    
//     Resultado            Faixa
//     0 à 12                Criança
//     13 à 17                Adolescente
//     18 à 65               Adulto
//     Acima de 65         Idoso
//    

// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;



function calcular(event) {
    // Previne o recarregar da página
    event.preventDefault()

    console.log("Foi executada a função calcular")

    // Passo 1
        let usuario = receberValores()

    // Passo 2
    let idadeCalculado = calcularIdade(usuario.dia, usuario.mes,usuario.ano)

    // Passo 3
    let classificacaoImc = classificarImc(imcCalculado)

    console.log(classificacaoImc)








    
function receberValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let diaRecebido = document.getElementById("dia-nascimento").value
    let mesRecebido = document.getElementById("mes-nascimento").value
    let anoRecebido = document.getElementById("ano-nascimento").value

    let dadosUsuario = {
        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido
    }

    console.log(dadosUsuario)

    return dadosUsuario
}
