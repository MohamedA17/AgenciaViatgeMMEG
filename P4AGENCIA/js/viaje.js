
//AQUÍ LE DECIMOS QUE CARGUE LA VENTANA//
window.addEventListener("load", inicio, false);


//LA FUNCIÓN 'INICIO' TE VA A INVOCAR EL ARCHIVO XML. RECUERDA QUE PARA INVOCARLO DEBES ACLARAR LA RUTA DE ACCESO  DEL XML. Y TODO DEBE CONCORDAR RESPECTO AL XML.//
function inicio() {


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      lecturaXML(this); //----> AQUÍ LE DICES QUE HAGA LA FUNCION "LECTURAXML" QUE LUEGO LA VAS A DECLARAR.//|
  }
};

xhttp.open("GET", "XML/xml/viaje.xml", true);
xhttp.send();


}

// EN LA FUNCIÓN LECTURAXML(xml), vas a declarar variables y vas a programar un bucle.//
function lecturaXML(xml) {
var xmlDoc = xml.responseXML;
var seccio = document.getElementsByTagName("section");


// AQUI VAS A DECLARAR TODAS LAS ETIQUETAS EXACTAMENTE IGUAL QUE TIENES AL XML. //       
for (var i = 0; i < xmlDoc.getElementsByTagName("viaje").length; i++) {//elemento raíz

  var nombre = xmlDoc.getElementsByTagName("nombre")[i].childNodes[0].nodeValue; 

  var id = xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue;

  var precio = xmlDoc.getElementsByTagName("precio")[i].childNodes[0].nodeValue;

  var lugar = xmlDoc.getElementsByTagName("lugar")[i].childNodes[0].nodeValue;

  var fecha = xmlDoc.getElementsByTagName("fecha")[i].childNodes[0].nodeValue;

  var imagen = xmlDoc.getElementsByTagName("imagen")[i].childNodes[0].nodeValue;

//HARÁS UN BUCLE GRACIAS A LA "[i]". QUE VA A MOVERSE POR TODAS LAS ETIQUETAS Y VA A MOSTRARLAS.
//ENTONCES, DECLARAS seccion TAL Y COMO ESTÁ DEBAJO. IMPORTANTE!: NO TE DEJES NINGUN +. ESTO VA A CONCATENAR TODOS
//LOS PRODUCTOS QUE TENGAS AL XML. SOLO DEBES PONER 1 VEZ. YA QUE EL BUCLE TE PERMITIRÁ MOSTRAR LOS PRODUCTOS EN UNA SOLA
//INVOCACIÓN //

//var seccio = document.getElementsByTagName("section");    
seccio[0].innerHTML =  "<div class='libros1'>"+
                            "<img src='IMAGENES/Roma.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Roma</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/Ibiza.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Ibiza</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>600€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/Hawaii.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Hawaii</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>1200€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/Londres.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Londres</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/Paris.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>París</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>450€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/Miami.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Miami</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>900€</p>"+
                            "</div>"+
                        "</div>";
}
}








//AQUÍ LE DECIMOS QUE CARGUE LA VENTANA//
window.addEventListener("load", inicio2, false);


//LA FUNCIÓN 'INICIO' TE VA A INVOCAR EL ARCHIVO XML. RECUERDA QUE PARA INVOCARLO DEBES ACLARAR LA RUTA DE ACCESO  DEL XML. Y TODO DEBE CONCORDAR RESPECTO AL XML.//
function inicio2() {


var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      lecturaXML2(this); //----> AQUÍ LE DICES QUE HAGA LA FUNCION "LECTURAXML" QUE LUEGO LA VAS A DECLARAR.//|
  }
};

xhttp2.open("GET", "XML/xml/hotel.xml", true);
xhttp2.send();


}

