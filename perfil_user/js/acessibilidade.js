// Menu Acessibilidade

function fecha_abre1(){
    document.querySelector(".acessibilidade-hid").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility = "hidden";
    document.querySelector(".acess2-fake").style.visibility = "hidden";
    document.querySelector(".acess1").style.visibility = "visible";
    document.querySelector(".acess2").style.visibility = "visible";
}

function fecha_abre2(){
    document.querySelector(".acessibilidade-hid").style.visibility="hidden";
    document.querySelector(".acess1-fake").style.visibility = "hidden";
    document.querySelector(".acess2-fake").style.visibility = "hidden";
    document.querySelector(".acess1").style.visibility = "hidden";
    document.querySelector(".acess2").style.visibility = "hidden";
}

// Modo Normal da página

function normalmode() {
    document.querySelector(".acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden"
    document.querySelector("body").style.backgroundColor = "#E5E5E5";
    document.querySelector("header").style.backgroundColor = "#FFF";
    document.querySelector(".title-blue").style.color = "#315a94";
    document.querySelector(".title-purple").style.color = "#9D6BFF";
    document.querySelector(".nav_dark1").style.color = "#000";
    document.querySelector(".nav_dark2").style.color = "#000";
    document.querySelector(".nav_dark3").style.color = "#000";
    document.querySelector(".nav_dark4").style.color = "#9D6BFF";
    document.querySelector(".nav_dark5").style.color = "#000";
    document.querySelector(".nav_dark6").style.color = "#000";
    document.getElementById("fundo_branco").style.backgroundColor = "#F5F5F5";
    document.querySelector("hr").style.backgroundColor = "#000";
    document.getElementById("cardjs").src = "imgs/card_user.png";
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#000";
    document.getElementById("uljs3").style.color = "#000";
    document.getElementById("uljs4").style.color = "#000";
    document.getElementById("uljs5").style.color = "#000";
    document.getElementById("pjs1").style.color = "#000";
    document.getElementById("pjs2").style.color = "#000";
    document.getElementById("pjs3").style.color = "#000";
    document.getElementById("pjs4").style.color = "#000";
    document.getElementById("pjs5").style.color = "#000";
    document.querySelector(".espaço_cinza1").style.backgroundColor = "#DDD";
    document.querySelector(".espaço_cinza2").style.backgroundColor = "#DDD";
    document.querySelector(".espaço_cinza3").style.backgroundColor = "#DDD";
    document.querySelector(".forms1").style.color = "#000";
    document.querySelector(".forms2").style.color = "#000";
    document.querySelector(".subtitulo4").style.color = "#000";
    document.querySelector(".termos").style.color = "#000";

    document.getElementById("id_infos_responsivo").style.color = "#000";
    document.querySelector(".conteudo_responsivo").style.backgroundColor = "#9D6BFF";
    document.querySelector(".dados_responsivo").style.backgroundColor = "#9D6BFF";
}

// Modo Escuro da página

function darkmode() {
    document.querySelector(".acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="visible"
    document.querySelector("body").style.backgroundColor = "#363636";
    document.querySelector("header").style.backgroundColor = "#737373";
    document.querySelector(".title-blue").style.color = "#FFF";
    document.querySelector(".title-purple").style.color = "#FFF";
    document.querySelector(".nav_dark1").style.color = "#FFF";
    document.querySelector(".nav_dark2").style.color = "#FFF";
    document.querySelector(".nav_dark3").style.color = "#FFF";
    document.querySelector(".nav_dark4").style.color = "#FFF";
    document.querySelector(".nav_dark5").style.color = "#FFF";
    document.querySelector(".nav_dark6").style.color = "#FFF";
    document.getElementById("fundo_branco").style.backgroundColor = "#737373";
    document.querySelector("hr").style.backgroundColor = "#FFF";
    document.getElementById("cardjs").src = "imgs/card_user_dark.png";
    document.getElementById("uljs1").style.color = "#FFF";
    document.getElementById("uljs2").style.color = "#FFF";
    document.getElementById("uljs3").style.color = "#FFF";
    document.getElementById("uljs4").style.color = "#FFF";
    document.getElementById("uljs5").style.color = "#FFF";
    document.getElementById("pjs1").style.color = "#FFF";
    document.getElementById("pjs2").style.color = "#FFF";
    document.getElementById("pjs3").style.color = "#FFF";
    document.getElementById("pjs4").style.color = "#FFF";
    document.getElementById("pjs5").style.color = "#FFF";
    document.querySelector(".espaço_cinza1").style.backgroundColor = "#363636";
    document.querySelector(".espaço_cinza2").style.backgroundColor = "#363636";
    document.querySelector(".espaço_cinza3").style.backgroundColor = "#363636";
    document.querySelector(".forms1").style.color = "#FFF";
    document.querySelector(".forms2").style.color = "#FFF";
    document.querySelector(".subtitulo4").style.color = "#FFF";
    document.querySelector(".termos").style.color = "#FFF";

    document.getElementById("id_infos_responsivo").style.color = "#FFF";
    document.querySelector(".conteudo_responsivo").style.backgroundColor = "#737373";
    document.querySelector(".dados_responsivo").style.backgroundColor = "#737373";
}

// Baixa Visão

function baixavisao() {
    document.querySelector(".acess2").style.visibility = "hidden";
    document.querySelector(".acess2-fake").style.visibility = "visible";
    document.getElementById("fundo_branco").style.transform = "scale(1.1)";
}

function normalvisao() {
    document.querySelector(".acess2").style.visibility = "visible";
    document.querySelector(".acess2-fake").style.visibility = "hidden";
    document.getElementById("fundo_branco").style.transform = "scale(1.0)";
}

// Mudança das páginas

function perfiljs() {
    document.querySelector(".perfil").style.display = "flex";
    document.querySelector(".redefinir_email").style.display = "none";
    document.querySelector(".redefinir_senha").style.display = "none";
    document.querySelector(".esqueci_senha").style.display = "none";
    document.querySelector(".termo_compromisso").style.display = "none";
    document.getElementById("uljs1").style.color = "#9D6BFF";
    document.getElementById("uljs2").style.color = "#000";
    document.getElementById("uljs3").style.color = "#000";
    document.getElementById("uljs4").style.color = "#000";
    document.getElementById("uljs5").style.color = "#000";
}

function redefinir_emailjs() {
    document.querySelector(".perfil").style.display = "none";
    document.querySelector(".redefinir_email").style.display = "flex";
    document.querySelector(".redefinir_senha").style.display = "none";
    document.querySelector(".esqueci_senha").style.display = "none";
    document.querySelector(".termo_compromisso").style.display = "none";
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#9D6BFF";
    document.getElementById("uljs3").style.color = "#000";
    document.getElementById("uljs4").style.color = "#000";
    document.getElementById("uljs5").style.color = "#000";
}

function redefinir_senhajs() {
    document.querySelector(".perfil").style.display = "none";
    document.querySelector(".redefinir_email").style.display = "none";
    document.querySelector(".redefinir_senha").style.display = "flex";
    document.querySelector(".esqueci_senha").style.display = "none";
    document.querySelector(".termo_compromisso").style.display = "none";
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#000";
    document.getElementById("uljs3").style.color = "#9D6BFF";
    document.getElementById("uljs4").style.color = "#000";
    document.getElementById("uljs5").style.color = "#000";
}

function esqueci_senhajs() {
    document.querySelector(".perfil").style.display = "none";
    document.querySelector(".redefinir_email").style.display = "none";
    document.querySelector(".redefinir_senha").style.display = "none";
    document.querySelector(".esqueci_senha").style.display = "flex";
    document.querySelector(".termo_compromisso").style.display = "none";
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#000";
    document.getElementById("uljs3").style.color = "#000";
    document.getElementById("uljs4").style.color = "#9D6BFF";
    document.getElementById("uljs5").style.color = "#000";
}

function termo_compromissojs() {
    document.querySelector(".perfil").style.display = "none";
    document.querySelector(".redefinir_email").style.display = "none";
    document.querySelector(".redefinir_senha").style.display = "none";
    document.querySelector(".esqueci_senha").style.display = "none";
    document.querySelector(".termo_compromisso").style.display = "flex";
    document.getElementById("uljs1").style.color = "#000";
    document.getElementById("uljs2").style.color = "#000";
    document.getElementById("uljs3").style.color = "#000";
    document.getElementById("uljs4").style.color = "#000";
    document.getElementById("uljs5").style.color = "#9D6BFF";
}

// Mudança de páginas responsivo

function perfiljs_responsivo() {
    document.querySelector(".conteudo_responsivo").style.display = "flex";
    document.querySelector(".perfil_responsivo").style.display = "flex";
    document.querySelector(".redefinir_email_responsivo").style.display = "none";
    document.querySelector(".redefinir_senha_responsivo").style.display = "none";
    document.querySelector(".esqueci_senha_responsivo").style.display = "none";
    document.querySelector(".termo_compromisso_responsivo").style.display = "none";
}

function redefinir_emailjs_responsivo() {
    document.querySelector(".conteudo_responsivo").style.display = "flex";
    document.querySelector(".perfil_responsivo").style.display = "none";
    document.querySelector(".redefinir_email_responsivo").style.display = "flex";
    document.querySelector(".redefinir_senha_responsivo").style.display = "none";
    document.querySelector(".esqueci_senha_responsivo").style.display = "none";
    document.querySelector(".termo_compromisso_responsivo").style.display = "none";
}

function redefinir_senhajs_responsivo() {
    document.querySelector(".conteudo_responsivo").style.display = "flex";
    document.querySelector(".perfil_responsivo").style.display = "none";
    document.querySelector(".redefinir_email_responsivo").style.display = "none";
    document.querySelector(".redefinir_senha_responsivo").style.display = "flex";
    document.querySelector(".esqueci_senha_responsivo").style.display = "none";
    document.querySelector(".termo_compromisso_responsivo").style.display = "none";
}

function esqueci_senhajs_responsivo() {
    document.querySelector(".conteudo_responsivo").style.display = "flex";
    document.querySelector(".perfil_responsivo").style.display = "none";
    document.querySelector(".redefinir_email_responsivo").style.display = "none";
    document.querySelector(".redefinir_senha_responsivo").style.display = "none";
    document.querySelector(".esqueci_senha_responsivo").style.display = "flex";
    document.querySelector(".termo_compromisso_responsivo").style.display = "none";
}

function termo_compromissojs_responsivo() {
    document.querySelector(".conteudo_responsivo").style.display = "flex";
    document.querySelector(".perfil_responsivo").style.display = "none";
    document.querySelector(".redefinir_email_responsivo").style.display = "none";
    document.querySelector(".redefinir_senha_responsivo").style.display = "none";
    document.querySelector(".esqueci_senha_responsivo").style.display = "none";
    document.querySelector(".termo_compromisso_responsivo").style.display = "flex";
}

function seta_backjs() {
    document.querySelector(".links_responsivo").style.display = "flex";
    document.querySelector(".conteudo_responsivo").style.display = "none";
}