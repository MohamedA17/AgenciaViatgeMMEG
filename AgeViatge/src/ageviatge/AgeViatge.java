/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ageviatge;

import connection.Comanda;
import java.sql.SQLException;
import utils.Validar;
import java.util.Scanner;
import static connection.Comanda.validarID;
import static utils.Validar.validarEmail;
import static utils.Validar.validarDni;
import static connection.Comanda.factExist;
import static connection.Comanda.getEmail;
import static connection.Comanda.getDNI;
import static connection.Comanda.generarFact;

/**
 *
 * @author DAM
 */
public class AgeViatge {
    static Scanner teclat = new Scanner(System.in);

    /**
     * @param args the command line arguments
     */
        public static void main(String[] args) {
        
        // TODO code application logic here
        boolean sortir = false;
        int opcio;  
        //dniInt=0;       
        String dniNum = "";
        
        while(!sortir){
        	
            System.out.println("\n\n");
            //System.out.println("");
            System.out.println("MENU PRINCIPAL");
            System.out.println("1. Facturar");
            System.out.println("2. ?");          
            System.out.println("3. ?");
            System.out.println("4. Sortir");
            if (!teclat.hasNextInt()) {
            	System.out.println("Has d'introduir un numero com a opcio");
            	teclat.next();
            } else {            
                opcio=teclat.nextInt();
              
                switch (opcio) {
                    case 1:
                        System.out.println("Has seleccionat l'opcio Facturar");
                        System.out.println("Introdueix num pedido: ");
                        int comanda = teclat.nextInt(); 
                        
                        Comanda dni = new Comanda();
                        String denei;
                        denei=dni.getDNI(comanda);

                        if(!validarID(comanda)) {
                            System.out.println("La comanda no existeix");
                        } 
                        else if(!factExist(comanda)){
                            System.out.println("Ja s'ha facturat aquesta comanda");
                        }
                        else if (!validarDni(denei)){              
                            System.out.println("DNI incorrecte");
                        }
                        else if (!validarEmail(getEmail(denei))){
                            System.out.println("Email incorrecte");
                        } 
                        else if (!generarFact(comanda,denei)){
                            System.out.println("No s'ha pogut facturar");
                        }                                                
                        break;
                        
                    case 2:
                        break;
                         
                    case 3:
                        break;
                    case 4:
                        System.out.println("Has seleccionat sortir");
                        sortir=true;
                    
                    default:
                        System.out.println("Sol nomeros entre 1 i 4");                             
                }
            }  
        }
    }
}