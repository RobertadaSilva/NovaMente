<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="screen" href="LoginInvalido.css">
    <script src="Login.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="img/logo.png" type="image/x-icon">
    <meta name="author" content="Roberta da Silva">
    <meta name="author" content="Estela Rodrigues">
    <meta name="author" content="Cintya Sanini">
    <meta name="author" content="Ademir Alves">
    <meta name="author" content="Matheus Santos">
    <meta name="author" content="Patrick Gonzles">
    <meta name="author" content="Gabriel Carloto">
    <title>Login</title>
</head>
<body id="corpo">
    <main>

        <section id="login">      
            <div class="login_img"><img src="img/logo.png"/></div>
            <div class="novamente"><a id="novamente" href="../index.html"><span class="spannovamente">Nova</span>Mente</a></div>
            <form action="/teste/checarLogin">
            <label class="user">
              <input type="text" placeholder="Usuário ou e-mail" id="user" name="usuario"/>
            </label>
            
            <section>
              <div id="acessibilidade" >
                <img src="img/imgacessiblidade0.png" onclick="fecha_abre1()"/>
              </div>
  
              <div id="acessibilidade-hid">
                <div>
                  <img class="acess1"  src="img/imgacessibilidade1.png" onclick="darkmodeLogin()"/>
                  <img class ="acess1-fake" src="img/imgacessibilidadedark1.png" onclick="normalmodeLogin()"></div>
                <img class="acess2" src="img/imgacessibilidade2.png"/>
                <img class="acess3" src="img/imgacessibilidade3 copy 2.png"/>
                <img class="acess4" src="img/imgacessibilidade4.png"/>
                <img class="acess5" src="img/imgacessibilidade5.png"/>
                <img class="acess6" src="img/imgacessibilidade6.png"  onclick="fecha_abre2()"/>
              </div>
              
              </section>
            <label class="password">
              <input type="password" placeholder="Senha" id="password" name="senha">
            </label>
            <div class="mensagem_invalido">
                 <p>Login inválido, tente novamente!</p>
            </div>
            <div class="forget_password" onclick="show_forgot_password()">
              Esqueci minha senha
            </div>
            <div class="line">
            <hr></hr>
            </div>
            <div class="sign-in">
              <nav>
              <a onclick="show_cadastro()">Cadastrar-se</a>
              </nav>
            </div>
            <label class="button">
             <a>

                    <input id="button" type="submit" value="Entrar"/>

             </a>
            </label>
            </form>
                     
        </section>

        <section id="cadastro">
          <div id="fechar" onclick="fecha()">X</div>
          <div class="cadastro_img"><img src="img/logo.png"/></div>
          <div class="create-acc">Criar sua conta</div>
          <form action="/teste/gravado">
          <label>
            <input class="user2" type="text" placeholder="Usuário ou e-mail" name="usuario"/>
          </label>

          <label>
            <input class="password2" type="password" placeholder="Senha" name="senha"/>
          </label>

          <div class="birth-date">Data de Nascimento</div>
          <label class="inputs3">
            <input class="month" type="text" placeholder="Mes" maxlength="10" name="mes"/>
            <input class="day" type="number" maxlength="2" placeholder="Dia" name="dia"/>
            <input class="year" type="number" maxlength="4" placeholder="Ano" name="ano"/>
          </label>

          <label class="check">
            <input id="checkbox" type="checkbox"/>
            <span class="termos">Termos de serviço</span>
          </label>

          <label class="button2">
              <input id="button2" type="submit" value="Cadastrar"/>
          </label>
          </form>
        </section>

        <section id="set_the_password">
          <div id="fechar2" onclick="fecha()">X</div>
            <img src="img/logo.png">
            <p class="p1">Esqueceu sua senha?</p>
            <p class="p2">Relaxa, enviaremos um link para seu e-mail.</p>

            <label id="send_email">
              <input id="sendemail" type="text" placeholder="Digite seu email..."/>
              <div onclick="show_put_password()"><input id="button3" type="button" value="Enviar" /></div>
            </label>
        </section>

        <section id="set_the_password2">
            <p class="p3">Hora de redefinir uma nova senha!! </p>
            <p class="p4">Digite uma nova senha:</p>

            <label id="choose">
                <input id="choose_password" type="password" placeholder="Senha">
                <input id="repeat_password" type="password" placeholder="Confirme a senha">
                <div onclick="fecha()"><input id="button4" type="button" value="Enviar" /></div>
            </label>

        </section>

        

    </main>

    <!--VLIBRAS--> 
    
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
          <div vw-plugin-wrapper>
                  <div class="vw-plugin-top-wrapper"></div>
          </div>
</div>

<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>

<script>
      new window.VLibras.Widget('https://vlibras.gov.br/app');
</script>
</body>
</html>