"<title>Carrito Compras en JavaScript</title>"+


        "<div class='container'>"+
            "<div class='row align-items-stretch justify-content-between'>"+
                "<nav class='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>"+
                    "<a class='navbar-brand' href='#'>BODEGUITA FLORES EIRL</a>"+
                    "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>"+
                        "<span class='navbar-toggler-icon'></span>"+
                    "</button>"+
                    "<div class='collapse navbar-collapse' id='navbarCollapse'>"+
                        "<ul class='navbar-nav mr-auto'>"+
                            "<li class='nav-item dropdown'>"+
                                "<img src='img/cart.jpeg' class='nav-link dropdown-toggle img-fluid' height='70px' width='70px' href='#' id='dropdown01' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></img>"+
                                "<div id='carrito' class='dropdown-menu' aria-labelledby='navbarCollapse'>"+
                                    "<table id='lista-carrito' class='table'>"+
                                        "<thead>"+
                                            "<tr>"+
                                                "<th>"+Imagen+"</th>"+
                                                "<th>"+Nombre+"</th>"+
                                                "<th>"+Precio+"</th>"+
                                                "<th></th>"+
                                            "</tr>"+
                                        "</thead>"+
                                        "<tbody></tbody>"+
                                    "</table>"+

                                    "<a href='#' id='vaciar-carrito' class='btn btn-primary btn-block'>Vaciar Carrito</a>"+
                                    "<a href='#' id='procesar-pedido' class='btn btn-danger btn-block'>Procesar Compra</a>"+
                                "</div>"+
                            "</li>"+
                        "</ul>"+
                    "</div>"+
                "</nav>"
            "</div>"+
        "</div>";
  







    "<div>"+
        "<div class='pricing-header px-3 py-3 pt-md-5 pb-md-4 my-4 mx-auto text-center'>"+
            "<h1 class='display-4 mt-4'>Lista de Productos</h1>"+
            "<p class='lead'>Selecciona uno de nuestros productos y accede a un descuento</p>"+
        "</div>"+

        "<div class='container' id='lista-productos'>"+
            
            "<div class='card-deck mb-3 text-center'>"+
                
                "<div class='card mb-4 shadow-sm'>"+
                    "<div class='card-header'>"+
                        "<h4 class='my-0 font-weight-bold'>HP PAVILION</h4>"+
                    "</div>"+
                    "<div class='card-body'>"+
                        "<img src='img/hp1.jpg' class='card-img-top'>"+
                        "<h1 class='card-title pricing-card-title precio'>S/. <span class="">5000</span></h1>"+

                        "<ul class='list-unstyled mt-3 mb-4'>" +
                            "<li></li>"
                            "<li>"+ 8 GB RAM +"</li>"+
                            "<li>"+COLOR PLATEADO+"</li>"+
                            "<li>"+256 GB DISCO SSD+"</li>"+
                        "</ul>"+
                        "<a href='#' class='btn btn-block btn-primary agregar-carrito' data-id='1'>Comprar</a>"+
                    "</div>"+
                "</div>"+

            "</div>"+

        "</div>"+
        
    "</div>";