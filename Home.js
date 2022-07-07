function fecha_abre1(){
    
    document.getElementById("acessibilidade-hid").style.visibility="visible";
    document.getElementById("acessibilidade").style.visibility="hidden";
}

function fecha_abre2(){
    
    document.getElementById("acessibilidade-hid").style.visibility="hidden";
    document.getElementById("acessibilidade").style.visibility="visible";
    document.querySelector(".acess1-fake").style.visibility="hidden";
}

// Modo normal da página

function normalmode(){
    document.querySelector("body").style.backgroundImage="url(Imagens/background-home.png)";
    document.querySelector(".acess1").src="Imagens/imgacessibilidade1.png";
    document.querySelector(".acess1-fake").style.visibility="hidden";
    document.querySelector(".nav_responsiva").style.backgroundColor="#FFF";
    document.querySelector(".line1").style.backgroundColor="#ADADAD";
    document.querySelector(".line2").style.backgroundColor="#ADADAD";
    document.querySelector(".line3").style.backgroundColor="#ADADAD";
    document.querySelector(".novamente").style.color="#000";
    document.querySelector(".mente_roxo").style.color="#9D6BFF";
    document.querySelector(".a_quemsomos_login1").style.color="#9D6BFF";
    document.querySelector(".a_quemsomos_login2").style.color="#9D6BFF";
    document.querySelector(".a_quemsomos_login3").style.color="#9D6BFF";
    document.querySelector(".a_quemsomos_login4").style.color="#9D6BFF";
    document.querySelector(".login").style.backgroundColor="#9D6BFF";
    document.querySelector(".login").style.color="#FFF";
    document.querySelector(".titulo_cadastre-se").style.color="#9D6BFF";
    document.querySelector(".texto_cadastre-se").style.color="#909090";
    document.querySelector(".cadastre-se").style.background="linear-gradient(103.45deg, #6146D9 49.75%, #FFFFFF 291.93%)";
    document.querySelector(".titulo_primeira_imagem").style.color="#000";
    document.querySelector(".texto_primeira_imagem").style.color="#616161";
    document.querySelector(".img2normal").style.display="block";
    document.querySelector(".img2dark").style.display="none";
    document.querySelector(".titulo_segunda_imagem").style.color="#000";
    document.querySelector(".texto_segunda_imagem").style.color="#616161";
    document.querySelector(".img3normal").style.display="block";
    document.querySelector(".img3dark").style.display="none";
    document.querySelector(".titulo_terceira_imagem").style.color="#000";
    document.querySelector(".texto_terceira_imagem").style.color="#616161";
    document.querySelector(".img4normal").style.display="block";
    document.querySelector(".img4dark").style.display="none";
    document.querySelector(".roxo1").style.backgroundColor="#9D6BFF";
    document.querySelector(".roxo2").style.backgroundColor="#9D6BFF";
    document.querySelector(".roxo3").style.backgroundColor="#9D6BFF";
    document.querySelector(".titulo_informacoes1").style.color="#000";
    document.querySelector(".texto_informacoes1").style.color="#616161";
    document.querySelector(".img5normal").style.display="block";
    document.querySelector(".img5dark").style.display="none";
    document.querySelector(".titulo_informacoes2").style.color="#000";
    document.querySelector(".texto_informacoes2").style.color="#616161";
    document.querySelector(".titulo_informacoes2-fake").style.color="#000";
    document.querySelector(".texto_informacoes2-fake").style.color="#616161";
    document.querySelector(".img6normal").style.display="block";
    document.querySelector(".img6dark").style.display="none";
    document.querySelector(".titulo_informacoes3").style.color="#000";
    document.querySelector(".texto_informacoes3").style.color="#616161";
    document.querySelector(".img7normal").style.display="block";
    document.querySelector(".img7dark").style.display="none";
    document.querySelector(".blog1").style.background="linear-gradient(309.15deg, #F4F4F4 52.61%, rgba(244, 244, 244, 0) 167.41%)";
    document.querySelector(".blog2").style.background="linear-gradient(309.15deg, #F4F4F4 52.61%, rgba(244, 244, 244, 0) 167.41%)";
    document.querySelector(".blog3").style.background="linear-gradient(309.15deg, #F4F4F4 52.61%, rgba(244, 244, 244, 0) 167.41%)";
    document.querySelector(".titulo_blog1").style.color="#000";
    document.querySelector(".texto_blog1").style.color="#000";
    document.querySelector(".titulo_blog2").style.color="#000";
    document.querySelector(".texto_blog2").style.color="#000";
    document.querySelector(".titulo_blog3").style.color="#000";
    document.querySelector(".texto_blog3").style.color="#000";
    document.querySelector(".input_blog1").style.backgroundColor="#9D6BFF";
    document.querySelector(".input_blog2").style.backgroundColor="#9D6BFF";
    document.querySelector(".input_blog3").style.backgroundColor="#9D6BFF";
    document.querySelector(".direita_fundo_roxo").style.backgroundColor="#9D6BFF";
    document.querySelector(".img11normal").style.display="block";
    document.querySelector(".img11dark").style.display="none";
    document.querySelector(".esquerda_fundo_roxo").style.backgroundColor="#9D6BFF";
    document.querySelector(".img12normal").style.display="block";
    document.querySelector(".img12dark").style.display="none";
    document.querySelector("#sec_footer").style.backgroundColor="#9D6BFF";
    document.querySelector(".titulo_plataforma").style.color="#FFF";
    document.querySelector(".titulo_social").style.color="#FFF";
    document.querySelector(".titulo_contatos").style.color="#FFF";
    document.querySelector(".team").style.background="linear-gradient(95.21deg, #8547FF 18.88%, #1F3A71 173.97%)";
}

