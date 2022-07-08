
function show_cadastro(){
    document.querySelector("#cadastro").style.visibility="visible";
}

function show_forgot_password(){
    document.querySelector("#set_the_password").style.visibility="visible";
}

function show_put_password(){
    document.querySelector("#set_the_password2").style.visibility="visible";
}

function fecha(){
    document.querySelector("#set_the_password").style.visibility="hidden";
    document.querySelector("#set_the_password2").style.visibility="hidden";
    document.querySelector("#cadastro").style.visibility="hidden"
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

function normalmodeLogin(){
    document.querySelector("#corpo").style.backgroundImage="url(img/background-login.png)"
    document.querySelector("#login").style.backgroundColor="#F0F0F0"
    document.querySelector(".acess1").src="img/imgacessibilidade1.png"
    document.querySelector(".acess1-fake").style.visibility="hidden"
    document.querySelector("#novamente").style.color="black"
    document.querySelector(".spannovamente").style.color="#9D6BFF"
    document.querySelector(".forget_password").style.color="black"
    document.querySelector(".sign-in").style.color="black"
    document.querySelector("#button").style.backgroundColor="#E9E9E9"
    document.querySelector("#button").style.color="#9D6BFF"
    document.querySelector("#cadastro").style.backgroundColor="#F0F0F0"
    document.querySelector(".create-acc").style.color="#9D6BFF"
    document.querySelector(".birth-date").style.color="#9D6BFF"
    document.querySelector(".termos").style.color="black"
    document.querySelector("#button2").style.backgroundColor="#F0F0F0"
    document.querySelector("#button2").style.color="#9D6BFF"
    document.querySelector("#set_the_password").style.backgroundColor="#F0F0F0"
    document.querySelector(".p1").style.color="#9D6BFF"
    document.querySelector(".p2").style.color="#626262"
    document.querySelector("#button3").style.backgroundColor="#9D6BFF"
    document.querySelector("#set_the_password2").style.backgroundColor="#F0F0F0"
    document.querySelector(".p3").style.color="#9D6BFF"
    document.querySelector(".p4").style.color="#9D6BFF"
    document.querySelector("#button4").style.backgroundColor="#9D6BFF"
}

function darkmodeLogin(){
    document.querySelector("#corpo").style.backgroundImage="url(img/background-darklogin.png)"
    document.querySelector("#login").style.backgroundColor="#363636"
    document.querySelector(".acess1").src="img/imgacessibilidadedark1.png"
    document.querySelector(".acess1-fake").style.visibility="visible"
    document.querySelector("#novamente").style.color="#737373"
    document.querySelector(".spannovamente").style.color="white"
    document.querySelector(".forget_password").style.color="white"
    document.querySelector(".sign-in").style.color="white"
    document.querySelector("#button").style.backgroundColor="#737373"
    document.querySelector("#button").style.color="white"
    document.querySelector("#cadastro").style.backgroundColor="#363636"
    document.querySelector(".create-acc").style.color="white"
    document.querySelector(".birth-date").style.color="white"
    document.querySelector(".termos").style.color="white"
    document.querySelector("#button2").style.backgroundColor="#737373"
    document.querySelector("#button2").style.color="white"
    document.querySelector("#set_the_password").style.backgroundColor="#363636"
    document.querySelector(".p1").style.color="white"
    document.querySelector(".p2").style.color="white"
    document.querySelector("#button3").style.backgroundColor="#737373"
    document.querySelector("#set_the_password2").style.backgroundColor="#363636"
    document.querySelector(".p3").style.color="white"
    document.querySelector(".p4").style.color="white"
    document.querySelector("#button4").style.backgroundColor="#737373"
    // document.querySelector("#button").style.hover="red"
}