class aluno {
	constructor(nome, sexo, idade) {
		this.id = 0;
		this.nome = 'indefinido';
		this.sexo = 'indefinido';
		this.idade = 0;
	}
}

var arrayAlunos = [
	{
		id: 101,
		nome: 'Tiago Siqueira Pereira',
		sexo: 'Masculino',
		idade: 32
	},
	{
		id: 102,
		nome: 'Paulo Fernando Moreira',
		sexo: 'Masculino',
		idade: 32
	},
	{
		id: 103,
		nome: 'Viviane Aparecida Moreira',
		sexo: 'Feminino',
		idade: 35
	}
]

var qtdAlunos = 3
var idAluno = 3

function exibeDivs(id) {
	if(document.getElementById(id).style.display == "block") {
	  document.getElementById(id).style.display = "none";
	  return;
	}
	if(document.getElementById(id).classList.contains("hide")) {
		Array.from(document.getElementsByClassName("hide")).forEach(
			div => (div.style.display = "none")
		);
	} else {
		Array.from(document.getElementsByClassName("aHide")).forEach(
			div => (div.style.display = "none")
		);
	}
	document.getElementById(id).style.display = "block";
}

function cadastrar(idAluno, qtdAlunos) {

	let novoAluno = new aluno()
	let confirmacoes = 0

	novoAluno.id = this.idAluno + 1001

	novoAluno.nome  = document.querySelector('input#txtNome').value
	if(verificaNome(novoAluno.nome) == 1)
		confirmacoes++
	else
		window.alert(`Nome inválido.`)
	
	novoAluno.sexo  = document.querySelector('select#sSexo').value
	if(verificaSexo(novoAluno.sexo) == 1)
		confirmacoes++
	else
		window.alert(`Sexo inválido.`)

	novoAluno.idade = document.querySelector('input#numIdade').value
	if(verificaIdade(novoAluno.idade) == 1)
		confirmacoes++
	else
		window.alert(`Idade inválida.`)

	if(confirmacoes == 3) {
		arrayAlunos.push(novoAluno)
		this.qtdAlunos++;
		this.idAluno++;
		window.alert(`Aluno ${this.qtdAlunos} cadastrado com sucesso.`)
	}
}

function listar(qtdAlunos) {

	let list = document.getElementById("corpoTabela")

	list.textContent = ''
	
	if(this.qtdAlunos < 1)
		list.textContent = 'Nenhum aluno cadastrado.'

	for(let i = 0; i < this.qtdAlunos; i++) {
		let aluno = document.createElement('tr')
		let id    = document.createElement('td')
		let nome  = document.createElement('td')
		let sexo  = document.createElement('td')
		let idade = document.createElement('td')

		aluno.setAttribute('id', `id${i+1}`)

		id.textContent = `${arrayAlunos[i].id}`
		nome.textContent = `${arrayAlunos[i].nome}`
		sexo.textContent = `${arrayAlunos[i].sexo}`
		idade.textContent = `${arrayAlunos[i].idade}`
		
		aluno.appendChild(id)
		aluno.appendChild(nome)
		aluno.appendChild(sexo)
		aluno.appendChild(idade)
		list.appendChild(aluno)
	}
}

function ordenaArrayPor(param) {
	arrayAlunos.sort((a, b) => {
		return `${a[param]}`.localeCompare(`${b[param]}`)
	})
}

let listarAlunos = document.getElementById('bListarAlunos')
listarAlunos.addEventListener('click', () => {
	listar()
})

let listarPadrao = document.getElementById('listagemPadrao')
listarPadrao.addEventListener('click', () =>  {
	ordenaArrayPor('id')
	listar()
})

let listarAlfa = document.getElementById('listagemAlfabetica')
listarAlfa.addEventListener('click', () => {
	ordenaArrayPor('nome')
	listar()
})

let listarIdadeCre = document.getElementById('listagemIdadeCre')
listarIdadeCre.addEventListener('click', () => {
	ordenaArrayPor('idade')
	listar()
})

let btnAlterarNome = document.getElementById('btnAlterarNome')
btnAlterarNome.addEventListener('click', (qtdAlunos) => {

	let novoNome = document.getElementById('novoNome').value
	let idAluno  = document.getElementById('alterarAluno').value
	let posicao  = achaPosicaoId(idAluno, qtdAlunos)

	if(this.qtdAlunos > 0) {
		if(verificaNome(novoNome) == 0) {
			window.alert(`Nome inválido.`)
		} else {
			if(verificaId(idAluno, this.qtdAlunos) == 1) {
				arrayAlunos[posicao].nome = novoNome
				window.alert(`O nome do aluno foi alterado para ${novoNome} com sucesso.`)
			} else
				window.alert(`ID inválido.`)
		}	
	} else
		window.alert('Nenhum aluno na lista.')
})

