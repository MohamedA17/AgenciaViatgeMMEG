/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connection;

/**
 *
 * @author dam1m
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author DAM
 */
public class AccesBD {
    public static Connection obtenir_connexio_BD() {
        
        Connection conn = null;
        String servidor = "jdbc:mysql://localhost:3306/AGENCIA";
        String bbdd = "";
        String user = "root";
        String password = "";
        
        try{
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            conn= DriverManager.getConnection(servidor + bbdd, user, password);
        } catch (Exception e){
            e.printStackTrace();
            return conn;
        }
        return conn;
    }    
}
