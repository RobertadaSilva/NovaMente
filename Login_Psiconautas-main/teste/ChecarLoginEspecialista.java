package teste;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/checarLoginEspecialista")
public class ChecarLoginEspecialista extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
	    ContatoDAO checar = new ContatoDAO();
	    String usuarioesp = request.getParameter("usuarioespecialista");
	    String senhaesp = request.getParameter("senhadoespecialistachecagem");
	    System.out.println(usuarioesp);
	    System.out.println(senhaesp);
	    
	    Boolean check = checar.checarEspecialista(usuarioesp, senhaesp);
	    if(check == true){
	    	response.sendRedirect("/teste/especialista_perfil_inicio/Perfil.jsp");
	    }else{
	    	response.sendRedirect("/teste/LoginProfissionalErrado.jsp");
	     }
	}
	

}