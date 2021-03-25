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
		for (var i = 0; i < xmlDoc.getElementsByTagName("producto").length; i++) {//elemento raíz
		
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
		seccio[0].innerHTML +=  "<div class='libros1'>"+
		"<div class='itemsBox'>"+
		"<div class='item'>"+
			"<img src='IMAGENES/" + imagen + "'>"+
			"<div class='itemInfo'>"+
				"<h1>"+nombre+"</h1>"+
				"<p><span> "+precio+"</span>€</p>"+
				"<a href='#' title='add to cart' class='attToCart'>Comprar</a>"+
			"</div>"+
			"</div>"+
	        "</div>"+
			"</div>";
		}
        		
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-close');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('active');
	});


	// adding data to localstorage
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[1].children[0].textContent,
						no:1
					};
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(localStorage.getItem('items')).map(data=>{
		no = no+data.no
;	});
	iconShoppingP.innerHTML = no;


	//adding cartbox data in table
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	tableData += '<tr><th> N. &nbsp</th><th>NOMBRE: &nbsp</th><th>CANTIDAD: &nbsp</th><th>PRECIO: &nbsp</th><th></th></tr>';
	if(JSON.parse(localStorage.getItem('items'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(localStorage.getItem('items')).map(data=>{
			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
		});
	}
	cardBoxTable.innerHTML = tableData;
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
for (var i = 0; i < xmlDoc2.getElementsByTagName("producto").length; i++) {//elemento raíz

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
seccio[1].innerHTML +=  "<div class='libros1'>"+
"<div class='itemsBox2'>"+
"<div class='item2'>"+
	"<img src='IMAGENES/" + imagen + "'>"+
	"<div class='itemInfo2'>"+
		"<h1>"+nombre+"</h1>"+
		"<p><span>"+precio+"</span>€</p>"+
		"<a href='#' title='add to cart' class='attToCart2'>Comprar</a>"+
	"</div>"+
	"</div>"+
	"</div>"+
	"</div>";
}

	
//cart box
const iconShopping2 = document.querySelector('.iconShopping');
const cartCloseBtn2 = document.querySelector('.fa-close');
const cartBox2 = document.querySelector('.cartBox');
iconShopping2.addEventListener("click",function(){
cartBox2.classList.add('active');
});
cartCloseBtn2.addEventListener("click",function(){
cartBox2.classList.remove('active');
});


// adding data to localstorage
const attToCartBtn2 = document.getElementsByClassName('attToCart2');
let items2 = [];
for(let i=0; i<attToCartBtn2.length; i++){
attToCartBtn2[i].addEventListener("click",function(e){
	if(typeof(Storage) !== 'undefined'){
		let item2 = {
				id2:i+1,
				name2:e.target.parentElement.children[0].textContent,
				price2:e.target.parentElement.children[1].children[0].textContent,
				no2:1
			};
		if(JSON.parse(localStorage.getItem('items2')) === null){
			items2.push(item2);
			localStorage.setItem("items2",JSON.stringify(items2));
			window.location.reload();
		}else{
			const localItems = JSON.parse(localStorage.getItem("items2"));
			localItems.map(data2=>{
				if(item2.id2 == data2.id2){
					item2.no2 = data2.no2 + 1;
				}else{
					items2.push(data2);
				}
			});
			items2.push(item2);
			localStorage.setItem('items2',JSON.stringify(items2));
			window.location.reload();
		}
	}else{
		alert('local storage is not working on your browser');
	}
});
}
// adding data to shopping cart 
const iconShoppingP2 = document.querySelector('.iconShopping p');
let no2 = 0;
JSON.parse(localStorage.getItem('items2')).map(data2=>{
no2 = no2+data2.no2
;	});
iconShoppingP2.innerHTML = no2;


//adding cartbox data in table
const cardBoxTable2 = cartBox2.querySelector('#table2');
let tableData2 = '';
if(JSON.parse(localStorage.getItem('items2'))[0] === null){
tableData2 += '<tr><td colspan="5">No items found</td></tr>'
}else{
JSON.parse(localStorage.getItem('items2')).map(data2=>{
	tableData2 += '<tr2><th2>'+data2.id2+'&nbsp</th2><th2>'+data2.name2+'&nbsp</th2><th2>'+data2.no2+'&nbsp</th2><th2>'+data2.price2+'&nbsp</th2><th2><a href="#" onclick=Delete2(this);>Delete</a></th2></tr2><br>';
});
}
cardBoxTable2.innerHTML = tableData2;
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
for (var i = 0; i < xmlDoc3.getElementsByTagName("producto").length; i++) {//elemento raíz

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
seccio[2].innerHTML += "<div class='libros1'>"+
"<div class='itemsBox3'>"+
"<div class='item3'>"+
	"<img src='IMAGENES/" + imagen + "'>"+
	"<div class='itemInfo3'>"+
		"<h1>"+nombre+"</h1>"+
		"<p><span>"+precio+"</span>€</p>"+
		"<a href='#' title='add to cart' class='attToCart3'>Comprar</a>"+
	"</div>"+
	"</div>"+
	"</div>"+

	"</div>";
}

	
//cart box
const iconShopping3 = document.querySelector('.iconShopping');
const cartCloseBtn3 = document.querySelector('.fa-close');
const cartBox3 = document.querySelector('.cartBox');
iconShopping3.addEventListener("click",function(){
cartBox3.classList.add('active');
});
cartCloseBtn3.addEventListener("click",function(){
cartBox3.classList.remove('active');
});


// adding data to localstorage
const attToCartBtn3 = document.getElementsByClassName('attToCart3');
let items3 = [];
for(let i=0; i<attToCartBtn3.length; i++){
attToCartBtn3[i].addEventListener("click",function(e){
	if(typeof(Storage) !== 'undefined'){
		let item3 = {
				id3:i+1,
				name3:e.target.parentElement.children[0].textContent,
				price3:e.target.parentElement.children[1].children[0].textContent,
				no3:1
			};
		if(JSON.parse(localStorage.getItem('items3')) === null){
			items3.push(item3);
			localStorage.setItem("items3",JSON.stringify(items3));
			window.location.reload();
		}else{
			const localItems = JSON.parse(localStorage.getItem("items3"));
			localItems.map(data3=>{
				if(item3.id3 == data3.id3){
					item3.no3 = data3.no3 + 1;
				}else{
					items3.push(data3);
				}
			});
			items3.push(item3);
			localStorage.setItem('items3',JSON.stringify(items3));
			window.location.reload();
		}
	}else{
		alert('local storage is not working on your browser');
	}
});
}
// adding data to shopping cart 
const iconShoppingP3 = document.querySelector('.iconShopping p');
let no3 = 0;
JSON.parse(localStorage.getItem('items3')).map(data3=>{
no3 = no3+data3.no3
;	});
iconShoppingP3.innerHTML = no3;


//adding cartbox data in table
const cardBoxTable3 = cartBox3.querySelector('#table3');
let tableData3 = '';
if(JSON.parse(localStorage.getItem('items3'))[0] === null){
tableData3 += '<tr><td colspan="5">No items found</td></tr>'
}else{
JSON.parse(localStorage.getItem('items3')).map(data3=>{
	tableData3 += '<tr3><th3>'+data3.id3+'&nbsp</th3><th3>'+data3.name3+'&nbsp</th3><th3>'+data3.no3+'&nbsp</th3><th3>'+data3.price3+'&nbsp</th3><th3><a href="#" onclick=Delete3(this);>Delete</a></th3></tr3><br>';
});
}
cardBoxTable3.innerHTML = tableData3;
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
for (var i = 0; i < xmlDoc4.getElementsByTagName("producto").length; i++) {//elemento raíz

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
seccio[3].innerHTML += "<div class='libros1'>"+
"<div class='itemsBox4'>"+
"<div class='item4'>"+
	"<img src='IMAGENES/" + imagen + "'>"+
	"<div class='itemInfo4'>"+
		"<h1>"+nombre+"</h1>"+
		"<p><span>"+precio+"</span>€</p>"+
		"<a href='#' title='add to cart' class='attToCart4'>Comprar</a>"+
	"</div>"+
	"</div>"+
	"</div>"+
	"</div>";
}

	
//cart box
const iconShopping4 = document.querySelector('.iconShopping');
const cartCloseBtn4 = document.querySelector('.fa-close');
const cartBox4 = document.querySelector('.cartBox');
iconShopping4.addEventListener("click",function(){
cartBox4.classList.add('active');
});
cartCloseBtn4.addEventListener("click",function(){
cartBox4.classList.remove('active');
});


// adding data to localstorage
const attToCartBtn4 = document.getElementsByClassName('attToCart4');
let items4 = [];
for(let i=0; i<attToCartBtn4.length; i++){
attToCartBtn4[i].addEventListener("click",function(e){
	if(typeof(Storage) !== 'undefined'){
		let item4 = {
				id4:i+1,
				name4:e.target.parentElement.children[0].textContent,
				price4:e.target.parentElement.children[1].children[0].textContent,
				no4:1
			};
		if(JSON.parse(localStorage.getItem('items4')) === null){
			items4.push(item4);
			localStorage.setItem("items4",JSON.stringify(items4));
			window.location.reload();
		}else{
			const localItems = JSON.parse(localStorage.getItem("items4"));
			localItems.map(data4=>{
				if(item4.id4 == data4.id4){
					item4.no4 = data4.no4 + 1;
				}else{
					items4.push(data4);
				}
			});
			items4.push(item4);
			localStorage.setItem('items4',JSON.stringify(items4));
			window.location.reload();
		}
	}else{
		alert('local storage is not working on your browser');
	}
});
}
// adding data to shopping cart 
const iconShoppingP4 = document.querySelector('.iconShopping p');
let no4 = 0;
JSON.parse(localStorage.getItem('items4')).map(data4=>{
no4 = no4+data4.no4
;	});
iconShoppingP4.innerHTML = no4;


//adding cartbox data in table
const cardBoxTable4 = cartBox4.querySelector('#table4');
let tableData4 = '';
if(JSON.parse(localStorage.getItem('items4'))[0] === null){
tableData4 += '<tr><td colspan="5">No items found</td></tr>'
}else{
JSON.parse(localStorage.getItem('items4')).map(data4=>{
	tableData4 += '<tr4><th4>'+data4.id4+'&nbsp</th4><th4>'+data4.name4+'&nbsp</th4><th4>'+data4.no4+'&nbsp</th4><th4>'+data4.price4+'&nbsp</th4><th4><a href="#" onclick=Delete4(this);>Delete</a></th4></tr4><br>';
});
}
cardBoxTable4.innerHTML = tableData4;
}


