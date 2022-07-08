package teste;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/gravado")
public class AdicionaUsuario extends HttpServlet{
	protected void service(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		String nome = request.getParameter("nome");
		String email = request.getParameter("usuario");
		String senha = request.getParameter("senha");
		Usuario pessoa= new Usuario();
		pessoa.setNome(nome);
		pessoa.setEmail(email);
		pessoa.setSenha(senha);
		ContatoDAO tentativa = new ContatoDAO();
		tentativa.addContato(pessoa);
		response.sendRedirect("/teste/Login.jsp");
		
	}

}
