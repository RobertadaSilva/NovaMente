package teste;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/gravadoEspecialista")
public class AdicionaEspecialista extends HttpServlet{
	protected void service(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
		String nomeEspecialista = request.getParameter("nomeEspecialista");
		System.out.println(nomeEspecialista);
		String email = request.getParameter("email");
		String senhaEspecialista = request.getParameter("senhadoespecialista");
		System.out.println(senhaEspecialista);
		String telefone = request.getParameter("telefone");
		String registro = request.getParameter("registro");
		String especializacao = request.getParameter("especializacao");
		Especialista pessoaEspecialista= new Especialista();
		pessoaEspecialista.setNome(nomeEspecialista);
		pessoaEspecialista.setEmail(email);
		pessoaEspecialista.setSenha(senhaEspecialista);
		pessoaEspecialista.setEspecialidade(especializacao);
		pessoaEspecialista.setRegistro(registro);
		pessoaEspecialista.setTelefone(telefone);
		ContatoDAO tentativa = new ContatoDAO();
		tentativa.addContatoEspecialista(pessoaEspecialista);
		response.sendRedirect("/teste/LoginProfissional.jsp");
		
	}

}
