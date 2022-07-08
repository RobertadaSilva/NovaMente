function darkmodeLoginProfissional(){
    document.querySelector("body").style.backgroundColor="#C8C8C8";
    document.querySelector("body").style.backgroundImage="url(Imagens/background-darklogin.png)";
    document.querySelector(".acess1").src="Imagens/imgacessibilidadedark1.png";
    document.querySelector(".acess1-fake").style.visibility="visible";
    document.querySelector(".palavra").style.color="#F8F8F8";
    document.querySelector("#login").style.backgroundColor="#363636"
    document.querySelector("#novamente").style.color="#737373";
    document.querySelector(".spannovamente").style.color="#9C9C9C";
    document.querySelector("#button").style.backgroundColor="#737373";
    document.querySelector("#button").style.color="#FFF";
    document.querySelector(".forget_password").style.color="#FFF";
    document.querySelector(".sign-in").style.color="#FFF";
    document.querySelector("#set_the_password").style.backgroundColor="#363636";
    document.querySelector(".p1").style.color="#FFF";
    document.querySelector(".p2").style.color="#FFF";
    document.querySelector("#button3").style.backgroundColor="#737373";
    document.querySelector("#set_the_password2").style.backgroundColor="#363636";
    document.querySelector(".p3").style.color="#FFF";
    document.querySelector(".p4").style.color="#FFF";
    document.querySelector("#button4").style.backgroundColor="#737373";
    document.querySelector("#create-acc").style.backgroundColor="#363636";
    document.querySelector(".h2cacc").style.color="#FFF";
    document.querySelector(".innext1").style.backgroundColor="#737373";
    document.querySelector("#dados_pessoais").style.backgroundColor="#363636";
    document.querySelector(".h2-1").style.color="#FFF";
    document.querySelector(".h2-1").style.color="#FFF";
    document.querySelector(".innext2").style.backgroundColor="#737373";
    document.querySelector(".inback").style.backgroundColor="#737373";
    document.querySelector("#documentos_psicologo").style.backgroundColor="#363636";
    document.querySelector(".ddc").style.color="#FFF";
    document.querySelector(".estiloh3js-1").style.color="#FFF";
    document.querySelector(".estiloh3js-2").style.color="#FFF";
    document.querySelector(".estiloh3js-3").style.color="#FFF";
    document.querySelector(".estiloh3js-4").style.color="#FFF";
    document.querySelector(".estiloh3js-5").style.color="#FFF";
    document.querySelector(".inback2").style.backgroundColor="#737373";
    document.querySelector(".indone").style.backgroundColor="#737373";
    document.querySelector(".passo1").src="Imagens/passo1dark.png";
    document.querySelector(".passo1-2").src="Imagens/passo1dark.png";
    document.querySelector(".passo1-3").src="Imagens/passo1dark.png";
}

function normalmodeLoginProfissional(){
    document.querySelector("body").style.backgroundColor="#FFF";
    document.querySelector("body").style.backgroundImage="url(Imagens/backgroundloginprofi.png)";
    document.querySelector(".acess1").src="Imagens/imgacessibilidade1.png";
    document.querySelector(".acess1-fake").style.visibility="hidden";
    document.querySelector("#login").style.backgroundColor="#F0F0F0";
    document.querySelector(".forget_password").style.color="#000";
    document.querySelector(".sign-in").style.color="#000";
    document.querySelector("#set_the_password").style.backgroundColor="#F0F0F0";
    document.querySelector("#button3").style.backgroundColor="#9D6BFF";
    document.querySelector("#novamente").style.color="#9C9C9C";
    document.querySelector(".spannovamente").style.color="#9D6BFF";
    document.querySelector("#button").style.backgroundColor="#9D6BFF";
    document.querySelector("#button").style.color="#FFF";
    document.querySelector(".p1").style.color="#9D6BFF";
    document.querySelector(".p2").style.color="#000";
    document.querySelector("#set_the_password2").style.backgroundColor="#F0F0F0";
    document.querySelector(".p3").style.color="#9D6BFF";
    document.querySelector(".p4").style.color="#000";
    document.querySelector("#button4").style.backgroundColor="#9D6BFF";
    document.querySelector("#create-acc").style.backgroundColor="#F0F0F0";
    document.querySelector(".h2cacc").style.color="#000";
    document.querySelector(".innext1").style.backgroundColor="#9D6BFF";
    document.querySelector("#dados_pessoais").style.backgroundColor="#F0F0F0";
    document.querySelector(".h2-1").style.color="#9D6BFF";
    document.querySelector(".h2-1").style.color="#585858";
    document.querySelector(".innext2").style.backgroundColor="#9D6BFF";
    document.querySelector(".inback").style.backgroundColor="#9D6BFF";
    document.querySelector("#documentos_psicologo").style.backgroundColor="#F0F0F0";
    document.querySelector(".ddc").style.color="#9D6BFF";
    document.querySelector(".estiloh3js-1").style.color="#9D6BFF";
    document.querySelector(".estiloh3js-2").style.color="#9D6BFF";
    document.querySelector(".estiloh3js-3").style.color="#9D6BFF";
    document.querySelector(".estiloh3js-4").style.color="#9D6BFF";
    document.querySelector(".estiloh3js-5").style.color="#9D6BFF";
    document.querySelector(".inback2").style.backgroundColor="#9D6BFF";
    document.querySelector(".indone").style.backgroundColor="#9D6BFF";
    document.querySelector(".passo1").src="Imagens/passo1.png";
    document.querySelector(".passo1-2").src="Imagens/passo1.png";
    document.querySelector(".passo1-3").src="Imagens/passo1.png";
}



function fecha_abre1(){    
    document.getElementById("acessibilidade-hid").style.visibility="visible";
    document.getElementById("acessibilidade").style.visibility="hidden";
}

function fecha_abre2(){
    document.getElementById("acessibilidade-hid").style.visibility="hidden";
    document.getElementById("acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden";
}

function fecha(){
    document.querySelector("#create-acc").style.display="none";
    document.querySelector("#dados_pessoais").style.display="none";
    document.querySelector("#set_the_password").style.display="none";
    document.querySelector("#set_the_password2").style.display="none";
    document.querySelector("#documentos_psicologo").style.display="none";
    document.querySelector("#login").style.display="block";
    document.querySelector("body").style.height="auto";
}

function show_cadastro(){
    document.querySelector("#create-acc").style.display="block";
    document.querySelector("#login").style.display="none";
}

function next1(){
    document.querySelector("#dados_pessoais").style.display="block";
    document.querySelector("body").style.height="950px"
    document.querySelector("#create-acc").style.display="none";
    document.querySelector("#login").style.display="none";
}

function back1(){
    document.querySelector("#dados_pessoais").style.display="none"
    document.querySelector("#create-acc").style.display="block";
    document.querySelector("#login").style.display="none";
    document.querySelector("body").style.height="auto"
}

function back2(){
    document.querySelector("#dados_pessoais").style.display="block";
    document.querySelector("body").style.height="auto";
    document.querySelector("#documentos_psicologo").style.display="none";
}

function next2(){
    document.querySelector("#documentos_psicologo").style.display="block";
    document.querySelector("#dados_pessoais").style.display="none";
    document.querySelector("body").style.height="1700px";
}

function show_forgot_password(){
    document.querySelector("#set_the_password").style.display="block";
    
}

function show_put_password(){
    document.querySelector("#set_the_password2").style.display="block";
    document.querySelector("#set_the_password").style.display="none";
    document.querySelector("#login").style.display="none";
}
