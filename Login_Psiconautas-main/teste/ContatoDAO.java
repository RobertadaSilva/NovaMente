package teste;
import java.sql.*;
import teste.Usuario;
import teste.Login;

public class ContatoDAO {
	
	private Connection conexao;
	
	public ContatoDAO(){
		this.conexao = new Login().getConnection();
		
	}
	public void addContato(Usuario usuario){
		String sql = "insert into USUARIO" + "(NOME, EMAIL, SENHA)" + "values(?,?,?)";
		try {
			
			PreparedStatement comando = conexao.prepareStatement(sql);
			comando.setString(1, usuario.getNome());
			comando.setString(2, usuario.getEmail());
			comando.setString(3, usuario.getSenha());
			comando.execute();
			comando.close();
			
		}catch(SQLException e) {
			throw new RuntimeException(e);
		}
		
		
	}
	public void addContatoEspecialista(Especialista especialista){
		String sql = "insert into PROFISSIONAL" + "( ESPECIALIZACAO, REGISTRO, TELEFONE, NOME, EMAIL, SENHA)" + "values(?,?,?,?,?,?)";
		try {
			
			PreparedStatement comando = conexao.prepareStatement(sql);
			comando.setString(1, especialista.getEspecialidade());
			comando.setString(2, especialista.getRegistro());
			comando.setString(3, especialista.getTelefone());
			comando.setString(4, especialista.getNome());
			comando.setString(5, especialista.getEmail());
			comando.setString(6, especialista.getSenha());
			comando.execute();
			comando.close();
			
		}catch(SQLException e) {
			throw new RuntimeException(e);
		}
		
		
	}
	
	public boolean checarContato(String teste, String outroTeste) {
		try {
			String sql = "select * from USUARIO";
			PreparedStatement busca = conexao.prepareStatement(sql);
			ResultSet rs = busca.executeQuery();
			while(rs.next()) {
				String email = rs.getString("EMAIL");
				String senha = rs.getString("SENHA");
				if(teste.equals(email) && outroTeste.equals(senha)) {
					busca.close();
					return true;
				}
			}
			busca.close();
			return false;
			
			
		}catch(SQLException e) {
			throw new RuntimeException(e);
		}
		
	}
	
	public boolean checarEspecialista(String teste, String outroTeste) {
		try {
			String sql = "select * from PROFISSIONAL";
			PreparedStatement busca = conexao.prepareStatement(sql);
			ResultSet rs = busca.executeQuery();
			while(rs.next()) {
				String email = rs.getString("EMAIL");
				String senha = rs.getString("SENHA");
				if(teste.equals(email) && outroTeste.equals(senha)) {
					busca.close();
					return true;
				}
			}
			busca.close();
			return false;
			
			
		}catch(SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public String nomeUsuario(String teste, String outroTeste){
		String nomeDoUsuario = null;
		try {
			String sql = "select * from USUARIO";
			PreparedStatement busca = conexao.prepareStatement(sql);
			ResultSet rs = busca.executeQuery();
			while(rs.next()) {
				String nome = rs.getString("NOME");
				String email = rs.getString("EMAIL");
				String senha = rs.getString("SENHA");
				if(teste.equals(email) && outroTeste.equals(senha)) {
					busca.close();
					nomeDoUsuario = nome;
					return nomeDoUsuario;
					
				}
			}
			busca.close();
			
			
			
		}catch(SQLException e) {
			throw new RuntimeException(e);
		}
		return nomeDoUsuario;
		
	}
	

}
