<?php 
//condicion de redireccionamiento de pagina (si se inicia sesion, que nos lleve a la pagina de inicio de los socios)
session_start();
if(isset($_SESSION["loggedin"]) && $_SESSION ["loggedin"]== true){
    header("location: iniciosocios.php");
    exit;
}
//solcitando la conexion
require_once "conexion.php";
//inicializando variables
$email = $password = "";
$email_err = $password_err = "";
//si el formulario se envia:
if($_SERVER["REQUEST_METHOD"] === "POST"){
    //si el campo "email" esta vacio, que nos muestre el siguiente error,sino que se ejecute:
    if(empty(trim($_POST["emaill"]))){
        $email_err = "Por favor, ingrese su email";
    }else{
        $email = trim($_POST["emaill"]);
    }
    //si el campo "password" esta vacio, que nos muestre el siguiente error, sino que se ejecute:
    if(empty(trim($_POST["password"]))){
        $password_err = "Por favor, ingrese su constraseña";
    }else{
        $password = trim($_POST["password"]);
    }



    //validar credenciales
    if(empty($email_err) && empty($password_err)){
        
        $sql = "SELECT CORREO,PASSWORD FROM CLIENTE WHERE CORREO = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            
            mysqli_stmt_bind_param($stmt, "s", $param_email);
            
            $param_email = $email;
            
            if(mysqli_stmt_execute($stmt)){
                mysqli_stmt_store_result($stmt);
            }
            
            if(mysqli_stmt_num_rows($stmt) == 1){
                mysqli_stmt_bind_result($stmt,$email,$password);
                if(mysqli_stmt_fetch($stmt)){
                    
                    if($password == $_POST["password"]){ //Aqui el verifica si la contraseña es correcta
                        session_start();
                        
                        // ALMACEAR DATOS EN VARABLES DE SESION
                        $_SESSION["loggedin"] = true;
                        
                        $_SESSION["emaill"] = $email;
                        
                        header("location: iniciosocios.php");
                    }else{
                        $password_err = "La contraseña que has introducido no es valida";
                    }
                    
                } 
            }else{
                    $email_err = "No se ha encontrado ninguna cuenta con ese CORREO.";
                }
            
        }else{
                    echo "UPS! algo salio mal, intentalo mas tarde";
                }
        
    }
    
    mysqli_close($link);
    
}


?>

<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <title>INICIA SESION</title>
    
        <link rel="stylesheet" href="IMAGENES/">
        <link rel="stylesheet" href="CSS/formulario.css">
        <link rel="stylesheet" href="iconos/css/fontello.css">
        <link rel="stylesheet" href="iconos2/css/fontello.css">
        
        <meta name="viewport" content="width=device-width, user-scalable=no,initial-sclale=1.0,maximum-scale=1.0,minimum-scale=1.0">


    </head>
    <body>

        <header> 
            <div id="logo">
            <img src="IMAGENES/logo.png">
            </div>
             
    
        <input type="checkbox" id="check"> <!-- esta es la parte del desplegable del menu, para cuando la pagina reduzca su tamaño -->
            <label for="check" class="icon-menu"></label>
         <nav class="menu">
            
    
            <ul> 

            <li><a href="index.html" class=" icon-shop">&nbsp INICIO</a></li> 
            <li><a href="" class="icon-flight">&nbsp PRODUCTOS</a></li>
            <li><a href="socios.php" class="icon-user">&nbsp CLIENTE</a></li>              
        
         </ul>
         </nav> 
        </header>




    <div class="container-all">  <!-- Aquí estará contenido el formulario y el texto de acompañamiento (todo)-->

        <div class="container-form"> <!-- Aquí se guardara la parte del formulario-->
          
          <h1 class="title">Iniciar sesión</h1>

          <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">  <!-- Asi el formulario estará esperando la llamada cuando se le de clic al boton de registrarse haga una función-->
              <label for="">Correo:</label>
              <input type="text" name="emaill">
              <span class="message-error"><?php echo $email_err; ?></span>
              <label for="">Contraseña:</label>
              <input type="password" name="password">
              <span class="message-error"><?php echo $password_err; ?></span>

              <input type="submit" value="Entrar">
          </form>
            
            <span class="text-footer"> Es necesario iniciar sesión para poder realizar tu compra. ¿Aún no tienes una cuenta? <a href="registrosocios.php">Registrate.</a>
            </span>
        </div>


    </div>

    </body> 
        
    </html>