//Modo Escuro da página

function darkmode(){
    document.querySelector("body").style.backgroundImage="url(Imagens/background-darkhome.png)";
    document.querySelector(".acess1").src="Imagens/imgacessibilidadedark1.png";
    document.querySelector(".acess1-fake").style.visibility="visible";
    document.querySelector(".nav_responsiva").style.backgroundColor="#FFF";
    document.querySelector(".line1").style.backgroundColor="#ADADAD";
    document.querySelector(".line2").style.backgroundColor="#ADADAD";
    document.querySelector(".line3").style.backgroundColor="#ADADAD";
    document.querySelector(".novamente").style.color="#FFF";
    document.querySelector(".mente_roxo").style.color="#FFF";
    document.querySelector(".a_quemsomos_login1").style.color="#FFF";
    document.querySelector(".a_quemsomos_login2").style.color="#FFF";
    document.querySelector(".a_quemsomos_login3").style.color="#FFF";
    document.querySelector(".a_quemsomos_login4").style.color="#FFF";
    document.querySelector(".login").style.backgroundColor="#FFF";
    document.querySelector(".login").style.color="#000";
    document.querySelector(".titulo_cadastre-se").style.color="#000";
    document.querySelector(".texto_cadastre-se").style.color="#FFF";
    document.querySelector(".cadastre-se").style.background="linear-gradient(103.45deg, #000000 49.75%, #FFFFFF 291.93%)";
    document.querySelector(".titulo_primeira_imagem").style.color="#FFF";
    document.querySelector(".texto_primeira_imagem").style.color="#000";
    document.querySelector(".img2normal").style.display="none";
    document.querySelector(".img2dark").style.display="block";
    document.querySelector(".titulo_segunda_imagem").style.color="#FFF";
    document.querySelector(".texto_segunda_imagem").style.color="#000";
    document.querySelector(".img3normal").style.display="none";
    document.querySelector(".img3dark").style.display="block";
    document.querySelector(".titulo_terceira_imagem").style.color="#FFF";
    document.querySelector(".texto_terceira_imagem").style.color="#000";
    document.querySelector(".img4normal").style.display="none";
    document.querySelector(".img4dark").style.display="block";
    document.querySelector(".roxo1").style.backgroundColor="#737373";
    document.querySelector(".roxo2").style.backgroundColor="#737373";
    document.querySelector(".roxo3").style.backgroundColor="#737373";
    document.querySelector(".titulo_informacoes1").style.color="#FFF";
    document.querySelector(".texto_informacoes1").style.color="#FFF";
    document.querySelector(".img5normal").style.display="none";
    document.querySelector(".img5dark").style.display="block";
    document.querySelector(".titulo_informacoes2").style.color="#FFF";
    document.querySelector(".texto_informacoes2").style.color="#FFF";
    document.querySelector(".titulo_informacoes2-fake").style.color="#FFF";
    document.querySelector(".texto_informacoes2-fake").style.color="#FFF";
    document.querySelector(".img6normal").style.display="none";
    document.querySelector(".img6dark").style.display="block";
    document.querySelector(".titulo_informacoes3").style.color="#FFF";
    document.querySelector(".texto_informacoes3").style.color="#FFF";
    document.querySelector(".img7normal").style.display="none";
    document.querySelector(".img7dark").style.display="block";
    document.querySelector(".blog1").style.background="linear-gradient(300.59deg, #363636 67.87%, rgba(244, 244, 244, 0) 233.65%)";
    document.querySelector(".blog2").style.background="linear-gradient(300.59deg, #363636 67.87%, rgba(244, 244, 244, 0) 233.65%)";
    document.querySelector(".blog3").style.background="linear-gradient(300.59deg, #363636 67.87%, rgba(244, 244, 244, 0) 233.65%)";
    document.querySelector(".titulo_blog1").style.color="#FFF";
    document.querySelector(".texto_blog1").style.color="#FFF";
    document.querySelector(".titulo_blog2").style.color="#FFF";
    document.querySelector(".texto_blog2").style.color="#FFF";
    document.querySelector(".titulo_blog3").style.color="#FFF";
    document.querySelector(".texto_blog3").style.color="#FFF";
    document.querySelector(".input_blog1").style.backgroundColor="#1D1D1D";
    document.querySelector(".input_blog2").style.backgroundColor="#1D1D1D";
    document.querySelector(".input_blog3").style.backgroundColor="#1D1D1D";
    document.querySelector(".direita_fundo_roxo").style.backgroundColor="#363636";
    document.querySelector(".img11normal").style.display="none";
    document.querySelector(".img11dark").style.display="block";
    document.querySelector(".esquerda_fundo_roxo").style.backgroundColor="#363636";
    document.querySelector(".img12normal").style.display="none";
    document.querySelector(".img12dark").style.display="block";
    document.querySelector("#sec_footer").style.backgroundColor="#363636";
    document.querySelector(".titulo_plataforma").style.color="#737373";
    document.querySelector(".titulo_social").style.color="#737373";
    document.querySelector(".titulo_contatos").style.color="#737373";
    document.querySelector(".team").style.background="linear-gradient(120.35deg, #323232 18.23%, #FFFFFF 308.93%, #1F3A71 310.79%)";
}

//Baixa Visão

    function baixavisao(){
        
    }


    function normalvisao(){
       
    }
 
