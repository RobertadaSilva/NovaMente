 

function fecha_abre1(){
    
    document.getElementById("acessibilidade-hid").style.visibility="visible";
    document.getElementById("acessibilidade").style.visibility="hidden";
}

function fecha_abre2(){
    
    document.getElementById("acessibilidade-hid").style.visibility="hidden";
    document.getElementById("acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden";
}

// --------------
                      function escuro(){
    document.querySelector('.nav_espec').style.backgroundColor = "#989898";
    document.querySelector('.rosa_nav').style.color = "#000000";
    document.querySelector('.fundo_perfil_especialista').style.backgroundColor = "#363636";
    document.querySelector('.fundo').style.backgroundColor = "#737373";
    document.querySelector('.titleroxo2').style.backgroundColor = "#363636";
    document.querySelector('.titleroxo').style.backgroundColor = "#363636";
    document.querySelector('#bloc1').style.backgroundColor = "#363636";
    document.querySelector('#bloc1').style.border = "#363636";
    document.querySelector('#bloc2').style.border = "#363636";
    document.querySelector('#bloc3').style.border = "#363636";
    document.querySelector('#bloc4').style.border = "#363636";
    document.querySelector('#bloc5').style.border = "#363636";
    document.querySelector('#bloc6').style.border = "#363636";
    document.querySelector('#bloc2').style.backgroundColor = "#363636";
    document.querySelector('#bloc3').style.backgroundColor = "#363636";
    document.querySelector('#bloc4').style.backgroundColor = "#363636";
    document.querySelector('#bloc5').style.backgroundColor = "#363636";
    document.querySelector('#bloc6').style.backgroundColor = "#363636";
    document.querySelector('#branc1').style.color = "#fff";
    document.querySelector('#branc2').style.color = "#fff";
    document.querySelector('#branc3').style.color = "#fff";
    document.querySelector('#branc4').style.color = "#fff";
    document.querySelector('#branc5').style.color = "#fff";
    document.querySelector('#branc6').style.color = "#fff";
    document.getElementById("conf").src = "Imagens/comp.png";
    
    document.querySelector('.fundo_geral').style.backgroundColor = "#989898";
    document.querySelector('#nom1').style.color = "#000";
    document.querySelector('#nom2').style.color = "#000";
    document.querySelector('#nom3').style.color = "#000";
    document.querySelector('#nom4').style.color = "#000";
    document.querySelector('#botao1').style.backgroundColor = "#363636";
    document.querySelector('#botao2').style.backgroundColor = "#363636";
    document.querySelector('#botao3').style.backgroundColor = "#363636";
    document.querySelector('#botao4').style.backgroundColor = "#363636";
    document.getElementById(".acess2").src = "Imagens/comp.png";
}
function claro(){
    document.querySelector('.nav_espec').style.backgroundColor = "#fff";
    document.querySelector('.rosa_nav').style.color = "#9D6BFF";
    document.querySelector('.fundo_perfil_especialista').style.backgroundColor = "#9D6BFF";
    document.querySelector('.fundo').style.backgroundColor = "#f1f1f1";
    document.querySelector('.titleroxo2').style.backgroundColor = "#9D6BFF";
    document.querySelector('.titleroxo').style.backgroundColor = "#9D6BFF";
    document.querySelector('#bloc1').style.backgroundColor = "#fff";
    document.querySelector('#bloc1').style.border = "#fff";
    document.querySelector('#bloc2').style.border = "#fff";
    document.querySelector('#bloc3').style.border = "#fff";
    document.querySelector('#bloc4').style.border = "#fff";
    document.querySelector('#bloc5').style.border = "#fff";
    document.querySelector('#bloc6').style.border = "#fff";
    document.querySelector('#bloc2').style.backgroundColor = "#fff";
    document.querySelector('#bloc3').style.backgroundColor = "#fff";
    document.querySelector('#bloc4').style.backgroundColor = "#fff";
    document.querySelector('#bloc5').style.backgroundColor = "#fff";
    document.querySelector('#bloc6').style.backgroundColor = "#fff";
    document.querySelector('#branc1').style.color = "#9D6BFF";
    document.querySelector('#branc2').style.color = "#9D6BFF";
    document.querySelector('#branc3').style.color = "#9D6BFF";
    document.querySelector('#branc4').style.color = "#9D6BFF";
    document.querySelector('#branc5').style.color = "#9D6BFF";
    document.querySelector('#branc6').style.color = "#9D6BFF";
    document.getElementById("conf").src = "Imagens/Component 6.png";
    document.querySelector('.fundo_geral').style.backgroundColor = "#fff";
    document.querySelector('#nom1').style.color = "#575757";
    document.querySelector('#nom2').style.color = "#575757";
    document.querySelector('#nom3').style.color = "#575757";
    document.querySelector('#nom4').style.color = "#575757";
    document.querySelector('#botao1').style.backgroundColor = "#9D6BFF";
    document.querySelector('#botao2').style.backgroundColor = "#9D6BFF";
    document.querySelector('#botao3').style.backgroundColor = "#9D6BFF";
    document.querySelector('#botao4').style.backgroundColor = "#9D6BFF";
}
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init(); 




  function abre_modal(){

    let modal = document.querySelector(".modal")
    modal.style.visibility="visible";
    modal.style.animationName= "animate";
   
    let janela_escura = document.querySelector(".janela_escura")
   janela_escura.style.visibility="visible";
 
 
 }
 
 function fechar_modal(){
 
     let modal = document.querySelector(".modal")
     let janela_escura = document.querySelector(".janela_escura")
 
    modal.style.visibility="hidden";
    janela_escura.style.visibility="hidden";
  }