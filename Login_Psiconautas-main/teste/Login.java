package teste;
import java.sql.*;

public class Login {
	
	public Connection getConnection() {
		try {
			return DriverManager.getConnection("jdbc:mysql://localhost/Novamente", "root", "MySQL@2022");
			
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

}
