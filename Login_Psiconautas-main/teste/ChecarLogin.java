package teste;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/checarLogin")
public class ChecarLogin extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
	    ContatoDAO checar = new ContatoDAO();
	    String usuario = request.getParameter("usuario");
	    String senha = request.getParameter("senha");
	    Boolean check = checar.checarContato(usuario, senha);
	    if(check == true){
	    	String nomeUsuario = checar.nomeUsuario(usuario, senha);
	    	response.sendRedirect("/teste/enter/enter.jsp?nome=" + nomeUsuario);
	    }else{
	    	response.sendRedirect("/teste/LoginInvalido.jsp");
	     }
	}
	

}
