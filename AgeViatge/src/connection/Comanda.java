/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package connection;

import static connection.AccesBD.obtenir_connexio_BD;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import utils.Validar;
import static utils.Validar.validarDni;


/**
 *
 * @author dam1m
 */
public class Comanda {
    
    public static boolean validarID(int comanda) {
        try{
            Connection conn = obtenir_connexio_BD();
            String vaID = "SELECT ID FROM pedido WHERE ID='"+comanda+"'";
        
            Statement stmtID = conn.createStatement();
            ResultSet rs = stmtID.executeQuery(vaID);
            //rs.next();
            if(rs.next()){
                int exID = Integer.parseInt(rs.getString("ID"));

                //int id = rs.getInt("ID");
                if(exID != 0){
                    System.out.println("ID comanda existeix");
                    return true;  
                }
            }
        }catch (SQLException ex){
            ex.printStackTrace();
        }                    
        return false;
    }
    
    public static boolean factExist(int comanda) {
        try{
            Connection conn = obtenir_connexio_BD();
            String faExs = "SELECT * FROM factura WHERE ID_PEDIDO='"+comanda+"'";

            Statement stmtFactva = conn.createStatement();
            ResultSet fa = stmtFactva.executeQuery(faExs);
            //fa.next();

            if(fa.next()){
                int exisBD = Integer.parseInt(fa.getString("ID_PEDIDO"));
                    //int exisBD = fa.getInt("ID_PEDIDO");
                    if(exisBD != 0){
                        return false;
                    }       
            }
        }catch (SQLException ex){
            ex.printStackTrace(); 
        }
        return true;
    }
    
    public static String getDNI(int comanda) {
        String dniBD = "";
            try{
                Connection conn = obtenir_connexio_BD();
                String vaDNI = "SELECT DNI FROM pedido WHERE ID='"+comanda+"'";

                Statement stmtDNI = conn.createStatement();
                ResultSet cs = stmtDNI.executeQuery(vaDNI);
                if(cs.next()){
                    dniBD = cs.getString("DNI");
        
                    if(!dniBD.equals(null)){
                        return  dniBD;
                    }
                }
            }catch (SQLException ex){
                ex.printStackTrace();
            }  
        return null;
    }
    
    public static String getEmail(String denei) {
        String emailBD = "";
            try{
                Connection conn = obtenir_connexio_BD();
                String vaEmail = "SELECT * FROM cliente WHERE DNI='"+denei+"'";

                Statement stmtEmail = conn.createStatement();
                ResultSet es = stmtEmail.executeQuery(vaEmail);
                es.next();
                emailBD = es.getString("CORREO");
        
                if(emailBD == null){
                    return null;
                }
            } catch (SQLException ex){
                ex.printStackTrace();
            }        
        return emailBD;                
    }
    
    public static boolean Facturar(){
        
    return true;    
    }
    
    public static boolean generarFact(int comanda, String denei){
        try{
            Connection conn = obtenir_connexio_BD();
            String dades = "SELECT * FROM LINEAS_PRODUCTOS, CLIENTE, PRODUCTOS, PEDIDO WHERE CLIENTE.DNI='"+denei+"' AND PEDIDO.ID='"+comanda+"'";
            Statement stmtValidat = conn.createStatement();
            ResultSet va = stmtValidat.executeQuery(dades);
            va.next();
            
            final String NOMEMPRESA = "Agència de viatge PARADISES";
            final String ADREÇAEMPRESA = "CARRER MAJOR NUM-5 TÀRREGA";
            final String TELEFONEMPRESA = "934621579";
            final String EMAILEMPRESA = "aparadises@paradise.com";       
                    
            String NomBD = va.getString("NOMBRE");
            String DniBD = denei;
            String ApellidoBD = va.getString("APELLIDO");
            String NumBD = va.getString("TELEFONO");
            
            String NomProd = va.getString("NOMBRE_PRODUCTO");
            String LugarProd = va.getString("LIGAR");
            String PrecioProd = va.getString("PRECIO");
            String CantidadProd = va.getString("CANTIDAD");
            String FechaProd = va.getString("FECHA");

            
            File impfact = new File("C:\\Users\\dam1m\\Documents\\factures\\factura"+comanda+".txt");
            PrintWriter escriptor = null;
                
                try{
                    escriptor = new PrintWriter(impfact);
                    
                    escriptor.println("\n                                           FACTURA");
                    escriptor.println("\n\nDADES EMPRESA\t\t\t\t\t\t\tDADES PERSONALS");
                    escriptor.println("Num. Factura: "+comanda+" \t\t\t\t\t\tNom: "+NomBD+" Cognom: "+ApellidoBD);
                    escriptor.println("Empresa: "+NOMEMPRESA+"   \t\t\t\tDNI: "+DniBD);
                    escriptor.println("Telefon: "+TELEFONEMPRESA+"\t\t\t\t\t\tTelefon client: "+NumBD);
                    escriptor.println("Email: "+EMAILEMPRESA);
                    escriptor.println("Adreça: "+ADREÇAEMPRESA);
                    escriptor.println("=============================================================================================================");
                    escriptor.println("=============================================================================================================");
                    escriptor.println("Productes");
                    escriptor.println("\n\nNombre producto: "+NomProd);
                    escriptor.println("Lugar: "+LugarProd);
                    escriptor.println("Precio: "+PrecioProd);
                    escriptor.println("Cantidad: "+CantidadProd);
                               
                    escriptor.close();    
                } catch (FileNotFoundException ex) {
                Logger.getLogger(Comanda.class.getName()).log(Level.SEVERE, null, ex);
                return false;                        
                }
        } catch (SQLException ex){
            ex.printStackTrace();
            return false;
        }
        System.out.println("S'ha facturat correctament");
        return true;
    }
}