// EN LA FUNCIÓN LECTURAXML(xml), vas a declarar variables y vas a programar un bucle.//
function lecturaXML2(xml) {
var xmlDoc2 = xml.responseXML;
var seccio = document.getElementsByTagName("section");


// AQUI VAS A DECLARAR TODAS LAS ETIQUETAS EXACTAMENTE IGUAL QUE TIENES AL XML. //       
for (var i = 0; i < xmlDoc2.getElementsByTagName("hotel").length; i++) {//elemento raíz

  var nombre = xmlDoc2.getElementsByTagName("nombre")[i].childNodes[0].nodeValue; 

  var id = xmlDoc2.getElementsByTagName("id")[i].childNodes[0].nodeValue;

  var precio = xmlDoc2.getElementsByTagName("precio")[i].childNodes[0].nodeValue;

  var lugar = xmlDoc2.getElementsByTagName("lugar")[i].childNodes[0].nodeValue;

  var fecha = xmlDoc2.getElementsByTagName("fecha")[i].childNodes[0].nodeValue;

  var imagen = xmlDoc2.getElementsByTagName("imagen")[i].childNodes[0].nodeValue;

//HARÁS UN BUCLE GRACIAS A LA "[i]". QUE VA A MOVERSE POR TODAS LAS ETIQUETAS Y VA A MOSTRARLAS.
//ENTONCES, DECLARAS seccion TAL Y COMO ESTÁ DEBAJO. IMPORTANTE!: NO TE DEJES NINGUN +. ESTO VA A CONCATENAR TODOS
//LOS PRODUCTOS QUE TENGAS AL XML. SOLO DEBES PONER 1 VEZ. YA QUE EL BUCLE TE PERMITIRÁ MOSTRAR LOS PRODUCTOS EN UNA SOLA
//INVOCACIÓN //

//var seccio = document.getElementsByTagName("section");    
seccio[1].innerHTML =  "<div class='libros1'>"+
                            "<img src='IMAGENES/hotelRoma.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Roma hotel</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/hotelIbiza.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Ibiza hotel</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>600€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/hotelHawaii.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Hawaii hotel</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>1200€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/hotelLondres.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Londres hotel</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/hotelParis.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>París hotel</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>450€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/hotelMiami.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Miami hotel</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>900€</p>"+
                            "</div>"+
                        "</div>";
}
}





//AQUÍ LE DECIMOS QUE CARGUE LA VENTANA//
window.addEventListener("load", inicio3, false);


//LA FUNCIÓN 'INICIO' TE VA A INVOCAR EL ARCHIVO XML. RECUERDA QUE PARA INVOCARLO DEBES ACLARAR LA RUTA DE ACCESO  DEL XML. Y TODO DEBE CONCORDAR RESPECTO AL XML.//
function inicio3() {


var xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      lecturaXML3(this); //----> AQUÍ LE DICES QUE HAGA LA FUNCION "LECTURAXML" QUE LUEGO LA VAS A DECLARAR.//|
  }
};

xhttp3.open("GET", "XML/xml/restaurante.xml", true);
xhttp3.send();


}

// EN LA FUNCIÓN LECTURAXML(xml), vas a declarar variables y vas a programar un bucle.//
function lecturaXML3(xml) {
var xmlDoc3 = xml.responseXML;
var seccio = document.getElementsByTagName("section");


// AQUI VAS A DECLARAR TODAS LAS ETIQUETAS EXACTAMENTE IGUAL QUE TIENES AL XML. //       
for (var i = 0; i < xmlDoc3.getElementsByTagName("restaurante").length; i++) {//elemento raíz

  var nombre = xmlDoc3.getElementsByTagName("nombre")[i].childNodes[0].nodeValue; 

  var id = xmlDoc3.getElementsByTagName("id")[i].childNodes[0].nodeValue;

  var precio = xmlDoc3.getElementsByTagName("precio")[i].childNodes[0].nodeValue;

  var lugar = xmlDoc3.getElementsByTagName("lugar")[i].childNodes[0].nodeValue;

  var fecha = xmlDoc3.getElementsByTagName("fecha")[i].childNodes[0].nodeValue;

  var imagen = xmlDoc3.getElementsByTagName("imagen")[i].childNodes[0].nodeValue;

//HARÁS UN BUCLE GRACIAS A LA "[i]". QUE VA A MOVERSE POR TODAS LAS ETIQUETAS Y VA A MOSTRARLAS.
//ENTONCES, DECLARAS seccion TAL Y COMO ESTÁ DEBAJO. IMPORTANTE!: NO TE DEJES NINGUN +. ESTO VA A CONCATENAR TODOS
//LOS PRODUCTOS QUE TENGAS AL XML. SOLO DEBES PONER 1 VEZ. YA QUE EL BUCLE TE PERMITIRÁ MOSTRAR LOS PRODUCTOS EN UNA SOLA
//INVOCACIÓN //

//var seccio = document.getElementsByTagName("section");    
seccio[2].innerHTML =  "<div class='libros1'>"+
                            "<img src='IMAGENES/restauranteRoma.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Roma restaurante</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/restauranteIbiza.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Ibiza restaurante</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>600€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/restauranteHawaii.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Hawaii restaurante</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>1200€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/restauranteLondres.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Londres restaurante</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/restauranteParis.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>París restaurante</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>450€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/restauranteMiami.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Miami restaurante</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>900€</p>"+
                            "</div>"+
                        "</div>";
}
}



