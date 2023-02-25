let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let titulo = document.querySelector('#titulo')
let subtitulo = document.querySelector('#subtitulo')
let btnLogin = document.querySelector('#login')
let btnCadastro = document.querySelector('#cadastrar')
let btnSair = document.querySelector('#sair')



if(localStorage.getItem('token') != null){
    titulo.innerHTML = `Olá, ${userLogado.nome}`
    subtitulo.innerHTML = 'Parábens você está logado, obrigado por experimentar meu projeto'
    btnLogin.setAttribute('style', 'display: none')
    btnCadastro.setAttribute('style', 'display: none')
    btnSair.setAttribute('style', 'display: block') 
} else {

}

function login(){
    window.location.href = '../assets/html/singin.html'
}

function cadastrar(){
    window.location.href = '../assets/html/singup.html'
}

function sair(){
    localStorage.removeItem('token')
    location.reload()
}