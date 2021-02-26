
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

xhttp.open("GET", "XML/xml/hotel.xml", true);
xhttp.send();


}

// EN LA FUNCIÓN LECTURAXML(xml), vas a declarar variables y vas a programar un bucle.//
function lecturaXML(xml) {
var xmlDoc = xml.responseXML;
var seccio = document.getElementsByTagName("section");

// AQUI VAS A DECLARAR TODAS LAS ETIQUETAS EXACTAMENTE IGUAL QUE TIENES AL XML. //       
for (var i = 0; i < xmlDoc.getElementsByTagName("hotel").length; i++) {//elemento raíz

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