//AQUÍ LE DECIMOS QUE CARGUE LA VENTANA//
window.addEventListener("load", inicio4, false);


//LA FUNCIÓN 'INICIO' TE VA A INVOCAR EL ARCHIVO XML. RECUERDA QUE PARA INVOCARLO DEBES ACLARAR LA RUTA DE ACCESO  DEL XML. Y TODO DEBE CONCORDAR RESPECTO AL XML.//
function inicio4() {


var xhttp4 = new XMLHttpRequest();
xhttp4.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
      lecturaXML4(this); //----> AQUÍ LE DICES QUE HAGA LA FUNCION "LECTURAXML" QUE LUEGO LA VAS A DECLARAR.//|
  }
};

xhttp4.open("GET", "XML/xml/excursion.xml", true);
xhttp4.send();


}

// EN LA FUNCIÓN LECTURAXML(xml), vas a declarar variables y vas a programar un bucle.//
function lecturaXML4(xml) {
var xmlDoc4 = xml.responseXML;
var seccio = document.getElementsByTagName("section");


// AQUI VAS A DECLARAR TODAS LAS ETIQUETAS EXACTAMENTE IGUAL QUE TIENES AL XML. //       
for (var i = 0; i < xmlDoc4.getElementsByTagName("excursion").length; i++) {//elemento raíz

  var nombre = xmlDoc4.getElementsByTagName("nombre")[i].childNodes[0].nodeValue; 

  var id = xmlDoc4.getElementsByTagName("id")[i].childNodes[0].nodeValue;

  var precio = xmlDoc4.getElementsByTagName("precio")[i].childNodes[0].nodeValue;

  var lugar = xmlDoc4.getElementsByTagName("lugar")[i].childNodes[0].nodeValue;

  var fecha = xmlDoc4.getElementsByTagName("fecha")[i].childNodes[0].nodeValue;

  var imagen = xmlDoc4.getElementsByTagName("imagen")[i].childNodes[0].nodeValue;

//HARÁS UN BUCLE GRACIAS A LA "[i]". QUE VA A MOVERSE POR TODAS LAS ETIQUETAS Y VA A MOSTRARLAS.
//ENTONCES, DECLARAS seccion TAL Y COMO ESTÁ DEBAJO. IMPORTANTE!: NO TE DEJES NINGUN +. ESTO VA A CONCATENAR TODOS
//LOS PRODUCTOS QUE TENGAS AL XML. SOLO DEBES PONER 1 VEZ. YA QUE EL BUCLE TE PERMITIRÁ MOSTRAR LOS PRODUCTOS EN UNA SOLA
//INVOCACIÓN //

//var seccio = document.getElementsByTagName("section");    
seccio[3].innerHTML =  "<div class='libros1'>"+
                            "<img src='IMAGENES/excursionRoma.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Roma excursión</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/excursionIbiza.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Ibiza excursión</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>600€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/excursionHawaii.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Hawaii excursión</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>1200€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/excursionLondres.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Londres excursión</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>400€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/excursionParis.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>París excursión</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>450€</p>"+
                            "</div>"+
                        "</div>"+

                        "<div class='libros1'>"+
                            "<img src='IMAGENES/excursionMiami.jpg' alt='PORTADA'>"+

                            "<div class='datos'>"+
                                "<h2>Miami excursión</h2>"+
                                "<h3>PRECIO:</h3>"+
                                "<p>900€</p>"+
                            "</div>"+
                        "</div>";
}
}
