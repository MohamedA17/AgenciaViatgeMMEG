/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package AgenciaViatge;

import java.util.Scanner;
/**
 *
 * @author DAM
 */
public class AgenciaViatge {
    static Scanner teclat = new Scanner(System.in);

    /**
     *
     * @param args
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
            System.out.println("1. DNI");
            System.out.println("2. email");          
            System.out.println("3. Sortir");
            if (!teclat.hasNextInt()) {
            	System.out.println("Has d'introduir un numero com a opci�");
            	teclat.next();
            } else {            
                 opcio=teclat.nextInt();
              
                 switch (opcio) {
                     case 1:
                         System.out.println("Has seleccionat l'opcio validar DNI");
                         System.out.println("Introdueix dni: ");
                         String dni = teclat.next();
                    	 if(Validacions.validarDni(dni)) {
                             System.out.println("DNI correcte");
                         } else {
                             System.out.println("DNI incorrecte");
                         }
                    	 break;
                    	 
                     case 2:
                    	 System.out.println("Has seleccionat validar email");
                         System.out.println("Introdueix email: ");
                         String email = teclat.next();
                         
                         if(Validacions.validarEmail(email)) {
                             System.out.println("Email incorrecte");
                         } else {
                             System.out.println("Email correcte");
                         }
                         break;
                         
                     case 3:
                         System.out.println("Has seleccionat sortir");
                         sortir=true;
                    
                     default:
                         System.out.println("Sol nomeros entre 1 i 3");                             
                 }
            }  
        }
    }    		
}
    

