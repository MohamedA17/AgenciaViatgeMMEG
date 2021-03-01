/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;
import com.sun.istack.internal.logging.Logger;
import static connexio.AccesBD.obtenir_connexio_BD;
import java.sql.*;
import java.sql.Connection;
import java.sql.Statement;
/**
 *
 * @author DAM
 */
public class Validar {
    
    public static boolean validarDni(String dni) {
        // TODO code application logic here
        boolean sortir = false;
        char[] lletraDni = { 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
                'H', 'L', 'C', 'K', 'E' };
        //dniInt=0;       
        String dniNum = "";
				
		// TODO Auto-generated method stub
        boolean dniCorrecte = true;
        // donem longitud al dni
        if (dni.length() != 9) {
            System.out.println("El dni ha de contenir 9 caracters");
            dniCorrecte=false;
            return false;
        } else {
        // mirem que l'�ltim d�git tingui una lletra

            char ult = dni.charAt(dni.length()-1);
            // Convertim minuscula a majuscula
            if (ult >= 'a' && ult <= 'z') {
                ult -= 32;
            }
            if (ult >= 'A' && ult <= 'Z') {
            // mirem que els primers 8 digits siguin numeros
                for (int i = 0; i < 8; i++) {
                    if (dni.charAt(i) < '0' || dni.charAt(i) > '9') {
                        System.out.println("Les 8 primeres posicions han de ser numeriques");
                        dniCorrecte = false;
                        return false;
                        //break;
                    }
                }
                char lletra = 0;

                if (dniCorrecte) {

                    dni = dni.substring(0, dni.length() - 1);
                    System.out.println("DNI: " + dni);

                    int dniInte = Integer.parseInt(dni);
                    int reste = dniInte % 23;
                    System.out.println("Reste: " + reste);
                    System.out.println("Ult: " + ult);
                    System.out.println("Lletra DNI es: " + lletraDni[reste]);
                    if (ult == lletraDni[reste]) {
                        System.out.println("El dni es correcte.");
                    } else {
                        //System.out.println("Aquest dni no existeix/no es correcte.");
                        dniCorrecte = false;
                        return false;
                    }
                }
            } else {
                System.out.println("La ultima posicio ha de ser una lletra.");
            }
        }
        return true;	
	}
    
    public static boolean validarEmail(String email) {
                String llegir;
		// TODO Auto-generated method stub
                boolean emailOK=true;
		int pospriarroba = email.indexOf('@');
		int posultrarroba = email.lastIndexOf('@');
                int pospripunt = email.indexOf('.');
                int posultpunt = email.lastIndexOf('.');
                
                if (pospriarroba ==-1) {
                    return false;
			    //System.out.println("\n L'Email no pot contenir mes d'una \'@\'");                     
		        } else {
                    if (pospriarroba != posultrarroba) {
		                return false;
		            } else {
		        	    if(pospripunt == -1) {
		        		   return false;
		        	    } else {
		        	    	if (pospripunt != posultpunt) {
		        	    		return false;
		        	    	} else {
		        	    		
		        	    	String local= email.substring(0, pospriarroba);
		                        String domini= email.substring(pospriarroba + 1,pospripunt);
		                        String ext = email.substring(pospripunt + 1,email.length());
		                        
		                        if (local.length() == 0) {
		                            return false;
		                        } else if (domini.length() == 0) {
		                            return false;
		                        } else if (ext.length() == 0) {
		                            return false;
		                        } else if (ext.length() < 2) {
		                            return false;
		                        } else if (!validar_caracters(local)) {
		                            return false;
		                        } else if (!validar_caracters(domini)) {
		                            return false;
		                        } else if (!validar_caracters(ext)) {
		                            return false;
		                        }
		                        
		                        System.out.println("local = " + local);
		                        System.out.println("domini= " + domini);
		                        System.out.println("ext= " + ext);

		        	    	}
		        	    }       
		        }
		}                                                             		
        return true;
    }
    
    public static boolean facturar(int comanda){
        String[] dadesClient= new String[5];
        String[] dadesComanda= new String[3];
        
                PreparedStatement ps = null;       
                ResultSet rs = null;
                Connection con = obtenir_connexio_BD();
                // Preparamos la consulta
                String sql ="SELECT COUNT(Dni) as Dni FROM clients";
                try {
                    // Traemos los datos de la bd
                    ps = con.prepareStatement(sql);
                    rs = ps.executeQuery();
                    // Cargamos los resultados
                    if (rs.next()) {
                        Client client = new Client();
                        client.setNumeroOrden(rs.getString("cli_num"));
                        return client;
                    }

                } catch (SQLException e) {
                    e.printStackTrace();

                } finally {

                    cerrarObjeto(con);
                    cerrarObjeto(rs);
                    cerrarObjeto(ps);

                }
                return false;
    }
       
    private static boolean validar_caracters(String str){
                                
                for(int i=0; i <str.length(); i++){
                    char l= str.charAt(i);
                    if(!((l>='a'&& l<='z')||(l>='A'&& l<='Z')||(l>='0'&& l<='9')||(l=='_')||(l=='-'))){  
                        
                    return false;  
                    }                     
                }
                return true;
    }    
}
