<?php
require_once "conexion.php";
session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.html");
    exit;
}
   //echo ($_SESSION["emaill"]);
?>


<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <title>BIENVENIDO</title>
    

        <link rel="stylesheet" href="iconos/css/fontello.css">
        <link rel="stylesheet" href="iconos2/css/fontello.css">
        <link rel="stylesheet" href="CSS/iniciosocios.css">
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <meta name="viewport" content="width=device-width, user-scalable=no,initial-sclale=1.0,maximum-scale=1.0,minimum-scale=1.0">
        <!-- <script src="js/hotel.js"></script> -->
        <script src="js/viaje.js"></script>
        <script>
		
		function Delete(e){
			let items = [];
			JSON.parse(localStorage.getItem('items')).map(data=>{
				if(data.id != e.parentElement.parentElement.children[0].textContent){
					
					items.push(data);

				}
			});
			localStorage.setItem('items',JSON.stringify(items));
			window.location.reload();
        };
        

		function Delete2(e){
			let items2 = [];
			JSON.parse(localStorage.getItem('items2')).map(data2=>{
				if(data2.id2 != e.parentElement.parentElement.children[0].textContent){
					
					items2.push(data2);

				}
			});
			localStorage.setItem('items2',JSON.stringify(items2));
			window.location.reload();
		};



		function Delete3(e){
			let items3 = [];
			JSON.parse(localStorage.getItem('items3')).map(data3=>{
				if(data3.id3 != e.parentElement.parentElement.children[0].textContent){
					
					items3.push(data3);

				}
			});
			localStorage.setItem('items3',JSON.stringify(items3));
			window.location.reload();
		};



		
		function Delete4(e){
			let items4 = [];
			JSON.parse(localStorage.getItem('items4')).map(data4=>{
				if(data4.id4 != e.parentElement.parentElement.children[0].textContent){
					
					items4.push(data4);

				}
			});
			localStorage.setItem('items4',JSON.stringify(items4));
			window.location.reload();
		};

	</script>
        
        
    </head>
    <body>

    <div class="main">
		<header id="header" class="header">
			
            
            
            <div id="logo">
            <img src="IMAGENES/logo.png">
            </div>
               
        <input type="checkbox" id="check"> <!-- esta es la parte del desplegable del menu, para cuando la pagina reduzca su tamaño -->
        <label for="check" class="icon-menu"></label>

                <nav class="menu">
                    
            
                <ul> 
        
                    <li><a href="index.html" class=" icon-shop">&nbsp INICIO</a></li> 
                    <li><a href="productos.php" class="icon-flight">&nbsp PRODUCTOS</a></li>
                    <li><a class="iconShopping"><p>0</p><i class="fa fa-shopping-cart"></a></i></i>
                    <li><a href="cerrar-sesion.php" class="icon-user-delete-outline">&nbsp SALIR</a></li>
                    
                </ul>

                </nav> 

       </header>
    
            <section></section>

            <section></section>

            <section></section>

            <section></section>
    </div>
	<div class="cartBox">
		<div class="cart">
			<i class="fa fa-close"></i>
            <h1>Tus productos:</h1>
            
            <table></table>
            <table id="table2"></table>
			<table id="table3"></table>
            <table id="table4"></table>
            
		</div>
	</div>
    <div class="hi">
    <!-- <h1>Bienvenido <b>< ?php echo $_SESSION["emaill"]; ?></b> , suerte en tu busqueda.</h1> -->
    </div> 



    </body>
 
    </html>