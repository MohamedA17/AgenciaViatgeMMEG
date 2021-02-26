window.addEventListener("load", inici, false);


function inici() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            lexturaXML(this);
        }
    };
    xhttp.open("GET", "xml/llibreria.xml", true);
    xhttp.send();

}

function lexturaXML(xml) {

    var xmlDoc = xml.responseXML;

    var seccio = document.getElementsByTagName("section");


    for (var i = 0; i < xmlDoc.getElementsByTagName("llibre").length; i++) {

        var llibre = xmlDoc.getElementsByTagName("nom")[0].childNodes[0].nodeValue;

        var autor = xmlDoc.getElementsByTagName("autor")[0].childNodes[0].nodeValue;

        var preu = xmlDoc.getElementsByTagName("preu")[0].childNodes[0].nodeValue;

        var portada = xmlDoc.getElementsByTagName("portada")[0].childNodes[0].nodeValue;



        seccio[0].innerHTML += "<div class='llibre'>" +
            "<img src='imatges/gita.jpg" + portada + "' alt='portada'>" +

            "<div class='dades'>" +
            "<h2>" + llibre + "</h2>" +
            "<h3>" + autor + "</h3>" +
            "<p>" + preu + "</p>" +
            "</div>" +
            "<a href='#' class='compra'>Comprar</<a>" +
            "</div>";

    }
}