let btnAlterarSexo = document.getElementById('btnAlterarSexo')
btnAlterarSexo.addEventListener('click', (qtdAlunos) => {

	let novoSexo = document.getElementById('sNovoSexo').value
	let idAluno  = document.getElementById('alterarAluno').value
	let posicao  = achaPosicaoId(idAluno, qtdAlunos)

	if(this.qtdAlunos > 0) {
		if(verificaSexo(novoSexo) == 0) {
			window.alert(`Sexo inválido.`)
		} else {
			if(verificaId(idAluno, this.qtdAlunos) == 1) {
				arrayAlunos[posicao].sexo = novoSexo
				window.alert(`O sexo do aluno foi alterado para ${novoSexo} com sucesso.`)
			} else	
				window.alert(`ID inválido.`)
		}
	} else
		window.alert('Nenhum aluno na lista.')
})

let btnAlterarIdade = document.getElementById('btnAlterarIdade')
btnAlterarIdade.addEventListener('click', (qtdAlunos) => {

	let novaIdade = document.getElementById('novaIdade').value
	let idAluno   = document.getElementById('alterarAluno').value
	let posicao   = achaPosicaoId(idAluno, qtdAlunos)

	if(this.qtdAlunos > 0) {
		if(verificaIdade(novaIdade) == 0) {
			window.alert(`Idade inválido.`)
		} else {
			if(verificaId(idAluno, this.qtdAlunos) == 1) {
				arrayAlunos[posicao].idade = novaIdade
				window.alert(`A idade do aluno alterada para ${novaIdade} com sucesso.`)
			} else
				window.alert(`ID inválido.`)
		}
	} else
		window.alert('Nenhum aluno na lista.')
})

function remover(qtdAlunos) {

	let idAluno = document.getElementById("idAluno").value
	let posicao = achaPosicaoId(idAluno, qtdAlunos)

	if(this.qtdAlunos > 0) {
		if(verificaId(idAluno, this.qtdAlunos) == 1) {
			arrayAlunos.splice(posicao, 1)
			this.qtdAlunos--;
			window.alert(`Aluno ${idAluno} removido com sucesso.`)
		} else
			window.alert(`ID inválido.`)
	} else
		window.alert('Nenhum aluno na lista.')
}

let btnRemoverTodos = document.getElementById('bRemoverTodos')
btnRemoverTodos.addEventListener('click', (qtdAlunos) => {
	
	if(this.qtdAlunos > 0) {
		let confirm = window.confirm('Tem certeza que deseja excluir todos os alunos?')

		if(confirm) {
			for(let i = 0; i < this.qtdAlunos; i++)
				arrayAlunos.pop()
			this.qtdAlunos = 0
			window.alert(`Todos os alunos foram apagados.`)
		}
	} else
		window.alert(`Nenhum aluno na lista.`)
})

function verificaNome(nome) {
	let retorno = 0
	if(nome.length <= 3) 
		retorno = 0
	else
		retorno = 1
	return retorno
}

function verificaSexo(sexo) {
	let retorno = 0
	if(sexo == 'Escolha sua opção')
		retorno = 0
	else
		retorno = 1
	return retorno
}

function verificaIdade(idade) {
	let retorno = 0
	if(idade <= 3 || idade >= 100)
		retorno = 0
	else
		retorno = 1
	return retorno
}

function verificaId(id, qtdAlunos) {
	let retorno = 0
	let verifica = false
	for(let i = 0; i < this.qtdAlunos; i++) {
		if(id == arrayAlunos[i].id)
			verifica = true
	}
	if(verifica == false)
		retorno = 0
	else
		retorno = 1
	return retorno
}

function achaPosicaoId(id, qtdAlunos) {
	let posicao = 0
	for(let i = 0; i < this.qtdAlunos; i++) {
		if(id == arrayAlunos[i].id) {
			posicao = i
		}
	}
	return posicao
}
// EXIBIR DIV AO PRESSIONAR BOTÃO
function exibeDivs(id) {
	if(document.getElementById(id).style.display == "block") {
	  document.getElementById(id).style.display = "none";
	  return;
	}
	if(document.getElementById(id).classList.contains("hide")) {
		Array.from(document.getElementsByClassName("hide")).forEach(
			div => (div.style.display = "none")
		);
	} else {
		Array.from(document.getElementsByClassName("aHide")).forEach(
			div => (div.style.display = "none")
		);
	}
	document.getElementById(id).style.display = "block";
}

// LISTAR ALUNOS
$(document).ready(function(){
	$("#bListarAlunos").click(function(){
		$("#corpoTabela").load("js/lista.php");
	});
});
