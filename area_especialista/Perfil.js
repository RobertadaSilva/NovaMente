function aumentarTamanhoMenu(){
    var acessivel = document.querySelector(".menu_acessibilidade_mobile");
    var icone = document.querySelector(".icone_acessibilidade_mobile");
    var iconeSurgir1 = document.querySelector(".opcoes_acessibilidade_responsivo1");
    var iconeSurgir2 = document.querySelector(".opcoes_acessibilidade_responsivo2");
    var iconeSurgir3 = document.querySelector(".opcoes_acessibilidade_responsivo3");
    var iconeSurgir4 = document.querySelector(".opcoes_acessibilidade_responsivo4");
    var iconeSurgir5 = document.querySelector(".opcoes_acessibilidade_responsivo5");
    var iconeSurgir6 = document.querySelector(".opcoes_acessibilidade_responsivo6");
    acessivel.style.height = '51vh';
    icone.style.display = 'none';
    iconeSurgir1.style.display = 'block';
    iconeSurgir2.style.display = 'block';
    iconeSurgir3.style.display = 'block';
    iconeSurgir4.style.display = 'block';
    iconeSurgir5.style.display = 'block';
    iconeSurgir6.style.display = 'block';
}
function voltarTamanhoOriginal(){
    var acessivel = document.querySelector(".menu_acessibilidade_mobile");
    var icone = document.querySelector(".icone_acessibilidade_mobile");
    var iconeSurgir1 = document.querySelector(".opcoes_acessibilidade_responsivo1");
    var iconeSurgir2 = document.querySelector(".opcoes_acessibilidade_responsivo2");
    var iconeSurgir3 = document.querySelector(".opcoes_acessibilidade_responsivo3");
    var iconeSurgir4 = document.querySelector(".opcoes_acessibilidade_responsivo4");
    var iconeSurgir5 = document.querySelector(".opcoes_acessibilidade_responsivo5");
    var iconeSurgir6 = document.querySelector(".opcoes_acessibilidade_responsivo6");
    acessivel.style.height = '10vh';
    icone.style.display = 'block';
    iconeSurgir1.style.display = 'none';
    iconeSurgir2.style.display = 'none';
    iconeSurgir3.style.display = 'none';
    iconeSurgir4.style.display = 'none';
    iconeSurgir5.style.display = 'none';
    iconeSurgir6.style.display = 'none';
}
/*Animação da NAV do Carloto*/
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