//algoritmo
// 1. Pegar os valores ok
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
    let diaRecebido = parseInt( document.getElementById("dia-nascimento").value)
    let mesRecebido = parseInt( document.getElementById("mes-nascimento").value)
    let anoRecebido = parseInt( document.getElementById("ano-nascimento").value)

    let dadosUsuario = {
        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido
    }

    console.log(dadosUsuario)

    return dadosUsuario
}


//]Passo 2

function calcularIdade(dataNascimento) {

    let dataAtual = new Date()
let diaNascimento =  dataDeNascimento.getDate()
let  mesNascimento = dataDeNascimento.getMonth()
let anoNascimento = dataDeNascimento.getFullYear()


let diferencaMes = dataAtual.getMonth() - mesNascimento

   
    let idade =  dataAtual.getFullYear() -  anoNascimento
    if (diferencaMes < 0|| (diferencaMes === 0 && dataAtual.getDate() <diaNascimento)) {
        idade--;
    }

    console.log(idade)

    return idade
}
}